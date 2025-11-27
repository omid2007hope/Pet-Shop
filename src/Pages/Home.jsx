import Hero from "../Components/HomePage/Hero";
import WebsiteTrafficStatistics from "../Components/HomePage/WebsiteTrafficStatistics";

function Home() {
  return (
    <main className="relative h-screen flex flex-col items-center justify-center">
      <Hero />
      <WebsiteTrafficStatistics />
    </main>
  );
}

export default Home;
