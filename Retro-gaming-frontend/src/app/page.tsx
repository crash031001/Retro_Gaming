"use client"
import Poster from "@/components/Home/Poster"
import CategorySection from "@/components/Home/Sections/CategorySection"
import Slogan from "@/components/Home/Slogan"

export default function Home() {
  return (
      <main>
        <Slogan />
        <Poster />
        <CategorySection />
      </main>
  )
}
