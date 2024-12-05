import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// This would typically come from your database or CMS
const STORIES = [
  {
    id: 1,
    title: "A Miraculous Recovery",
    description: "The inspiring story of hope and healing against all odds.",
    thumbnail: "https://placehold.co/1280x720/purple/white?text=Miraculous+Recovery",
    duration: "5:30",
    videoUrl: "https://example.com/video1.mp4", // Replace with actual video URL
    fullStory: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
      in culpa qui officia deserunt mollit anim id est laborum.
    `,
  },
  {
    id: 2,
    title: "The Unexpected Gift",
    description: "A tale of divine intervention in the most unexpected moment.",
    thumbnail: "https://placehold.co/1280x720/purple/white?text=Unexpected+Gift",
    duration: "4:45",
    videoUrl: "https://example.com/video2.mp4",
    fullStory: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    `,
  },
  {
    id: 3,
    title: "Guardian Angel",
    description: "A remarkable story of protection in a moment of crisis.",
    thumbnail: "https://placehold.co/1280x720/purple/white?text=Guardian+Angel",
    duration: "6:15",
    videoUrl: "https://example.com/video3.mp4",
    fullStory: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    `,
  },
]

interface StoryPageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function StoryPage({ params, searchParams }: StoryPageProps) {
  const story = STORIES.find(s => s.id === parseInt(params.id))
  
  if (!story) {
    notFound()
  }

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link 
          href="/stories" 
          className="text-purple-600 hover:text-purple-700 mb-6 inline-block"
        >
          ← Back to Stories
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">{story.title}</h1>
        
        {/* Video Player Placeholder */}
        <div className="aspect-video relative mb-8 bg-gray-900 rounded-lg overflow-hidden">
          <Image
            src={story.thumbnail}
            alt={story.title}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-90 px-4 py-2 rounded-lg text-gray-800">
              Video Player Placeholder
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">The Story</h2>
          <p className="whitespace-pre-line">{story.fullStory}</p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">More Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STORIES.filter(s => s.id !== story.id).map(relatedStory => (
              <div key={relatedStory.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <div className="aspect-video relative">
                    <Image
                      src={relatedStory.thumbnail}
                      alt={relatedStory.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {relatedStory.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{relatedStory.title}</h3>
                  <p className="text-gray-600 mb-4">{relatedStory.description}</p>
                  <Link 
                    href={`/stories/${relatedStory.id}`}
                    className="text-purple-600 font-medium hover:text-purple-700"
                  >
                    Watch Story →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 