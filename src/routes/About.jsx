import Hero from "../components/Hero/Hero";
import Navbar from "../components/Nav/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <Hero
        heroImg="./images/Hero4.jpg"
        title="درباره ما "
        text=""
        heroHeight="75vh"
        btnOne=""
        btnTwo=""
      />
    </>
  );
}
