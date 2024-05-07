import PropTypes from "prop-types";

export default function FooterCol(props) {
  return (
    <>
      <div className="flex w-full flex-col items-center sm:w-1/2 sm:items-center md:w-1/4">
        <h3 className="mb-3 font-iranYekanBold text-xl">{props.title}</h3>
        <ul className="flex flex-col gap-1">
          <li className="text-lg">
            <a
              className="duration-200 ease-in-out hover:text-[#01959a]"
              href="#"
            >
              {props.text1}
            </a>
          </li>
          <li className="text-lg">
            <a
              className="duration-200 ease-in-out hover:text-[#01959a]"
              href="#"
            >
              {props.text2}
            </a>
          </li>
          <li className="text-lg">
            <a
              className="duration-200 ease-in-out hover:text-[#01959a]"
              href="#"
            >
              {props.text3}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

FooterCol.propTypes = {
  title: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
};
