"use client";
import Link from "next/link";
import { useState } from "react";


export interface Product{
    id:string;
    name:string;
    category:string;
    price:number;
    image:string;
}



export default function ProductCard({product}:{product: Product}){

    const[added,setAdded]=useState(false);

    const handleAddToCart=()=>{
        setAdded(true);
        setTimeout(()=> setAdded(false),1500);
    };


    return(
        <div 
        className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            {/* product image */}
            <Link href={`/products/${product.id}`}
            className="relative h-56 w-full bg-gray-100 overflow-hidden"
            >
                <img 
                src={product.image}
                 alt={product.name} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"

                 />
                 <span
                 className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full"
                 >
                    {product.category}
                 </span>
            </Link>

            {/* Product info */}
            <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                    <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {product.name}
                    </h3>

                    </Link>
                    <p className="mt-1 text-xl font-bold text-gray-900">
                        KES {product.price.toLocaleString()}
                    </p>

                </div>

                {/* Add to cart button */}
                <button
                onClick={handleAddToCart}
                className={`mt-4 w-full py-2.5 px-4 rounded-lg font-medium text-sm transition-colors ${
                    added 
                    ? "bg-green-600 text-white"
                    :"bg-blue-600 text-white hover:bg-blue-700"
                }`}
                >
                    {added ? "✓ Added to Cart":"Add to Cart"}

                </button>
            </div>


        </div>
    )
}