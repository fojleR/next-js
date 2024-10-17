import getPostById from '@/app/lib/getPostById';
import getPostComments from '@/app/lib/getPostComments';
import React from 'react'

export async function generateMetadata({params}){
    const {id} = params;
    const post = await getPostById(id);

    return{
        title: post.title,
        description: post.body
    }
}

export default async function Post({params}) {
    const {id} = params;
    const postPromise = getPostById(id);
    const commentsPromise = getPostComments(id);

    const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  return (
    <div>
      <p className="text-green-400">{post.title}</p>
      <p>{post.body}</p>
      <h1 className='my-4'>Comments</h1>
      <ul>
        {comments.map(comment=>(
            <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  )
}
