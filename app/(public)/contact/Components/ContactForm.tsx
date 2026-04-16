import React from "react";
import { Send, Gift, User, Phone, MessageSquare } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-[32px] border border-primary/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] sm:p-10">
          
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Send Your Gift Request
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Fill in the details and we’ll help you create the perfect gift experience.
            </p>
          </div>

          <form className="mt-10 grid gap-6 sm:grid-cols-2">
            
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-primary/50" size={18} />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-primary/10 bg-[#fafafa] py-3 pl-10 pr-4 text-sm outline-none focus:border-primary"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-primary/50" size={18} />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-primary/10 bg-[#fafafa] py-3 pl-10 pr-4 text-sm outline-none focus:border-primary"
              />
            </div>

            {/* Occasion */}
            <div className="relative sm:col-span-2">
              <Gift className="absolute left-3 top-3 text-primary/50" size={18} />
              <select className="w-full rounded-xl border border-primary/10 bg-[#fafafa] py-3 pl-10 pr-4 text-sm outline-none focus:border-primary">
                <option>Select Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Surprise Gift</option>
                <option>Corporate Gift</option>
              </select>
            </div>

            {/* Message */}
            <div className="relative sm:col-span-2">
              <MessageSquare className="absolute left-3 top-3 text-primary/50" size={18} />
              <textarea
                rows={4}
                placeholder="Write your message or gift details..."
                className="w-full rounded-xl border border-primary/10 bg-[#fafafa] py-3 pl-10 pr-4 text-sm outline-none focus:border-primary"
              />
            </div>

            {/* Submit */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                <Send size={18} />
                Send Request
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;