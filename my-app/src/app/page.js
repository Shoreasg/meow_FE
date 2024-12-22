import Hero from "./Components/Hero";
import FAQ from "./Components/FAQ";
import Header from "./Components/Header";
export const fetchCache = 'force-no-store'
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main>
        <Header/>
      <Hero/>
    </main>
  );
}
