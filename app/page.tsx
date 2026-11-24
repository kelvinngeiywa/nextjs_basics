import Image from "next/image";
import Link from "next/link";
import ProductCard, { Product } from "./components/productCard";

const featuredProducts:Product[]=[
    {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    category: "Electronics",
    price: 8500,
    image: "https://i.imgur.com/NLk1wtI.jpeg",
  },
  {
    id: "2",
    name: "Minimalist Leather Backpack",
    category: "Accessories",
    price: 4200,
    image: "https://i.imgur.com/eK0Usx4.jpeg",
  },
  {
    id: "3",
    name: "Smart Fitness Watch",
    category: "Wearables",
    price: 6800,
    image: "https://i.imgur.com/Xjqux4g.jpeg",
  },
  {
    id: "4",
    name: "Ergonomic Desk Lamp",
    category: "Home Office",
    price: 3100,
    image: "https://i.imgur.com/bpxzU1l.jpeg",
  },

]

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       {/* Hero Section */}
      <section className="text-center py-16 bg-gray-50 rounded-2xl px-6">
        <h1 className="text-4xl sm:text-5xl font:extra-bold text-gray-900 tracking-tight">
          Welcome to PrimeHub
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Your central destination for discovering quality products, updates and services.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="#storefront"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Shop Featured
          </a>
          <Link href="/about"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
          Learn more</Link>
          <Link href="/contact"
          className="px-6 py-3 bg-white text-gray-800 font-medium border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >Contact Us</Link>
        </div>
      </section>

       {/* Next Part: Featured Grid Section */}

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Fast Delivery</h3>
            <p className="mt-2 text-gray-600">Reliable shipping straight to your doorstep</p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Top Quality</h3>
            <p className="mt-2 text-gray-600">Curated items inspected for quality and value</p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">24/7 Support</h3>
            <p className="mt-2 text-gray-600">Reach out anytime through our contact page.</p>
          </div>
        </div>

      </section>

       {/* product grid section */}
      <section id="storefront" className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-gray-600 mt-1">Handpicked items ready for fast dispatch</p>
          </div>

          <Link href="/shop"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
          View all →
          </Link>
        </div>

        <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {
            featuredProducts.map((product)=>(
              <ProductCard key={product.id} product={product}/>
            ))
          }
        </div>


      </section>

    </div>
  );
}
