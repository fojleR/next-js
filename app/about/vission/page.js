import Button from '@/app/components/button'
import React from 'react'
import NID from '@/app/public/images/nid.png'
import Image from 'next/image'

export default function Vission() {
  return (
    <div>
      <h1>This is vision page</h1>
      <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <Image src = {NID} alt = "NID's photo"/>
      <Button />
    </div>
  )
}
