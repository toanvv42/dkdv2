import Image from 'next/image'
import Link from 'next/link'

// This would typically come from your database or CMS
const LATEST_POSTS = [
  {
    id: 1,
    title: "Finding Faith in Difficult Times",
    excerpt: "A collection of stories about maintaining faith during life's biggest challenges.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    thumbnail: "https://placehold.co/800x450/purple/white?text=Finding+Faith",
  },
  {
    id: 2,
    title: "Small Miracles: Everyday Stories of Hope",
    excerpt: "Discovering the miraculous in our daily lives through personal testimonies.",
    author: "Michael Chen",
    date: "2024-01-12",
    thumbnail: "https://placehold.co/800x450/purple/white?text=Small+Miracles",
  },
  {
    id: 3,
    title: "The Science Behind Unexplained Miracles",
    excerpt: "Exploring the intersection of science and faith in miraculous events.",
    author: "Dr. Emily Roberts",
    date: "2024-01-10",
    thumbnail: "https://placehold.co/800x450/purple/white?text=Science+of+Miracles",
  },
]

export function LatestPosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {LATEST_POSTS.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-[16/9] relative">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <time>{new Date(post.date).toLocaleDateString()}</time>
            </div>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link 
              href={`/blog/${post.id}`}
              className="text-purple-600 font-medium hover:text-purple-700"
            >
              Read More →
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
} 