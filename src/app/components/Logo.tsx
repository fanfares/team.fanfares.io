import Image from "next/image"
import logo from "@/../public/fanfares-logo.jpg"

export default function Logo() {
  const visitFanFares = () => {
    window.location.href = "https://fanfares.io"
  }
  return (
    <div onClick={visitFanFares} className="cursor-pointer">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo.src} alt="FanFares.io logo" width={250} height={250} />
      <h1 className="text-5xl text-center">FanFares</h1>
    </div>
  )
}
