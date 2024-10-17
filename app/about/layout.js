import Link from 'next/link'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
        <nav>
          <ul className="flex gap-4">
            <li><Link href = '/about/vission'>Vission</Link></li>
            <li><Link href = '/about/mission'>Mission</Link></li>
          </ul>
        </nav>
        <hr></hr>
      {children}
    </div>
  )
}
