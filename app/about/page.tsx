import React from 'react'
import Link from 'next/link'


export default function About() {
  // throw new Error('Not Today!!!!')
  return (

    <div className="flex min-h-screen flex-col items-center justify-evenly p-12">
      <div>About</div>
      <Link href="/">Go to Home page</Link>
    </div >

  )
}
