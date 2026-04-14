"use client";

import Badge from "@/app/components/Badge";
import Button from "@/app/components/Button";
import Image from "next/image";
import { useEffect, useState } from "react";

const SpecialOfferCard = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const end = new Date().getTime() + 48 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = end - now;
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms: number) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const seconds = Math.floor((ms / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <section aria-label="Special offer">
      <div>
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="flex flex-col gap-5 lg:pr-10">
            <Badge dot variant="primary">
              Limited Time Offer
            </Badge>

            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              Curated Gift Boxes for Every Occasion
            </h2>

            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              Surprise your loved ones with beautifully crafted gift boxes,
              perfect for birthdays, anniversaries, and special moments. Each
              package is thoughtfully curated with premium items, making every
              celebration unforgettable across Sri Lanka.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-xl text-yellow-600 line-through">
                LKR 6,500
              </span>
              <span className="text-3xl font-bold text-primary">LKR 4,875</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/services">Claim Offer</Button>
              <Button href="/contact" variant="border">
                Customize a Gift
              </Button>
            </div>
          </div>

          <div>
            <div className="relative w-full h-70 sm:h-80 lg:h-100 overflow-hidden rounded-2xl shadow-lg">
              <video
                src="/videos/offervideo.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

              <div className="absolute top-4 left-4 flex gap-2 sm:gap-3">
                {[days, hours, minutes, seconds].map((val, i) => {
                  const labels = ["DAYS", "HRS", "MIN", "SEC"];

                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 min-w-[60px]"
                    >
                      <span className="text-lg font-bold text-white">
                        {String(val).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] tracking-widest text-white/80 mt-1">
                        {labels[i]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10">
          {[
            "/images/imageone.png",
            "/images/imagetwo.png",
            "/images/imagethree.png",
            "/images/imagefour.png",
          ].map((src, i) => (
            <div
              key={i}
              className="group relative h-80 overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <Image
                src={src}
                alt={`Gift ${i + 1}`}
                fill
                className="object-cover transition duration-300 group-hover:scale-110 group-hover:rotate-[1deg]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferCard;
