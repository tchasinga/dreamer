import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
     <header className="bg-blue-700">
        <div className="container max-w-4xl mx-auto p-5 text-white">
            {/* Logo section */}
            <div className="">
                <Link href="/" className="text-2xl md:text-2xl  font-medium">Dreamer</Link>
            </div>
            {/* Desktop section */}
             <div className="">
                <ul>
                    <li className="inline-block px-5">Home</li>
                    <li className="inline-block px-5">Service</li>
                    <li className="inline-block px-5">Contact</li>
                </ul>
             </div>
            {/* Mobile section */}
        </div>
     </header>
  )
}
