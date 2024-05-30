"use client"
import Image from "next/image";
import NostrProfile from "./components/NostrProfile";
import { useEffect } from "react";
import useNDKStore from "./store/ndk-store";

export default function Home() {
  const {initNDK} = useNDKStore() 

  useEffect(() => {
    initNDK(["wss://relay.fanfares.io", "wss://relay.damus.io", "wss://relay.primal.net"], false)
  },[])

  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
        <NostrProfile name="Simon" title="CEO" pubkey="db625e7637543ca7d7be65025834db318a0c7b75b0e23d4fb9e39229f5ba6fa7"/>
        <NostrProfile name="Arkinox" title="CTO" pubkey="e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a"/>
        <NostrProfile name="Wemerson" title="Developer" pubkey="56d57bf11aed78a989a7f042a786e1f09c83b1e8360b0462cbf1377454657d1c"/>
        <NostrProfile name="rleed" title="Developer" pubkey="c0e4bd0ba547d15557915379a9d27b4f013da6495d5eeaf36a4854dd1c5734af"/>
    </main>
  );
}
