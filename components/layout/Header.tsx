'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-sm relative z-40">
            <div className="max-w-[1800px] mx-auto px-2 md:px-4 py-4">
                {/* All logos and title spread from left to right */}
                <div className="flex items-center justify-between gap-2 md:gap-3">
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
                            className="h-10 md:h-12 w-auto object-contain"
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
                            className="h-10 md:h-12 w-auto object-contain"
                            style={{ filter: 'none' }}
                            priority
                        />
                    </Link>

                    {/* Center Title */}
                    <div className="hidden md:block text-center flex-1 px-2">
                        <Link href="/" className="inline-block">
                            <h5 className="text-xl lg:text-3xl xl:text-3xl font-bold text-primary tracking-tight hover:text-primary-light transition-colors">
                                Smart Laboratory on Clean Rivers
                            </h5>
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
                            className="h-10 md:h-12 w-auto object-contain"
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
                            className="h-10 md:h-12 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Mobile Title */}
                <div className="md:hidden text-center mt-3 pt-3 border-t border-gray-100">
                    <Link href="/">
                        <h1 className="text-base font-bold text-primary">
                            Smart Laboratory on Clean Rivers
                        </h1>
                        <p className="text-[10px] text-gray-500">Varanasi</p>
                    </Link>
                </div>
            </div>
        </header>
    );
}
