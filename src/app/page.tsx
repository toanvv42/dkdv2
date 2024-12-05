import Link from 'next/link'
import { FeaturedStories } from '@/components/FeaturedStories'
import { LatestPosts } from '@/components/LatestPosts'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Miracle Stories</h1>
          <p className="text-xl mb-8">Discover extraordinary tales of hope, faith, and miracles that changed lives forever.</p>
          <Link 
            href="/stories" 
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
          >
            Explore Stories
          </Link>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Stories</h2>
          <FeaturedStories />
          <div className="text-center mt-8">
            <Link 
              href="/stories" 
              className="text-purple-600 font-semibold hover:text-purple-700"
            >
              View All Stories →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
          <LatestPosts />
          <div className="text-center mt-8">
            <Link 
              href="/blog" 
              className="text-purple-600 font-semibold hover:text-purple-700"
            >
              Read More Posts →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Share Your Miracle Story</h2>
          <p className="text-xl mb-8">Have an inspiring story to share? We'd love to hear from you.</p>
          <Link 
            href="/submit-story" 
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
          >
            Submit Your Story
          </Link>
        </div>
      </section>
    </main>
  )
}
