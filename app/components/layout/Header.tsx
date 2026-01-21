'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
    IoSearchOutline,
    IoChevronDown,
    IoCloseOutline,
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoYoutube,
} from 'react-icons/io5';
import { FaRss } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const navItems = [
        {
            name: 'Home',
            children: [
                { name: 'Home Layout 1', href: '/' },
                { name: 'Home Layout 2', href: '/' },
            ],
        },
        {
            name: 'Politics',
            children: [
                { name: 'National', href: '/politics/national' },
                { name: 'International', href: '/politics/international' },
            ],
        },
        { name: 'News', href: '/news' },
        { name: 'Business', href: '/business' },
        { name: 'Culture', href: '/culture' },
        { name: 'National', href: '/national' },
        { name: 'Sports', href: '/sports' },
        // { name: 'Lifestyle', href: '/lifestyle' },
        // { name: 'Travel', href: '/travel' },
        // { name: 'Opinion', href: '/opinion' },
    ];

    return (
        <header className="relative bg-white z-60">
            <div className="flex items-center justify-between h-[70px] lg:h-[90px] border-b border-black px-4 relative bg-white z-10">
                <button onClick={() => setIsMenuOpen(true)} className="lg:hidden">
                    <RxHamburgerMenu className="size-[20px] text-black" />
                </button>

                <div className="flex-1 flex justify-center">
                    <h1 className="text-2xl lg:text-3xl block font-bold font-condensed tracking-tighter ">
                        THE DOWNTOWN
                    </h1>
                </div>

                <div className="lg:hidden ">
                    <button className="cursor-pointer" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                        {isSearchOpen ? (
                            <IoCloseOutline className="size-[24px] text-black" />
                        ) : (
                            <IoSearchOutline className="size-[20px] text-black" />
                        )}
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between px-4 sticky top-0 bg-white z-50 lg:h-[50px] lg:h-auto border-b border-gray-100 lg:border-none shadow-sm lg:shadow-none font-bold">
                <button onClick={() => setIsMenuOpen(true)} className="hidden lg:block cursor-pointer group">
                    <div className="flex flex-col gap-1 group-hover:gap-0.5 transition-all duration-300">
                        <span className="w-[20px] block h-[2px] bg-black"></span>
                        <span className="w-[20px] block h-[2px] bg-black"></span>
                        <span className="w-[20px] block h-[2px] bg-black"></span>
                    </div>
                </button>

                <nav className="hidden lg:flex space-x-4  font-bold uppercase  tracking-wider py-3 w-full justify-center">
                    {navItems?.map((item) => (
                        <div key={item.name} className="relative group">
                            <Link
                                href={item.href || '#'}
                                className="hover:text-black  flex  text-[15px] items-center space-x-1 transition-colors group-hover:text-black"
                            >
                                <span className="font-condensed">{item.name}</span>
                                {Array.isArray(item.children) && <IoChevronDown className="size-3 text-gray-400" />}
                            </Link>
                            <div className="h-[2px] opacity-0 group-hover:opacity-100 duration-300 w-0 group-hover:w-full transition-all bg-black absolute bottom-[-4px]" />

                            {Array.isArray(item.children) && (
                                <div className="absolute top-full left-0 pt-4 hidden group-hover:block z-50">
                                    <div className=" min-w-[180px] shadow-lg bg-white">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="block px-4 py-2 border-b font-normal text-[13px] border-gray-100 hover:bg-gray-50 transition-colors normal-case"
                                            >
                                                <span className="font-roboto">{child.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="hidden lg:block cursor-pointer">
                    {isSearchOpen ? (
                        <IoCloseOutline className="size-[24px] text-black" />
                    ) : (
                        <IoSearchOutline className="size-[20px] text-black" />
                    )}
                </button>
            </div>

            <div
                className={`absolute left-0 right-0 lg:left-auto lg:right-4 lg:top-full lg:w-[400px] bg-white border-b lg:border border-gray-100  transition-all duration-300 overflow-visible z-100 ${isSearchOpen ? 'max-h-[150px] opacity-100 py-6 px-4 lg:py-4 lg:px-4' : 'max-h-0 opacity-0 py-0 px-4 invisible'}`}
            >
                <div className="hidden lg:block absolute -top-2 right-4 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100" />
                <div className="max-w-[400px] mx-auto relative">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-[#eeeeee] font-roboto py-2 px-4 pr-12 text-[15px] focus:outline-none focus:border-gray-200 transition-colors"
                            autoFocus={isSearchOpen}
                        />
                        <button className="absolute cursor-pointer right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors">
                            <IoSearchOutline className="size-5 cursor-pointer" />
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 z-100 ${isMenuOpen ? 'visible' : 'invisible'} transition-[visibility] duration-300`}
            >
                <div
                    className={`absolute inset-0 bg-black/80 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMenuOpen(false);
                        }}
                        className="fixed top-6 right-6 text-white hover:text-gray-300 transition-colors cursor-pointer"
                    >
                        <IoCloseOutline size={40} />
                    </button>
                </div>

                <div
                    className={`absolute inset-y-0 left-0 w-[300px] bg-white shadow-2xl flex flex-col p-8 overflow-y-auto transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div className="relative mb-10 mt-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border font-roboto rounded-full border-gray-200 py-2 px-5 focus:outline-none focus:border-gray-400 text-[13px] font-normal"
                        />
                        <IoSearchOutline className="absolute cursor-pointer right-5 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
                    </div>

                    <div className="flex-1">
                        <ul className="space-y-4">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href || '#'}
                                        className="text-[16px] font-black uppercase font-sans tracking-tight text-black hover:text-gray-700 transition-colors flex items-center justify-between"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-auto pt-10">
                        <div className="flex space-x-5 mb-8">
                            <Link href="#" className="text-gray-400 hover:text-[#3b5998] transition-colors">
                                <IoLogoFacebook className="size-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-[#1da1f2] transition-colors">
                                <IoLogoTwitter className="size-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-[#ff0000] transition-colors">
                                <IoLogoYoutube className="size-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-[#ee802f] transition-colors">
                                <FaRss className="size-5" />
                            </Link>
                        </div>

                        <div className="space-y-1">
                            <p className="text-[10px] text-gray-400 leading-relaxed font-medium">
                                © 2026 JNews - Premium WordPress news & magazine theme by{' '}
                                <Link href="#" className="hover:text-black">
                                    Jegtheme
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
