import React from "react";

const Map = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Our Location
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            We are based in Kankesanthurai, Sri Lanka. Reach us easily for gift delivery services.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-primary/10 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          
          <iframe
            src="https://www.google.com/maps?q=Kankesanthurai,Sri%20Lanka&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>

        </div>

      </div>
    </section>
  );
};

export default Map;