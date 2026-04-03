import Image from "next/image"
import Badge from "@/app/components/Badge"
import Button from "@/app/components/Button"

const Hero = () => {
  return (
    <section className="py-8">
      <div className="grid items-start lg:grid-cols-2 ">
        <div className="flex flex-col gap-6">
          <Badge variant="dark" dot>
            Gift Delivery in Sri Lanka
          </Badge>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl ">
            Send Gifts & Surprise Delivery Across{" "}
            <span className="text-primary font-bold">Sri Lanka with Giftvibelk</span>
          </h1>

          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Giftvibelk offers curated gift boxes, birthday surprises, flower 
            deliveries, and custom hampers across Sri Lanka, including fast 
            surprise delivery in the Northern Province. Make every celebration 
            unforgettable with our premium gift experiences.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Button href="/services">
            Shop now
            </Button>

            <Button href="/contact" variant="secondary">
              Order a custom gift
            </Button>
          </div>
        </div>

        <div>
          <Image
            src="/images/herosection.png"
            alt="Curated birthday gift box with ribbon and sweets"
            width={820}
            height={760}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero