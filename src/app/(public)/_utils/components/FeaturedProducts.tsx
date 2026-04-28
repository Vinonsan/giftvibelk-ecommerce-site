import Heading from "@/components/layouts/Heading";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/ui/ProductCard";

const featuredProducts = [
  {
    category: "Birthday",
    image: "/images/birthday.png",
    name: "Birthday Surprise Gift Box",
    price: "LKR 4,500",
    slug: "birthday-surprise-gift-box",
    stock: 0,
  },
  {
    category: "Romance",
    image: "/images/imageone.png",
    name: "Romantic Rose & Chocolate Set",
    price: "LKR 5,250",
    slug: "romantic-rose-chocolate-set",
    stock: 8,
  },
  {
    category: "Anniversary",
    image: "/images/imagetwo.png",
    name: "Anniversary Keepsake Hamper",
    price: "LKR 6,800",
    slug: "anniversary-keepsake-hamper",
    stock: 5,
  },
  {
    category: "Custom Gift",
    image: "/images/imagethree.png",
    name: "Premium Custom Celebration Box",
    price: "LKR 7,200",
    slug: "premium-custom-celebration-box",
    stock: 9,
  },
  {
    category: "Romance",
    image: "/images/imageone.png",
    name: "Romantic Rose & Chocolate Set",
    price: "LKR 5,250",
    slug: "romantic-rose-chocolate-set",
    stock: 8,
  },
  {
    category: "Anniversary",
    image: "/images/imagetwo.png",
    name: "Anniversary Keepsake Hamper",
    price: "LKR 6,800",
    slug: "anniversary-keepsake-hamper",
    stock: 5,
  },
  {
    category: "Custom Gift",
    image: "/images/imagethree.png",
    name: "Premium Custom Celebration Box",
    price: "LKR 7,200",
    slug: "premium-custom-celebration-box",
    stock: 9,
  }
];

const FeaturedProducts = () => {
  return (
    <section aria-label="Featured gift products" >
      <div className="space-y-12">
        <Heading
          badge="Popular Picks"
          title="Featured Gift Products"
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.slice(0, 6).map((product, index) => (
            <ProductCard key={`${product.slug}-${index}`} {...product} />
          ))}
        </div>

        {featuredProducts.length > 6 ? (
          <div className="flex justify-center">
            <Button href="/products" variant="primary">
              Show all
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default FeaturedProducts;
