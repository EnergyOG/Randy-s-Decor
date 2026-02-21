import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../component/NavBar'
import Gallery from '../component/Gallery'

function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-gray-200">
      <Navbar />
      <div className="pt-20 px-6">
        <Gallery />
      </div>
    </div>
  )
}

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
})