"use client"
import Image from "next/image"
import Link from "next/link";


const Logo: React.FC = () => {
    return (
      <Link href="/">
       <Image
        src="/icon.svg"
        alt="image logo"
        title="fashion store"
        width={50}
        height={50}
        className="w-[50px] h-[50px]"
      />
      </Link>
    )
}
export default Logo;