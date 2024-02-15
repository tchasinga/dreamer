import React from 'react'
import Link from 'next/link'
import { LuPhoneCall } from "react-icons/lu";

export default function Navbar() {
  return (
     <header className="bg-blue-700">
        <div className="container max-w-6xl mx-auto p-5 text-white flex justify-between items-center">
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
                    <li className="flex items-center justify-center gap-2 px-5">
                        <div>
                        <LuPhoneCall  className="text-4xl  rounded-md p-2 bg-blue-800"/>
                        </div>
                        <div className="text-xs font-medium flex-col flex justify-center">
                            <p>Call us</p>
                            <p>+91 1234567890</p>
                        </div>
                    </li>
                    {/* Light and dark mode switcher... */}
                </ul>
             </div>
            {/* Mobile section */}
        </div>
     </header>
  )
}
