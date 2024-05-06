import RecentCards from "./RecentCards";

export default function RecentTrips() {
  return (
    <>
      <div className="container mx-auto my-20 flex flex-col items-center px-3 font-iranYekanRegular">
        <div className="mb-8 text-center">
          <h2 className="mb-7 font-iranYekanBold text-2xl md:text-4xl">
            سفرهای اخیر
          </h2>
          <p>&quot; تعطیلات خود را با ما بگذرانید &quot;</p>
        </div>
        <div className="flex w-full items-center justify-center gap-16">
          <RecentCards
            width="w-1/4"
            title="سفر به جزایر جنوبی"
            image="./images/dest.jpg"
            text="جزایر هنگام، هرمز و قشم، سه مقصد بی نظیر! هرمز با فرهنگ و تاریخش، هنگام با آب های فانتزی و قشم با ساحل های عالی، هرکدام جاذبه خاصی دارن که می‌تونه سفرت رو به یه تجربه معنی‌دار تبدیل کنه."
          />
          <RecentCards
            width="w-1/4"
            title="سفر به دیلمان"
            image="./images/recent1.jpg"
            text="دیلمان (به زبان گیلکی: دیلٚمؤن) یکی از شهرهای استان گیلان از توابع بخش دیلمان شهرستان سیاهکل در شمال ایران است."
          />
          <RecentCards
            width="w-1/4"
            title="سفر به وان"
            image="./images/recent2.jpg"
            text="وان (ترکی استانبولی: Van) از شهرهای بزرگ در شرق ترکیه است و مرکز استان وان می‌باشد."
          />
        </div>
      </div>
    </>
  );
}
