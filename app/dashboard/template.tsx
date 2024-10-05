"use client"
import { useState } from "react";

export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);

  return (
    <div className="border-black border-2 border-dashed p-4">
      <h2>Dashboard Template {count}</h2>
      <button className="bg-black text-white rounded-md p-2 my-2" onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </div>
  )
}