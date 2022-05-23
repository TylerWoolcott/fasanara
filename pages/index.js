import { NavBar, HomeHero, FeaturedPosts, Companies, Performance, Footer, Funds } from './components'

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HomeHero />
      <FeaturedPosts />
      <Performance />
      <Funds />
      <Companies />
      <Footer />
  </div>
  )
}
