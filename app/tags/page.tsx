import { getAllPosts } from '@/data/posts';
import Link from 'next/link';

export default function TagsPage() {
  const posts = getAllPosts();
  
  // Extract all unique tags from posts
  const allTags = posts.flatMap(post => post.tags);
  const uniqueTags = Array.from(new Set(allTags)).sort();
  
  // Count posts per tag
  const tagCounts = uniqueTags.reduce((acc, tag) => {
    acc[tag] = posts.filter(post => post.tags.includes(tag)).length;
    return acc;
  }, {} as Record<string, number>);
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Tags</h1>
      
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="flex flex-wrap gap-4">
          {uniqueTags.map((tag) => (
            <Link 
              key={tag} 
              href={`/tags/${tag}`}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200 transition duration-300 flex items-center"
            >
              <span className="mr-2">#{tag}</span>
              <span className="bg-blue-200 text-blue-800 rounded-full px-2 py-1 text-xs">
                {tagCounts[tag]}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
