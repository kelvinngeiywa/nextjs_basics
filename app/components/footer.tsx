"use client";

import Link from "next/link"
import { useEffect, useState } from "react";

export default function Footer(){
    // const currentYear=new Date().getFullYear();
    const [currentYear, setCurrentYear] = useState<number | null>(null);


    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return(
        <footer className="bg-white border-t border-gray-200 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand Column (Matches Navbar Logo) */}
                    <div className="md:col-span-2">
                        <Link href="/" className="text-xl font-bold text-gray-900">
                        PrimeHub
                        </Link>

                        <p className="mt-3 text-sm text-gray-600 max-w-sm">
                            Your central destination for quality electronics, accessories, and everyday essentials with fast, reliable delivery.
                        </p>

                    </div>

                    {/* Quick Links Column (Matches Navbar Links) */}

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                            Navigation
                        </h3>

                        <ul className="mt-4 space-y-2.5 text-sm">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/shop" className="text-gray-600 hover:text-blue-600 transition-colors">
                                Shop
                                </Link>
                            </li>

                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                                About
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                                Contacts
                                </Link>
                            </li>
                        </ul>
                    </div>

                     {/* Customer Support / Legal Column */}

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                            Support
                        </h3>

                        <ul className="mt-4 space-y-2.5 text-sm">
                            <li>
                                <Link href="/shipping" className="text-gray-600 hover:text-blue-600 transition-colors">
                                Delivery Info
                                </Link>

                            </li>

                            <li>
                                <Link href="/returns" className="text-gray-600 hover:text-blue-600 transition-colors">
                                Returns & Refunds
                                </Link>

                            </li>

                            <li>
                                <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                                Privacy Policy
                                </Link>

                            </li>
                        </ul>

                    </div>

                </div>

                {/* Bottom Copyright Bar */}
                <div
                className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500"
                >
                    <p>© {currentYear} PrimeHub. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-blue-600 transition-colors">
                            Instagram
                        </a>

                        <a href="#" className="hover:text-blue-600 transition-colors">
                            X (Twitter)
                        </a>

                        <a href="#" className="hover:text-blue-600 transition-colors">
                            WhatsApp
                        </a>



                    </div>

                </div>

            </div>


        </footer>
    )
}