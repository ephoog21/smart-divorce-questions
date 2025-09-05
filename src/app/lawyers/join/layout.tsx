import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'Join Our Lawyer Directory | Smart Divorce Questions',
  description: 'Join our exclusive divorce lawyer directory. Get premium placement, qualified leads, and grow your family law practice with targeted visibility.',
  path: '/lawyers/join',
})

export default function LawyerJoinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}