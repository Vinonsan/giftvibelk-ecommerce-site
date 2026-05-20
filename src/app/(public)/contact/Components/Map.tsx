import Heading from "@/components/layouts/Heading";
import React from "react";

const Map = () => {
  return (
    <section >
      <div >

         <Heading
          tag=" Our Location"
          title=" We are based in Kankesanthurai, Sri Lanka. Reach us easily for gift delivery services."
        />

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