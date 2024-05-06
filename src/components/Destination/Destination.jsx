export default function Destination() {
  return (
    <>
      <div className="container mx-auto my-14 flex flex-col items-center px-3 font-iranYekanRegular">
        <div className="mb-8 text-center">
          <h2 className="mb-7 font-iranYekanBold text-2xl md:text-4xl">
            مقصدهای پرطرفدار
          </h2>
          <p>
            تورها این فرصت را به شما میدهند تا در زمانی محدود، دیدنی های زیادی
            ببینید
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-10 xl:gap-0">
          <div className="flex lg:w-1/2 items-center gap-2 xl:gap-5">
            <div className="w-full lg:w-72 overflow-hidden rounded-lg">
              <img className="w-full hover:scale-150 duration-200 ease-in-out" src="./images/dest.jpg" alt="dest" />
            </div>
            <div className="w-full lg:w-72 overflow-hidden rounded-lg lg:mt-20">
              <img className="w-full hover:scale-150 duration-200 ease-in-out" src="./images/dest2.jpg" alt="dest2" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="font-iranYekanBold text-xl md:text-3xl mb-5">جزایر جنوبی: قشم، هرمز، هنگام</h3>
            <p className="leading-7 font-iranYekanLight md:font-iranYekanRegular">
              جزیره هرمز، با تاریخ و فرهنگ خویش، یک جاذبه فراوان دارد. با وجود
              جاذبه‌های طبیعی فراوان مانند دریاچه های نمکی و جنگل های زیبا،
              همچنین جاذبه‌های تاریخی مانند قلعه ها و بازارهای سنتی، هرمز به
              تنوع بی‌نظیری از تجربه‌های سفری ارائه می‌دهد. جزیره هنگام با
              ساحل‌های آرام و آب های کریستالی، مقصدی محبوب برای علاقمندان به آب
              و هوای گرم و فعالیت‌های دریایی است. زیرا می‌توان در اینجا از
              ورزش‌های آبی مانند شنا و غواصی لذت برد یا به کوهنوردی در
              کوهستان‌های اطراف این جزیره پرداخت. قشم نیز با ساحل‌های زیبا،
              ریف‌های غنی از زندگی دریایی و جاذبه‌های فرهنگی متعدد، جایی است که
              هر ساله گردشگران بسیاری را جذب می‌کند. این جزیره از جمله مقصدهای
              مورد علاقه برای آرامش بخشیدن به روح و جسم در میان طبیعت خلاب خلیج
              فارس است.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
