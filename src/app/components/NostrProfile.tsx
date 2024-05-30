"use client"
import { useEffect, useState } from "react"
import useNDKStore from "../store/ndk-store"
import { NDKUser } from "@nostr-dev-kit/ndk"
import Image from "next/image"

type NostrProfileType = {
  name: string
  title: string
  pubkey: string
}

export default function NostrProfile({ name, title, pubkey }: NostrProfileType) {

  const {ndk, isConnected, fetchUser} = useNDKStore() 
  const [user, setUser] = useState<NDKUser>()

  useEffect(() => {
    if (!isConnected) return
    if (user) return // we already have the user
    async function getUser() {
      const userData = await fetchUser(pubkey)
      setUser(userData)
    }
    getUser()
  }, [ndk, isConnected])

  useEffect(() => {
    if (!user) return
    console.log(name, user)
  }, [user])

  return (
    <section className="flex flex-col items-center justify-center">
      <h1>{name}</h1>
      <h2>{title}</h2>
      { !user ? <p>Loading</p> : <Image src={user!.profile!.image} alt={`${name}'s profile picture`} width={250} height={250}/> }
    </section>
  )
}