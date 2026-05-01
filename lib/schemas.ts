import { z } from 'zod'

export const checkoutSchema = z.object({
  userId: z.string().min(1, 'userId is required'),
  email: z.string().email('Invalid email'),
})

export type CheckoutInput = z.infer<typeof checkoutSchema>
