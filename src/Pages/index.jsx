import "../styles/Home.css";
import Featured from "../Components/Featured";
import Hero from "../Components/Hero";

export default function Home() {
  return (
    <>
      <main className="fade_in">
        <Hero />
        <Featured />
      </main>
    </>
  );
}
