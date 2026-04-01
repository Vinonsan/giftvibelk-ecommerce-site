import Image from "next/image";

export default function HomeHeader() {
  return (
    <header className="mb-10 flex items-center justify-between">
      <Image
        src="/giftvibelk-logo.svg"
        alt="Giftvibelk logo"
        width={180}
        height={48}
        priority
      />
      <a
        href="#categories"
        className="rounded-full border border-[rgba(142,72,51,0.18)] bg-white/80 px-5 py-2.5 text-sm font-semibold text-[--accent-deep] shadow-sm transition-colors hover:bg-white"
      >
        Shop Gifts
      </a>
    </header>
  );
}
