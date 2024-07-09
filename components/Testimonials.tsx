import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const Testimonials = () => {
  return (
    <main className="m-20" id="testimonials">
      <h1 className="text-2xl md:text-4xl text-center font-bold">
        Words of Appreciation from Those Who&apos;ve Witnessed{" "}
        <span className="text-purple">Excellence</span>
      </h1>
      <div className="h-[40rem] w-screen rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </main>
  );
};

export default Testimonials;
