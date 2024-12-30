'use client';
import { useSearchParams } from 'next/navigation';

const Blog = () => {
  const searchParams = useSearchParams();
  const imageSrc = searchParams.get('imageSrc');
  const title = searchParams.get('title');
  const day = searchParams.get('day');
  const month = searchParams.get('month');

  return (
    <div>
      <h1>{title}</h1>
     
    </div>
  );
};

export default Blog;
