import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-12">{children}</main>
      <Footer />
    </div>
  );
}
