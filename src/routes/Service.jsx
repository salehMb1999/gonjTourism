import Hero from "../components/Hero/Hero";
import Navbar from "../components/Nav/Navbar";

export default function Service() {
  return (
    <>
      <Navbar />

      <Hero
        heroImg="./images/Hero2.jpg"
        title="خدمات ما "
        text=""
        heroHeight="75vh"
        btnOne=""
        btnTwo=""
      />
    </>
  );
}
