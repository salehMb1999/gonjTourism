import PropTypes from "prop-types";
export default function Hero(props) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.7)), url(${props.heroImg})`,
      }}
      className={`absolute left-0 right-0 top-0 -z-10 h-screen !bg-cover !bg-top !bg-no-repeat font-iranYekanRegular`}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="mb-10 font-iranYekanBold text-5xl font-bold">
          {props.title}
        </h1>
        <p className="mb-7">{props.text}</p>
        <div className="flex items-center justify-center gap-5">
          <a
            className="cursor-pointer rounded-md bg-white px-5 py-3 text-black duration-200 ease-in-out hover:bg-[#01959a] hover:text-white"
            href="/docs/gonj-tourism.pdf"
          >
            دانلود کاتالوگ{" "}
          </a>
          <a
            className="cursor-pointer rounded-md bg-white px-5 py-3 text-black duration-200 ease-in-out hover:bg-[#01959a] hover:text-white"
            href="#"
          >
            قوانین و مقررات{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
Hero.propTypes = {
  heroImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
