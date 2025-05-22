'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Dados simulados para os posts
const POSTS = [
  {
    id: 1,
    title: 'Explorando as Praias do Nordeste',
    excerpt: 'Um guia completo das melhores praias do Nordeste brasileiro, com dicas de hospedagem e gastronomia local.',
    image: '/images/posts/praias-nordeste.jpg',
    category: 'Destinos Nacionais',
    date: '2024-03-15',
    readTime: '5 min',
  },
  {
    id: 2,
    title: 'Roteiro de 7 Dias em Portugal',
    excerpt: 'Planejando sua primeira viagem para Portugal? Confira este roteiro completo de 7 dias.',
    image: '/images/posts/portugal.jpg',
    category: 'Destinos Internacionais',
    date: '2024-03-10',
    readTime: '8 min',
  },
  {
    id: 3,
    title: 'Dicas para Viajar com Crianças',
    excerpt: 'Como tornar sua viagem em família mais tranquila e divertida com estas dicas essenciais.',
    image: '/images/posts/viagem-familia.jpg',
    category: 'Dicas de Viagem',
    date: '2024-03-05',
    readTime: '6 min',
  },
];

const CATEGORIES = ['Todos', 'Destinos Nacionais', 'Destinos Internacionais', 'Dicas de Viagem'];

export default function PostsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredPosts = selectedCategory === 'Todos'
    ? POSTS
    : POSTS.filter(post => post.category === selectedCategory);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Posts</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Descubra histórias, dicas e roteiros para suas próximas aventuras.
          </p>
        </div>

        {/* Filtros de categoria */}
        <div className="mt-8 flex justify-center space-x-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Lista de posts */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                    {post.category}
                  </span>
                  <span className="text-gray-500">{post.readTime} de leitura</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/posts/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 