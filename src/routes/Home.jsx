import Destination from "../components/Destination/Destination";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Nav/Navbar";
import RecentTrips from "../components/RecentTrips/RecentTrips";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        heroImg="./images/Hero1.jpg"
        title="گروه گردشگری گُنج "
        text="مجری تورهای طبیعتگردی و ماجراجویانه در استان گیلان "
        heroHeight="100vh"
        btnOne=" دانلود کاتالوگ"
        btnTwo="قوانین و مقررات"
      />
      <Destination />
      <RecentTrips />
      <Footer />
    </>
  );
}
