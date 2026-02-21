import { createFileRoute } from '@tanstack/react-router'
import Hero from '../component/Hero'

export const Route = createFileRoute('/')({
  component: Hero,
})