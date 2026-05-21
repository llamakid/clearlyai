import { notFound, redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import CoursePlayer from '@/components/CoursePlayer'
import starterCourse from '@/lib/course-data/starter'
import module1 from '@/lib/course-data/module-1'
import module2 from '@/lib/course-data/module-2'
import module3 from '@/lib/course-data/module-3'
import module4 from '@/lib/course-data/module-4'
import module5 from '@/lib/course-data/module-5'
import module6 from '@/lib/course-data/module-6'
import c2module1 from '@/lib/course-data/c2-module-1'
import c2module2 from '@/lib/course-data/c2-module-2'
import c2module3 from '@/lib/course-data/c2-module-3'
import c2module4 from '@/lib/course-data/c2-module-4'
import c2module5 from '@/lib/course-data/c2-module-5'
import c2module6 from '@/lib/course-data/c2-module-6'
import c3module1 from '@/lib/course-data/c3-module-1'
import c3module2 from '@/lib/course-data/c3-module-2'
import c3module3 from '@/lib/course-data/c3-module-3'
import c3module4 from '@/lib/course-data/c3-module-4'
import c3module5 from '@/lib/course-data/c3-module-5'
import c3module6 from '@/lib/course-data/c3-module-6'
import c4module1 from '@/lib/course-data/c4-module-1'
import c4module2 from '@/lib/course-data/c4-module-2'
import c4module3 from '@/lib/course-data/c4-module-3'
import c4module4 from '@/lib/course-data/c4-module-4'
import c4module5 from '@/lib/course-data/c4-module-5'
import c4module6 from '@/lib/course-data/c4-module-6'
import c5module1 from '@/lib/course-data/c5-module-1'
import c5module2 from '@/lib/course-data/c5-module-2'
import c5module3 from '@/lib/course-data/c5-module-3'
import c5module4 from '@/lib/course-data/c5-module-4'
import c5module5 from '@/lib/course-data/c5-module-5'
import c5module6 from '@/lib/course-data/c5-module-6'
import c6module1 from '@/lib/course-data/c6-module-1'
import c6module2 from '@/lib/course-data/c6-module-2'
import c6module3 from '@/lib/course-data/c6-module-3'
import c6module4 from '@/lib/course-data/c6-module-4'
import c6module5 from '@/lib/course-data/c6-module-5'
import c6module6 from '@/lib/course-data/c6-module-6'
import type { CourseData } from '@/lib/course-data/types'
import { COURSES_META } from '@/lib/course-data/courses'

const COURSES: Record<string, CourseData> = {
  '0': starterCourse,
  '1': module1,
  '2': module2,
  '3': module3,
  '4': module4,
  '5': module5,
  '6': module6,
  '7': c2module1,
  '8': c2module2,
  '9': c2module3,
  '10': c2module4,
  '11': c2module5,
  '12': c2module6,
  '13': c3module1,
  '14': c3module2,
  '15': c3module3,
  '16': c3module4,
  '17': c3module5,
  '18': c3module6,
  '19': c4module1,
  '20': c4module2,
  '21': c4module3,
  '22': c4module4,
  '23': c4module5,
  '24': c4module6,
  '25': c5module1,
  '26': c5module2,
  '27': c5module3,
  '28': c5module4,
  '29': c5module5,
  '30': c5module6,
  '31': c6module1,
  '32': c6module2,
  '33': c6module3,
  '34': c6module4,
  '35': c6module5,
  '36': c6module6,
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ moduleId: string }>
}) {
  const { moduleId } = await params
  const course = COURSES[moduleId]

  if (!course) notFound()

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Module 0 (starter course) is free for all signed-in users
  if (moduleId !== '0') {
    const { data: purchases } = await supabase
      .from('purchases')
      .select('plan_type, subscription_status')
      .eq('user_id', user!.id)

    const hasPurchase = purchases?.some(
      (p) =>
        p.plan_type === 'forever' ||
        p.subscription_status === 'active' ||
        p.subscription_status === 'past_due'
    )

    if (!hasPurchase) {
      redirect('/pricing')
    }
  }

  // Fetch saved progress for all modules including module 0
  const moduleNum = parseInt(moduleId)
  const { data: initialProgress } = await supabase
    .from('course_progress')
    .select('current_lesson, current_slide, completed')
    .eq('user_id', user!.id)
    .eq('module_id', moduleNum)
    .maybeSingle()

  const courseSlug = moduleNum === 0 ? '' : (COURSES_META.find(c => c.modules.some(m => m.id === moduleNum))?.slug ?? 'ai-foundations')

  return <CoursePlayer course={course} courseSlug={courseSlug} userId={user!.id} initialProgress={initialProgress} />
}
