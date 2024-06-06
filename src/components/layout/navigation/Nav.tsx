"use client"
import Image from "next/image"
import { FaRegUserCircle } from "react-icons/fa"
import UserMenu from "./UserMenu"
import { useState } from "react"

export default function nav() {
  const isMenuOpen = useState(false)
  return (
    <nav className="flex justify-between p-2">
      <Image src="/Logo.svg" width={200} height={200} alt="logo" priority className="h-auto w-auto" />
      <FaRegUserCircle size={30} className="hover:cursor-pointer" />
      <UserMenu isMenuOpen={isMenuOpen} />
    </nav>
  )
}