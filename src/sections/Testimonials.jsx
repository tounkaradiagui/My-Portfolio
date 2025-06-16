import React from "react";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Témoignages et Avis"
          sub="💬 Ce que les autres disent de moi"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
            {testimonials.map((testimonial, index) => (
                // <p>{testimonial.review}</p>
                <GlowCard card={testimonial} key={index}>
                    <div className="flex items-center gap-3">
                        <div>
                            <img
                                src={testimonial.imgPath}
                                alt={testimonial.name}
                            />
                        </div>
                        <div>
                            <p className="text-lg font-semibold">
                                {testimonial.name}
                            </p>
                            {/* <p className="text-sm text-gray-500">
                                {testimonial.mentions}
                            </p> */}
                        </div>
                    </div>
                </GlowCard>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
