"use client";

import type { CSSProperties } from "react";
import { MapPin, Quote, Star } from "lucide-react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Heading from "@/components/layouts/Heading";

const testimonials = [
  {
    name: "Nethmi Perera",
    role: "Birthday Surprise",
    location: "Colombo",
    quote:
      "Everything looked even better than the photos. Delivery was on time and perfect.",
  },
  {
    name: "Akeel Ismail",
    role: "Anniversary Gift",
    location: "Jaffna",
    quote:
      "Very smooth process. They handled everything professionally.",
  },
  {
    name: "Tharushi Fernando",
    role: "Custom Gift Box",
    location: "Kandy",
    quote:
      "Elegant packaging and premium feel. Totally worth it.",
  },
  {
    name: "Dilshan Silva",
    role: "Corporate Hamper",
    location: "Galle",
    quote:
      "The gift hamper felt premium, and our client loved the presentation.",
  },
  {
    name: "Ishara Jayasinghe",
    role: "Flower Delivery",
    location: "Negombo",
    quote:
      "Fresh flowers, beautiful wrapping, and such friendly delivery updates.",
  },
];

const swiperTheme = {
  "--swiper-pagination-color": "var(--theme-primary)",
  "--swiper-pagination-bullet-inactive-color": "var(--theme-primary)",
  "--swiper-pagination-bullet-inactive-opacity": "0.24",
} as CSSProperties;

export default function Testimonial() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto">
        <Heading
          tag="Customer Reviews"
          title="Loved By Gift Lovers"
        />

        <div className="relative mt-12">
          <div className="absolute left-1/2 top-10 h-56 w-[min(620px,90vw)] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          <Swiper
            modules={[Autoplay, EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            speed={900}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 1.8,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="relative !overflow-visible !pb-14"
            style={swiperTheme}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={`${item.name}-${item.role}`} className="!h-auto">
                <article className="flex h-full min-h-72 flex-col rounded-3xl border border-primary/10 bg-card p-6 text-left shadow-xl shadow-primary/5 transition duration-300 hover:-translate-y-1 hover:border-primary/25 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Quote size={24} />
                    </div>

                    <div className="flex gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          size={16}
                          fill="currentColor"
                          strokeWidth={1.8}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="mt-6 flex-1 text-base leading-7 text-muted-foreground">
                    "{item.quote}"
                  </p>

                  <div className="mt-7 border-t border-primary/10 pt-5">
                    <h3 className="text-base font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {item.role}
                    </p>
                    <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      <MapPin size={14} className="text-primary" />
                      {item.location}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
