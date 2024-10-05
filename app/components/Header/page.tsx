"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const linkData = [
  {
    path: "/performance",
    name: "Performance"
  },
   {
    path: "/reliability",
    name: "Reliability"
  },
   {
    path: "/scale",
    name: "Scale"
  }
]
export default function Header() {
  const pathname = usePathname();
  return (
    <div className="absolute w-full z-10">
      <div className="flex flex-wrap justify-between container p-8 text-white">
        <Link href="/" className="font-bold text-3xl">Home</Link>
        <div className="flex space-x-4 text-xl">
          {linkData.map((link) => {
            return (
              <Link key={link.path} href={link.path} className={link.path === pathname ? "text-purple-500" : ""}>{link.name}</Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
