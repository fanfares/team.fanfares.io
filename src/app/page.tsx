"use client"
import NostrProfile from "./components/NostrProfile";
import { useEffect } from "react";
import useNDKStore from "./store/ndk-store";
import Logo from "./components/Logo";

export default function Home() {
  const {initNDK} = useNDKStore() 

  useEffect(() => {
    initNDK(["wss://relay.fanfares.io", "wss://relay.damus.io", "wss://relay.primal.net"], false)
  },[])

  return (
    <main className="flex min-h-screen min-w-full flex-col items-center p-14 text-lg">
      <Logo/>
      <div className="flex items-center justify-center w-full mt-12">
        <hr className="border-gray-400 border-t w-full flex-grow"/>
        <h2 className="px-4 whitespace-nowrap">Meet the team</h2>
        <hr className="border-gray-400 border-t w-full flex-grow"/>
      </div>
      <section className="flex xl:flex-row flex-col items-start justify-between">
        <NostrProfile name="Simon" title="CEO" pubkey="db625e7637543ca7d7be65025834db318a0c7b75b0e23d4fb9e39229f5ba6fa7"/>
        <NostrProfile name="Arkinox" title="CTO" pubkey="e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a"/>
        <NostrProfile name="Wemerson" title="Developer" pubkey="56d57bf11aed78a989a7f042a786e1f09c83b1e8360b0462cbf1377454657d1c"/>
        <NostrProfile name="rleed" title="Developer" pubkey="c0e4bd0ba547d15557915379a9d27b4f013da6495d5eeaf36a4854dd1c5734af"/>
        <NostrProfile name="Official Account" title="" pubkey="d7d8109ee43657ce6056ada4653006bbb641f31e50e85243681c2724507811ec"/>
      </section>
    </main>
  );
}
