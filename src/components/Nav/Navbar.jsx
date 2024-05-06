import { Link } from "react-router-dom";
import { MenuItems, MobileMenuItems } from "./MenuItems";
import { useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navLineClass, setNavLineClass] = useState(
    "w-8 h-0.5 md:hidden relative bg-black block rounded-lg duration-200 ease-in-out before:absolute before:w-8 before:h-0.5 before:rounded-lg before:duration-200 before:ease-in-out before:-top-2 before:bg-black after:absolute after:w-8 after:h-0.5 after:rounded-lg after:duration-200 after:ease-in-out after:top-2 after:bg-black",
  );
  const navOPenHandler = () => {
    if (!isOpen) {
      setNavLineClass(() => {
        return "w-8 h-0.5 relative bg-transparent block rounded-lg duration-200 ease-in-out before:absolute before:w-8 before:h-0.5 before:rounded-lg before:duration-200 before:ease-in-out before:top-0 before:bg-black before:-rotate-45 after:absolute after:w-8 after:h-0.5 after:rounded-lg after:duration-200 after:ease-in-out after:top-0 after:bg-black after:rotate-45";
      });
      setIsOpen(() => {
        console.log(isOpen);
        return true;
      });
    } else {
      setNavLineClass(() => {
        return "w-8 h-0.5 relative bg-black block rounded-lg duration-200 ease-in-out before:absolute before:w-8 before:h-0.5 before:rounded-lg before:duration-200 before:ease-in-out before:-top-2 before:bg-black after:absolute after:w-8 after:h-0.5 after:rounded-lg after:duration-200 after:ease-in-out after:top-2 after:bg-black";
      });
      setIsOpen(() => {
        console.log(isOpen);
        return false;
      });
    }
  };

  return (
    <div className="container mx-auto px-3">
      <nav className="relative mt-5 flex items-center justify-between rounded-xl bg-white px-8 py-2 font-iranYekanBold shadow-md shadow-gray-200">
        <div className="flex items-center justify-center gap-3">
          <div className="w-14">
            <img
              className="w-full"
              src="./../../../images/logo.png"
              alt="logo"
            />
          </div>
          <h1>
            گروه گردشگری{" "}
            <span className="font-iranYekanBold text-xl font-bold">گُنج</span>
          </h1>
        </div>
        <div
          onClick={navOPenHandler}
          className="flex cursor-pointer items-center justify-center rounded-md"
        >
          <span className={navLineClass}></span>
        </div>
        <ul
          className={
            isOpen
              ? "visible absolute left-0 top-16 flex w-full flex-col items-stretch gap-2 rounded-b-xl border border-t-0 bg-white px-10 py-5 opacity-100  shadow-md shadow-gray-300 duration-200 ease-in-out md:hidden"
              : "invisible absolute left-96 top-16 flex w-full flex-col items-stretch gap-8 rounded-b-xl border border-t-0 bg-white px-10 py-5 opacity-0  shadow-md shadow-gray-300 duration-200 ease-in-out md:hidden"
          }
        >
          {MobileMenuItems.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.url} className={item.className}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="hidden md:flex md:items-center md:gap-2 lg:gap-5">
          {MenuItems.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.url} className={item.className}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
