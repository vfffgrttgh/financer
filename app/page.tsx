'use server'

import { Suspense } from "react"
import Loader from "@/components/Loader"
import Group from "@/components/Group"

export default async function Home() {
  return (
    <>
      {/* Streaming */}

      <Suspense fallback={<Loader />}>
        <div className="flex flex-wrap justify-center">
          <Group />
        </div>
      </Suspense>
    </>
  )
}