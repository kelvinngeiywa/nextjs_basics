"use client";

import Link from "next/link";

const navLinks=[
    {name:"Home", href:"/"},
    {name:"About",href:"/about"},
    {name:"contact",href:"/contact"}

];

export default function Navbar(){
    return(
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-center h-16">
                    <Link href={"/"} className="">PrimeHub</Link>
                    <div>
                        {
                            navLinks.map((link) => {
                                return (
                                    <Link key={link.name} href={link.href}
                                        className=""
                                    >{link.name}</Link>
                                )
                            })
                        }
                    </div>
                    
                </div>
                

            </div>
        </nav>
    )
}