import Hero from "../components/Hero/Hero";
import Navbar from "../components/Nav/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero
        heroImg="./images/Hero1.jpg"
        title="گروه گردشگری گُنج "
        text="مجری تورهای طبیعتگردی و ماجراجویانه در استان گیلان "
        heroHeight="h-screen"
        btnOne=" دانلود کاتالوگ"
        btnTwo="قوانین و مقررات"
      />
    </>
  );
}
