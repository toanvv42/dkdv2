import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

// This would typically come from your database or CMS
const BLOG_POSTS = [
  {
    id: 1,
    title: "Finding Faith in Difficult Times",
    excerpt: "A collection of stories about maintaining faith during life's biggest challenges.",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
      in culpa qui officia deserunt mollit anim id est laborum.

      ## Finding Hope
      
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
      veritatis et quasi architecto beatae vitae dicta sunt explicabo.

      ## The Power of Faith

      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
      sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    thumbnail: "https://placehold.co/1280x720/purple/white?text=Finding+Faith",
  },
  {
    id: 2,
    title: "Small Miracles: Everyday Stories of Hope",
    excerpt: "Discovering the miraculous in our daily lives through personal testimonies.",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ## Daily Miracles

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
      in culpa qui officia deserunt mollit anim id est laborum.
    `,
    author: "Michael Chen",
    date: "2024-01-12",
    thumbnail: "https://placehold.co/1280x720/purple/white?text=Small+Miracles",
  },
  {
    id: 3,
    title: "The Science Behind Unexplained Miracles",
    excerpt: "Exploring the intersection of science and faith in miraculous events.",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ## Scientific Analysis

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
      in culpa qui officia deserunt mollit anim id est laborum.
    `,
    author: "Dr. Emily Roberts",
    date: "2024-01-10",
    thumbnail: "https://placehold.co/1280x720/purple/white?text=Science+of+Miracles",
  },
]

type Props = {
  params: { id: string }
}

export default function BlogPost({ params }: Props) {
  const post = BLOG_POSTS.find(p => p.id === parseInt(params.id))
  
  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen py-12">
      <article className="container mx-auto px-4 max-w-4xl">
        <Link 
          href="/blog" 
          className="text-purple-600 hover:text-purple-700 mb-6 inline-block"
        >
          ← Back to Blog
        </Link>
        
        <div className="aspect-[21/9] relative mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600">
            <span className="font-medium">{post.author}</span>
            <span className="mx-2">•</span>
            <time>{new Date(post.date).toLocaleDateString()}</time>
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>
          <div className="whitespace-pre-line">{post.content}</div>
        </div>

        <div className="mt-12 border-t pt-12">
          <h2 className="text-2xl font-semibold mb-6">More Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.filter(p => p.id !== post.id).map(relatedPost => (
              <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={relatedPost.thumbnail}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{relatedPost.author}</span>
                    <span className="mx-2">•</span>
                    <time>{new Date(relatedPost.date).toLocaleDateString()}</time>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{relatedPost.title}</h3>
                  <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                  <Link 
                    href={`/blog/${relatedPost.id}`}
                    className="text-purple-600 font-medium hover:text-purple-700"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
} 