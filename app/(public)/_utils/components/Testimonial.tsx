import Heading from "@/app/components/layouts/Heading";
import { Star } from "lucide-react";

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
];

export default function Testimonial() {
  return (
    <section>
      <div className="mx-auto text-center">
        
        <Heading
          badge="Customer Reviews"
          title="What Our Customers Say"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex justify-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="mt-4 text-gray-600 text-sm leading-6">
                {item.quote}
              </p>

              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500">
                  {item.role}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}