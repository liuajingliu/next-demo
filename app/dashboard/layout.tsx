import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [count, setCount] = useState(0)
  // const pathname = usePathname();
  return (
    <div className="">
      <div className="flex justify-between">
        <Link href="">Home</Link>
        <div>
          <Link href="">Performance</Link>
          <Link href="">Reliability</Link>
          <Link href="">Scale</Link>
        </div>
      </div>
      {children}
    </div>
  );
}