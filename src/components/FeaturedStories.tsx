import Image from 'next/image'
import Link from 'next/link'

// This would typically come from your database or CMS
const FEATURED_STORIES = [
  {
    id: 1,
    title: "A Miraculous Recovery",
    description: "The inspiring story of hope and healing against all odds.",
    thumbnail: "https://placehold.co/600x400/purple/white?text=Miraculous+Recovery",
    duration: "5:30",
  },
  {
    id: 2,
    title: "The Unexpected Gift",
    description: "A tale of divine intervention in the most unexpected moment.",
    thumbnail: "https://placehold.co/600x400/purple/white?text=Unexpected+Gift",
    duration: "4:45",
  },
  {
    id: 3,
    title: "Guardian Angel",
    description: "A remarkable story of protection in a moment of crisis.",
    thumbnail: "https://placehold.co/600x400/purple/white?text=Guardian+Angel",
    duration: "6:15",
  },
]

export function FeaturedStories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {FEATURED_STORIES.map((story) => (
        <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <div className="aspect-video relative">
              <Image
                src={story.thumbnail}
                alt={story.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
              {story.duration}
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
            <p className="text-gray-600 mb-4">{story.description}</p>
            <Link 
              href={`/stories/${story.id}`}
              className="text-purple-600 font-medium hover:text-purple-700"
            >
              Watch Story →
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
} 