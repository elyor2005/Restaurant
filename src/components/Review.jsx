import { REVIEW } from "../constants/index.jsx";
import xaviour from "../assets/xaviour.jpeg";
import cust1 from "../assets/customer1.jpeg";
import cust2 from "../assets/customer2.jpeg";
import cust3 from "../assets/customer3.jpeg";
import cust4 from "../assets/customer4.jpeg";

const Review = () => {
  return (
    <section className="container mx-auto mb-8 mt-12" id="review">
      <div className="flex flex-col">
        <p
          className="mb-10 text-3xl font-light leading-norma tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem
        ]"
        >
          {REVIEW.content}
        </p>
        <div className="flex items-center justify-center gap-6">
          <img
            src={xaviour}
            alt="xaviour"
            width={80}
            height={80}
            className="rounded-full border"
          />
          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row">
        {[cust1, cust2, cust3, cust4].map((customer, index) => (
          <img
            src={customer}
            alt="customer"
            key={index}
            className="h-[300px] w-[200px] rounded-tl-3xl object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default Review;
