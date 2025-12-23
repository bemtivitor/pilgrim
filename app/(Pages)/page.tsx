import { Card } from "@/components/card";
import { Carousel } from "@/components/carousel";
import { getCollections, getProducts } from "@/lib/db";

export default async function Home() {
  const products = await getProducts();
  const collections = await getCollections();
  return (
    <div className="grid">
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#e0e0e0] -mt-7.5">
        {/* Animated background */}
        <div className="absolute left-[-50%] top-[-50%] h-[200%] w-[200%] rotate-[-15deg] opacity-[0.15] animate-move-bg">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <just to debug>
              key={index}
              className="mb-2 whitespace-nowrap text-[80px] font-black uppercase leading-[0.9] text-black"
            >
              EXEMPLO EXEMPLO EXEMPLO EXEMPLO EXEMPLO EXEMPLO
            </div>
          ))}
        </div>

        <h1
          className="pointer-events-none relative z-10 text-center text-[70px] font-black italic uppercase text-white
  [text-shadow:3px_3px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,5px_5px_15px_rgba(0,0,0,0.5)]"
        >
          Blessed & Street
        </h1>
      </section>

      <section className="bg-white py-12.5 pb-7.5 overflow-hidden">
        <h2 className="text-2xl mb-7.5 px-10 font-black italic uppercase">
          BLACK FRIDAY PILGRIM 2025
        </h2>

        <Carousel>
          {products.map((item) => (
            <Card.product
              key={item.id}
              url={`/produtos/${item.id}`}
              image={item.image}
              title={item.title}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </Carousel>
      </section>

      <section className="py-8 overflow-hidden">
        <div className="mb-6 px-10">
          <h2 className="text-2xl font-black italic uppercase">COLEÇÕES</h2>
        </div>

        <Carousel>
          {collections.map(({ id, title, comingSoon, releaseDate }) => (
            <Card.collection
              key={id}
              image="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop"
              title={title}
              comingSoon={comingSoon}
              description={
                releaseDate
                  ? `LANÇAMENTO EM ${new Date(releaseDate).toLocaleDateString()}`
                  : ""
              }
            />
          ))}
        </Carousel>
      </section>
    </div>
  );
}
