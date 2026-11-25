import { notFound } from "next/navigation";

import productsData from "@/app/data/products.json"
import Link from "next/link";
import AddToCartButton from "../components/addToCartButton";
import { Product } from "../interfaces/products";


export default async function ProductDetailsPage({
    params,
}:{
    params:Promise<{id:string}>;
})
{
    const {id}=await params;
    const products:Product[]= productsData.products;
    const product = products.find((item)=> item.id === id);

    // Triggers Next.js 404 page if the ID doesn't exist in JSON
    if(!product){
        notFound();
    }

    // Find up to 4 related products in the same category

    const relatedProducts=products
    .filter((item)=> item.category === product.category && item.id !== product.id)
    .slice(0,4);

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
             {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                <Link href="/" className="hover:text-blue-600 transition">
                Home
                </Link>
                <span>/</span>
                <Link href="/shop" className="hover:text-blue-600 transition">
                Shop
                </Link>

                <span>/</span>

                <span className="text-gray-900 font-medium truncate">{product.name}</span>

            </nav>

            {/* Main Product Section */}
            <div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-sm"
            >
                 {/* Left: Product Image */}
                <div className="bg-gray-100 rounded-xl overflow-hidden aspect-square">
                    <img src={product.imgurl}
                     alt={product.name}
                     className="w-full h-full object-cover"
                    />

                </div>
                {/* Right: Product Info */}
                <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3">
                        <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                            {product.category}

                        </span>

                        <span
                        className={`text-xs font-medium ${
                            product.inStock !== false ? "text-green-600":"text-red-600"
                        }`}
                        >
                            {product.inStock !== false ? '● In Stock': '● Out of Stock'}

                        </span>

                    </div>

                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
                        {product.name}

                    </h1>

                    <p className="text-2xl font-bold text-gray-900 mt-4">
                        KES {product.price.toLocaleString()}

                    </p>

                    <p className="text-gray-600 leading-relaxed mt-6 border-t border-gray-100 pt-6">
                        {product.description || 
                        'High-quality everyday essential sourced for reliability, performance, and modern style.'}

                    </p>

                    {/* Interactive Quantity & Add to Cart */}

                    <AddToCartButton
                    productName={product.name}
                    inStock={product.inStock}
                    />

                    {/* Delivery / Trust Notes */}

                    <div className="mt-8 pt-6 border-t border-gray-100 space-y-2 text-sm text-gray-500">
                        <p></p>
                        <p></p>

                    </div>


                </div>

            </div>

            {/* Related Products Section */}

            {relatedProducts.length > 0 && (
                <section className="mt-16">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                        More in {product.category}

                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((item)=>(
                            <Link
                            key={item.id}
                            href={`/products/${item.id}`}
                            className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
                            >
                                <div className="h-44 bg-gray-100">
                                    <img src={item.imgurl}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                     />

                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 truncate">
                                        {item.name}
                                    </h3>
                                    <p className="font-bold text-gray-900 mt-1 text-sm">
                                        KES {item.price.toLocaleString()}

                                    </p>

                                </div>
                            </Link>
                        ))}

                    </div>

                </section>
            )}

        </main>
    )





}