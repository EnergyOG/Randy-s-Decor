import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../component/NavBar'
import BookUs from '../component/BookUs'

function BookUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-gray-200">
      <Navbar />
      <div className="pt-20 px-6">
        <BookUs />
      </div>
    </div>
  )
}

export const Route = createFileRoute('/book-us')({
  component: BookUsPage,
})