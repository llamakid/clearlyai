import { notFound } from 'next/navigation'
import CoursePlayer from '@/components/CoursePlayer'
import module1 from '@/lib/course-data/module-1'
import module2 from '@/lib/course-data/module-2'
import module3 from '@/lib/course-data/module-3'
import module4 from '@/lib/course-data/module-4'
import module5 from '@/lib/course-data/module-5'
import module6 from '@/lib/course-data/module-6'
import type { CourseData } from '@/lib/course-data/types'

const COURSES: Record<string, CourseData> = {
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

  return <CoursePlayer course={course} />
}
