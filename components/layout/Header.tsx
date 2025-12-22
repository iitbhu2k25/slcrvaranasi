'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        // INCREASED: Added more vertical padding (py-4 md:py-6) to increase overall height
        <header className="bg-white shadow-sm relative z-40 py-2 md:py-4">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6">
                
                {/* Desktop Layout - All logos and title in one row */}
                <div className="hidden md:flex items-center justify-between gap-6">
                    {/* Logo 1 - Denmark */}
                    <Link
                        href="https://um.dk/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/denmark.png"
                            alt="Denmark Ministry of Foreign Affairs"
                            width={240}
                            height={100}
                            // INCREASED: Changed h-12 to h-16 lg:h-20
                            className="h-16 lg:h-20 w-auto object-contain"
                            priority
                            unoptimized
                        />
                    </Link>

                    {/* Logo 2 - Ministry of Jal Shakti */}
                    <Link
                        href="https://jalshakti.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/Ministry_of_Jal_Shakti.svg"
                            alt="Ministry of Jal Shakti"
                            width={110}
                            height={100}
                            // INCREASED: Changed h-12 to h-16 lg:h-20
                            className="h-16 lg:h-20 w-auto object-contain"
                            style={{ filter: 'none' }}
                            priority
                        />
                    </Link>

                    {/* Center Title */}
                    <div className="text-center flex-1 px-4">
                        <Link href="/" className="inline-block">
                            {/* INCREASED: Font sizes bumped up (2xl -> 3xl -> 4xl) */}
                            <h1 className="text-4xl lg:text-xl xl:text-4xl font-bold text-primary tracking-tight hover:text-primary-light transition-colors leading-tight">
                                Smart Laboratory on Clean Rivers
                            </h1>
                        </Link>
                    </div>

                    {/* Logo 3 - SLCR */}
                    <Link
                        href="/"
                        className="shrink-0 hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/Logo_edited.png"
                            alt="SLCR Logo"
                            width={200}
                            height={200}
                            // INCREASED: Changed h-12 to h-16 lg:h-20
                            className="h-16 lg:h-20 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Logo 4 - Namami Gange */}
                    <Link
                        href="https://nmcg.nic.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/namiti_gange.gif"
                            alt="Namami Gange Programme"
                            width={90}
                            height={70}
                            // INCREASED: Changed h-12 to h-16 lg:h-20
                            className="h-16 lg:h-20 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Mobile Layout - Logos row + Title below */}
                <div className="md:hidden py-2">
                    {/* All 4 logos in a row */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                        <Link
                            href="https://um.dk/en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 hover:opacity-80 transition-opacity"
                        >
                            <Image
                                src="/denmark.png"
                                alt="Denmark Ministry of Foreign Affairs"
                                width={200}
                                height={80}
                                // INCREASED: Mobile logos to h-10/h-12
                                className="h-10 sm:h-12 w-auto object-contain"
                                priority
                                unoptimized
                            />
                        </Link>

                        <Link
                            href="https://jalshakti.gov.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 hover:opacity-80 transition-opacity"
                        >
                            <Image
                                src="/Ministry_of_Jal_Shakti.svg"
                                alt="Ministry of Jal Shakti"
                                width={90}
                                height={80}
                                className="h-10 sm:h-12 w-auto object-contain"
                                style={{ filter: 'none' }}
                                priority
                            />
                        </Link>

                        <Link
                            href="/"
                            className="shrink-0 hover:opacity-80 transition-opacity"
                        >
                            <Image
                                src="/Logo_edited.png"
                                alt="SLCR Logo"
                                width={180}
                                height={180}
                                className="h-10 sm:h-12 w-auto object-contain"
                                priority
                            />
                        </Link>

                        <Link
                            href="https://nmcg.nic.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 hover:opacity-80 transition-opacity"
                        >
                            <Image
                                src="/namiti_gange.gif"
                                alt="Namami Gange Programme"
                                width={70}
                                height={50}
                                className="h-10 sm:h-12 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Title below logos on mobile */}
                    <div className="text-center pt-2 border-t border-gray-100">
                        <Link href="/">
                            {/* INCREASED: Mobile font size */}
                            <h1 className="text-lg sm:text-xl font-bold text-primary leading-tight">
                                Smart Laboratory on Clean Rivers
                            </h1>
                            <p className="text-sm text-gray-500 mt-1">Varanasi</p>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}