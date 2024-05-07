import PropTypes from "prop-types";
export default function RecentCards(props) {
  return (
    <>
      <div
        className={`flex h-[450px] w-full flex-col items-center justify-start p-3 shadow-md shadow-slate-400 sm:w-96`}
      >
        <div className="h-52 w-full overflow-hidden rounded-lg ">
          <img
            className="w-full duration-200 ease-in-out hover:scale-150"
            src={props.image}
            alt="card1"
          />
        </div>
        <div className="px-2 py-4">
          <h4 className="mb-3 font-iranYekanBold text-2xl">{props.title}</h4>
          <p className="">{props.text}</p>
        </div>
      </div>
    </>
  );
}
RecentCards.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
