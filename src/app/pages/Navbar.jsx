import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
     <header className="bg-blue-700">
        <div className="container max-w-4xl mx-auto p-5 text-white">
            {/* Logo section */}
            <div className="">
                <Link href="/" className="text-2xl font-bold">Dreamer</Link>
            </div>
            {/* Desktop section */}
            {/* Mobile section */}
        </div>
     </header>
  )
}
