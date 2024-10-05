"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react';


const linkData = [
  {
    path: "/dashboard/about",
    name: "About"
  },
   {
    path: "/dashboard/settings",
    name: "Setting"
  }
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0)
  const pathname = usePathname();
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
      <div className='flex gap-4 font-bold text-lg mb-4'>
        {linkData.map((link) => {
          return (
              <Link key={link.path} href={link.path} className={pathname === link.path ? "text-purple-500" : ""}>{link.name}</Link>
          )
        })}
      </div>
      <h2>Dashboard Layout {count}</h2>
      <button className="bg-black text-white my-2 p-2 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </div>
  );
}