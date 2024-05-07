import FooterCol from "./FooterCol";

export default function Footer() {
  return (
    <>
      <div className="bg-black py-10">
        <div className="container mx-auto mt-14 flex flex-col items-center justify-center px-3 font-iranYekanLight text-white">
          <div className="flex w-full flex-col items-center justify-between gap-y-7 text-center sm:flex-row sm:text-right">
            <div>
              <h3 className="mb-3 font-iranYekanBold text-3xl">گَُنج</h3>
              <p>گروه گردشگری مورد علاقه شما</p>
            </div>
            <div className="flex items-center justify-center gap-5">
              <a href="#">
                <i className="fa-brands fa-instagram rounded-md border-2 border-white px-2 py-1 text-xl duration-200 ease-in-out hover:bg-white hover:text-black"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook rounded-md border-2 border-white px-2 py-1 text-xl duration-200 ease-in-out hover:bg-white hover:text-black"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-x-twitter rounded-md border-2 border-white px-2 py-1 text-xl duration-200 ease-in-out hover:bg-white hover:text-black"></i>
              </a>
            </div>
          </div>
          <div className="mt-7 flex w-full flex-wrap items-center justify-between gap-y-5 text-center sm:text-right">
            <FooterCol
              title="سفرهای اخیر"
              text1="جزایر جنوبی"
              text2="دیلمان"
              text3="کاشان"
            />
            <FooterCol
              title="سفرهای اخیر"
              text1="جزایر جنوبی"
              text2="دیلمان"
              text3="کاشان"
            />
            <FooterCol
              title="سفرهای اخیر"
              text1="جزایر جنوبی"
              text2="دیلمان"
              text3="کاشان"
            />
            <FooterCol
              title="سفرهای اخیر"
              text1="جزایر جنوبی"
              text2="دیلمان"
              text3="کاشان"
            />
          </div>
        </div>
      </div>
    </>
  );
}
