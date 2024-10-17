import React from 'react'

export default function Blog({params}) {
    const {id} = params
  return (
    <div>
        <h1>Blog {id}</h1>
        <p>This is blog {id}</p>
    </div>
  )
}
