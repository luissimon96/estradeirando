export interface Author {
  name: string;
  avatar?: string;
  bio?: string;
}

export interface Post {
  id: string;
  title: string;
  date: string;
  author: Author;
  excerpt: string;
  content: string;
  coverImage: string;
  tags: string[];
}

export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface Album {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  coverImage: string;
  photos: Photo[];
}
