import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-12">
     <h2 className='text-2xl'>Home</h2>
     <Link href="/about">Go to About Page</Link>
     <Link href="/users">Go to Users Page</Link>
    </main>
  )
}
