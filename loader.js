'use client';

export default function myImageLoader({ src, width, quality }) {
  return `${window.location.origin}/${src}?w=${width}&q=${quality || 75}`;
}
