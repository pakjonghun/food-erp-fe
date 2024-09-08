'use client';

export default function myImageLoader({ src, width, quality }) {
  console.log(`http://localhost:3000${src}?w=${width}&q=${quality || 75}`);
  return `http://localhost:3000${src}?w=${width}&q=${quality || 75}`;
}
