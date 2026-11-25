"use client";

import Link from "next/link";
import productsData from "@/app/data/products.json";
import { Product } from "../interfaces/products";
import { useMemo, useState } from "react";

export default function ShopPage(){

    const products: Product[]=productsData.products;

    const [selectedcategory,setSelectedCategory]=useState<string>('all');
    const [searchQuery,setSearchQuery]=useState<string>('');
    const [sortBy,setSortBy]=useState<string>('default');


    // Automatically extract unique categories from your JSON file

    const categories=useMemo(()=>{
        const unique=Array.from(new Set(products.map((p)=>p.category)));
        return ['All',...unique]
    },[products]);

     // Filter and sort products

    const filteredProducts=useMemo(()=>{
        return products.filter((product)=>{
            const matchesCategory=selectedcategory === 'All' || product.category ===selectedcategory;
            const matchesSearch=product.name.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
        })
        .sort((a,b)=>{
            if (sortBy === "price-asc") return a.price - b.price;
            if(sortBy === "price-desc") return b.price - a.price;
            return 0;
        });
    },[products,selectedcategory,searchQuery,sortBy]);

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* page header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Shop All Products</h1>
                <p className="text-gray-500 mt-1">
                    Handpicked items ready for fast dispatch
                </p>
            </div>

             {/* Category Pills, Search & Sort Controls */}

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-200">
                <div className="flex flex-wrap gap-2">
                    {categories.map((category)=>(
                        <button
                        key={category}
                        onClick={()=>setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                            selectedcategory === category
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        >
                            {category}

                        </button>
                    ))}

                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <input
                     type="text"
                     placeholder="Search products..."
                     value={searchQuery}
                     onChange={(e)=>setSearchQuery(e.target.value)}
                     className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"

                    />

                    <select 
                    value={sortBy}
                    onChange={(e)=> setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <option value="default">Sort by: Featured</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>

                    </select>

                </div>
            </div> 

            {/* Product Grid */}

            {filteredProducts.length === 0 ? (
                <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-gray-600 font-medium">No Products found.</p>
                    <button
                    onClick={()=>{
                        setSelectedCategory('All');
                        setSearchQuery('');
                    }}
                    className="mt-3 text-blue-600 text-sm font-medium hover:underline"
                    >
                        Reset filters
                    </button>

                </div>
            ):(
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product)=>(
                        <div
                        key={product.id}
                        className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition flex flex-col"
                        >
                             {/* Product Image & Category Badge */}
                            <div className="relative h-48 bg-gray-100">
                                <span className="absolute top-3 left-3 bg-white/95 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                                    {product.category}

                                </span>
                                <Link href={`/products/${product.id}`}>
                                <img src={product.imgurl} alt={product.name}
                                className="w-full h-full object-cover"
                                 />
                                </Link>

                            </div>

                            {/* Product Details */}

                            <div className="p-5 flex flex-col flex-1 justify-between">
                                <div>
                                    <Link href={`/products/${product.id}`}>
                                       <h2 className="font-semibold text-gray-900 hover:text-blue-600 transition line-clamp-2">
                                        {product.name}
                                       </h2>
                                    </Link>
                                    <p className="font-bold text-gray-900 mt-2">
                                        KES {product.price.toLocaleString()}

                                    </p>
                                </div>

                                <button
                                onClick={()=>alert(`Added ${product.name} to cart`)}
                                className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition text-sm"
                                >
                                    Add to Cart

                                </button>

                            </div>


                        </div>
                    ))}

                </div>

            )}


        </main>
    )

}