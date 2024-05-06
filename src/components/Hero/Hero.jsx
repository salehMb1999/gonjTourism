import PropTypes from "prop-types";
export default function Hero(props) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.7)), url(${props.heroImg})`,
        height: `${props.heroHeight}`,
      }}
      className={` w-full !bg-cover bg-fixed !bg-top !bg-no-repeat font-iranYekanRegular`}
    >
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center text-white">
        <h1 className="mb-10 font-iranYekanBold text-2xl font-bold md:text-5xl">
          {props.title}
        </h1>
        <p className="mb-7 w-72">{props.text}</p>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          {props.btnOne && (
            <a
              className="w-40 cursor-pointer rounded-md bg-white px-5 py-3 text-black duration-200 ease-in-out hover:bg-[#01959a] hover:text-white"
              href="/docs/gonj-tourism.pdf"
            >
              {props.btnOne}
            </a>
          )}
          {props.btnTwo && (
            <a
              className="w-40 cursor-pointer rounded-md bg-white px-5 py-3 text-black duration-200 ease-in-out hover:bg-[#01959a] hover:text-white"
              href="#"
            >
              {props.btnTwo}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
Hero.propTypes = {
  heroImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  heroHeight: PropTypes.string.isRequired,
  btnOne: PropTypes.string.isRequired,
  btnTwo: PropTypes.string.isRequired,
};
