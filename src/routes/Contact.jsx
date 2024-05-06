import Hero from "../components/Hero/Hero";
import Navbar from "../components/Nav/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <Hero
        heroImg="./images/Hero3.jpg"
        title="تماس با ما "
        text=""
        heroHeight="75vh"
        btnOne=""
        btnTwo=""
      />
    </>
  );
}
