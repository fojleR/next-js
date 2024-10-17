import React from 'react'
import getPosts from '../lib/getPosts'
import Link from 'next/link'

export default async function Posts() {
    const posts = await getPosts();
  return (
    <div>
    <ul>
        {posts.map((post)=>(
        <li key={post.id}><Link href = {`/posts/${post.id}`}>{post.title}</Link></li>
      ))}
    </ul>
      
    </div>
  )
}
