import Image from "next/image"

export default function nav() {
  return (
    <nav>
      <Image src="/Logo.svg" width={200} height={200} alt="logo" priority className="h-auto w-auto" />

    </nav>
  )
}