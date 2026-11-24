import Image from "next/image";
import Link from "next/link";

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

    </div>
  );
}
