"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks=[
    {name:"Home", href:"/"},
    {name:"About",href:"/about"},
    {name:"contact",href:"/contact"}

];

export default function Navbar(){
    const [isOpen,setIsOpen]=useState(false);
    const pathName=usePathname();

    return(
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-center h-16">
                    <Link href={"/"} className="text-xl font-bold text-gray-900">PrimeHub</Link>

                    {/* desktop navigation */}
                    <div className="hidden h-full md:flex space-x-8">
                        {
                            navLinks.map((link) => {
                                const isActive=pathName === link.href;
                                return (
                                    <Link key={link.name} href={link.href}
                                        className={`text-sm font-medium transition-colors py-5 h-full ${
                                            isActive ? "text-blue-600 border-b-2 border-blue-600" :
                                            "text-gray-600 hover:text-gray-900"
                                        }`}
                                    >{link.name}</Link>
                                )
                            })
                        }
                    </div>

                    <div className="md:hidden">
                        <button
                        onClick={()=> setIsOpen(!isOpen)}
                        className="text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                        aria-label="Toggle Menu"
                        >
                            {isOpen ? "✕" :"☰"}
                        </button>

                    </div>
                    
                </div>
                

            </div>

            {/* mobile dropdown menu */}
            {
                isOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1">
                        {navLinks.map((link)=>{
                            const isActive=pathName === link.href
                            return (
                                <Link
                                key={link.name}
                                href={link.href}
                                onClick={()=>setIsOpen(false)}
                                className={
                                    `block px-3 py-2 rounded-md text-base font-medium ${
                                        isActive ? "bg-blue-50 text-blue-600":"text-gray-700 hover:bg-gray-50"
                                    }`
                                }
                                >
                                    {link.name}
                                </Link>
                            )
                        })}

                    </div>
                )
            }
        </nav>
    )
}