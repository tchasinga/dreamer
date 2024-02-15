import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
     <header className="bg-blue-700">
        <div className="container max-w-4xl mx-auto p-5 text-white flex justify-between items-center">
            {/* Logo section */}
            <div className="">
                <Link href="/" className="text-2xl md:text-2xl  font-medium">Dreamer</Link>
            </div>
            {/* Desktop section */}
             <div className="">
                <ul className="flex items-center justify-center gap-3">
                    <li className="">Home</li>
                    <li className="">Service</li>
                    <li className="">Contact</li>
                </ul>
             </div>
            {/* Mobile section */}
        </div>
     </header>
  )
}
