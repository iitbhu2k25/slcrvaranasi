'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-sm relative z-40">
            <div className="max-w-[1800px] mx-auto px-3 sm:px-4 py-3 sm:py-4">
                {/* Desktop Layout - All logos and title in one row */}
                <div className="hidden md:flex items-center justify-between gap-3">
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
                            width={200}
                            height={80}
                            className="h-12 w-auto object-contain"
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
                            width={90}
                            height={80}
                            className="h-12 w-auto object-contain"
                            style={{ filter: 'none' }}
                            priority
                        />
                    </Link>

                    {/* Center Title */}
                    <div className="text-center flex-1 px-2">
                        <Link href="/" className="inline-block">
                            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-primary tracking-tight hover:text-primary-light transition-colors">
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
                            width={180}
                            height={180}
                            className="h-12 w-auto object-contain"
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
                            width={70}
                            height={50}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Mobile Layout - Logos row + Title below */}
                <div className="md:hidden">
                    {/* All 4 logos in a row */}
                    <div className="flex items-center justify-between gap-2">
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
                                className="h-8 sm:h-10 w-auto object-contain"
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
                                className="h-8 sm:h-10 w-auto object-contain"
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
                                className="h-8 sm:h-10 w-auto object-contain"
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
                                className="h-8 sm:h-10 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Title below logos on mobile */}
                    <div className="text-center mt-3 pt-3 border-t border-gray-100">
                        <Link href="/">
                            <h1 className="text-sm sm:text-base font-bold text-primary leading-tight">
                                Smart Laboratory on Clean Rivers
                            </h1>
                            <p className="text-xs text-gray-500 mt-0.5">Varanasi</p>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
