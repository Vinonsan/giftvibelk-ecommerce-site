import React from "react";
import { Mail, MessageCircle, PhoneCall, ArrowRight } from "lucide-react";

const contactItems = [
  {
    icon: MessageCircle,
    title: "Chat on WhatsApp",
    description:
      "Get quick responses for gift orders, customization, and delivery details.",
    value: "+94 77 123 4567",
    action: "Start Chat",
    href: "https://wa.me/94771234567",
    featured: true,
  },
  {
    icon: PhoneCall,
    title: "Call Us Directly",
    description:
      "Speak with us for urgent orders, surprise delivery, and instant support.",
    value: "+94 77 123 4567",
    action: "Call Now",
    href: "tel:+94771234567",
  },
  {
    icon: Mail,
    title: "Send an Email",
    description:
      "Reach out for general inquiries, partnerships, or custom order discussions.",
    value: "hello@giftvibelk.lk",
    action: "Send Email",
    href: "mailto:hello@giftvibelk.lk",
  },
];

const QuickContact = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-primary/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative bg-primary px-6 py-10 text-white sm:px-8 sm:py-12 lg:px-10">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[100px] bg-white/10" />

              <div className="relative">
                <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  Quick Contact
                </span>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Reach us faster for gifts, surprises, and delivery support
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/80 sm:text-base">
                  Whether you want to place an order, ask about customization,
                  or check delivery coverage, our team is ready to help you.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-white/90">
                    Surprise Delivery in Jaffna
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-white/90">
                    Islandwide Delivery Support
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-white/90">
                    Fast Response for Orders
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#fffdfb] px-6 py-10 sm:px-8 sm:py-12 lg:px-10">
              <div className="grid gap-5">
                {contactItems.map(
                  ({ icon: Icon, title, description, value, action, href, featured }) => (
                    <a
                      key={title}
                      href={href}
                      className={`group rounded-[28px] border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7 ${
                        featured
                          ? "border-primary/20 bg-primary/5"
                          : "border-primary/10 bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                            featured
                              ? "bg-primary text-white"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          <Icon size={24} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-lg font-semibold text-foreground">
                              {title}
                            </h3>

                            {featured ? (
                              <span className="w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                                Recommended
                              </span>
                            ) : null}
                          </div>

                          <p className="mt-2 text-sm leading-7 text-muted-foreground">
                            {description}
                          </p>

                          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm font-medium text-foreground">
                              {value}
                            </p>

                            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                              {action}
                              <ArrowRight
                                size={16}
                                className="transition duration-300 group-hover:translate-x-1"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;