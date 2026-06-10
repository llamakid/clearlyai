import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import CoursePlayer from '@/components/CoursePlayer'
import starterCourse from '@/lib/course-data/starter'

export const metadata: Metadata = {
  title: '10 Things You Can Do With AI Today — Free Course — Clearly, AI',
  description: 'A free, plain-English starter course: ten practical things you can do with AI today, each with a ready-to-use prompt. No signup needed to start.',
}

// The free starter course — public, no auth required. This static segment
// takes precedence over the protected /course/[moduleId] route, and proxy.ts
// exempts /course/0 from the auth redirect.
export default async function StarterCoursePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Logged-in users get their saved position; anonymous visitors fall back
  // to localStorage inside CoursePlayer.
  let initialProgress = null
  if (user) {
    const { data } = await supabase
      .from('course_progress')
      .select('current_lesson, current_slide, completed')
      .eq('user_id', user.id)
      .eq('module_id', 0)
      .maybeSingle()
    initialProgress = data
  }

  return (
    <CoursePlayer
      course={starterCourse}
      courseSlug=""
      userId={user?.id}
      initialProgress={initialProgress}
    />
  )
}
