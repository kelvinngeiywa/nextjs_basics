'use client';

import { useState } from "react";
import { AddToCart } from "../interfaces/products";

export default function AddToCartButton({productName, inStock=true}:AddToCart){

    const [quantity,setQuantity]=useState(1);

    const handleAdd=()=>{
        alert(`Added ${quantity} * ${productName} to your cart!`)
    };

    return (
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
             {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                <button
                type="button"
                onClick={()=>setQuantity((q)=>Math.max(1,q-1))}
                className="px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-l-lg font-medium"
                >
                    -

                </button>
                <span className="px-4 py-2.5 font-semibold text-gray-900 min-w-[3rem] text-center">
                    {quantity}
                </span>

                <button
                type="button"
                onClick={()=>setQuantity((q)=>q+1)}
                className="px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-r-lg font-medium"
                >
                    +

                </button>

            </div>

             {/* Primary Action Button */}

            <button
            type="button"
            disabled={!inStock}
            onClick={handleAdd}
            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-lg transition text-sm sm:text-base"
            >
                {inStock ? 'Add to Cart' : 'Out of Stock'}

            </button>

        </div>
    )

}