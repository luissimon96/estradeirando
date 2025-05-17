import { getPostsByTag, getAllPosts } from '@/data/posts';
import PostCard from '@/app/components/PostCard';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  const posts = getAllPosts();
  const allTags = posts.flatMap(post => post.tags);
  const uniqueTags = Array.from(new Set(allTags));
  
  return uniqueTags.map((tag) => ({
    tag: tag,
  }));
}

export function generateMetadata({ params }: { params: { tag: string } }) {
  return {
    title: `Posts sobre ${params.tag} | Estradeirando`,
    description: `Confira todas as nossas aventuras relacionadas a ${params.tag}.`,
  };
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const posts = getPostsByTag(params.tag);
  
  if (posts.length === 0) {
    notFound();
  }
  
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-2">#{params.tag}</h1>
      <p className="text-gray-600 mb-8">
        {posts.length} {posts.length === 1 ? 'publicação encontrada' : 'publicações encontradas'}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
