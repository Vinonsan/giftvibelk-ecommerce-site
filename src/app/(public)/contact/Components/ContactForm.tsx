import React from "react";
import { Send, Gift, User, Phone, MessageSquare } from "lucide-react";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import Heading from "@/components/layouts/Heading";

const occasionOptions = [
  { label: "Birthday", value: "birthday" },
  { label: "Anniversary", value: "anniversary" },
  { label: "Surprise Gift", value: "surprise-gift" },
  { label: "Corporate Gift", value: "corporate-gift" },
];

const ContactForm = () => {
  return (
    <section>
      <div className="mx-auto w-full flex flex-col gap-6">
         <Heading
          tag="Send Your Gift Request"
          title="Fill in the details and we’ll help you create the perfect gift experience."
        />

        <div >


          <form className="rounded-4xl flex flex-col items-center justify-center gap-8 border border-primary/10 py-6 px-8 ">


            <div className="relative w-full">
              <User className="absolute left-3 top-3 text-primary/50" size={18} />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-primary/10 bg-[#fafafa] py-3 pl-10 pr-4 text-sm outline-none focus:border-primary"
              />
            </div>


            <div className="relative w-full">
              <Phone className="absolute left-3 top-3 text-primary/50" size={18} />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-primary/10 bg-[#fafafa] py-3 pl-10 pr-4 text-sm outline-none focus:border-primary"
              />
            </div>

              <Select
                name="occasion"
                placeholder="Select Occasion"
                defaultValue=""
                options={occasionOptions}
                leadingIcon={<Gift size={18} />}
                className="rounded-xl border-primary/10 bg-[#fafafa] focus-within:border-primary focus-within:ring-primary/10 w-full"
              />



            <div className="relative sm:col-span-2 w-full">
              <MessageSquare className="absolute left-3 top-3 text-primary/50" size={18} />
              <textarea
                rows={4}
                placeholder="Write your message or gift details..."
                className="w-full rounded-xl border border-primary/10 bg-[#fafafa] py-3 pl-10 pr-4 text-sm outline-none focus:border-primary"
              />
            </div>

            <Button type="submit" variant="primary">
                <Send size={18} />

                Send Request
              </Button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
