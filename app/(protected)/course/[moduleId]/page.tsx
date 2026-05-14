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
import type { CourseData } from '@/lib/course-data/types'

const COURSES: Record<string, CourseData> = {
  '0': starterCourse,
  '1': module1,
  '2': module2,
  '3': module3,
  '4': module4,
  '5': module5,
  '6': module6,
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

  // Fetch saved progress (modules 1-6 only — module 0 not in schema constraint)
  const moduleNum = parseInt(moduleId)
  let initialProgress: { current_lesson: number; current_slide: number; completed: boolean } | null = null
  if (moduleNum >= 1 && moduleNum <= 6) {
    const { data } = await supabase
      .from('course_progress')
      .select('current_lesson, current_slide, completed')
      .eq('user_id', user!.id)
      .eq('module_id', moduleNum)
      .maybeSingle()
    initialProgress = data
  }

  return <CoursePlayer course={course} userId={user!.id} initialProgress={initialProgress} />
}
