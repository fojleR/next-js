'use client'
import React from 'react'

export default function Button() {
  return (
    <>
        <button className='bg-green-400 px-4 py-1 m-2 rounded-sm' onClick={()=>(console.log("clicked"))}>Click</button>
    </>
  )
}
