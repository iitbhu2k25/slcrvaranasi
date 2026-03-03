'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
       
        <header className="bg-slate-200 shadow-sm relative z-40">
     
            <div className="max-w-[1800px] mx-auto px-4 sm:px-3 py-3 md:py-4">
                
  
                <div className="hidden md:flex items-center justify-between gap-4">
                    {/* Logo 1 - Denmark (Reduced Size) */}
                    <Link
                        href="https://um.dk/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/denmark.png"
                            alt="Denmark Ministry of Foreign Affairs"
                            width={220}
                            height={90}
                          
                            className="h-10 lg:h-12 w-auto object-contain"
                            priority
                            unoptimized
                        />
                    </Link>

                    {/* Logo 2 - Ministry of Jal Shakti (Reduced Size) */}
                    <Link
                        href="https://jalshakti.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/Ministry_of_Jal_Shakti.svg"
                            alt="Ministry of Jal Shakti"
                            width={100}
                            height={90}
                            // UPDATED: Reduced height from h-16/h-20 to h-10/h-12
                            className="h-10 lg:h-12 w-auto object-contain"
                            style={{ filter: 'none' }}
                            priority
                        />
                    </Link>

                    {/* Center Title */}
                    <div className="text-center flex-1 px-4">
                        <Link href="/" className="inline-block">
                            <h1 className="text-2xl lg:text-3xl xl:text-5xl font-extrabold text-primary tracking-tight hover:text-primary-light transition-colors leading-tight">
                                Smart Laboratory on Clean Rivers
                            </h1>
                        </Link>
                    </div>

                    {/* Logo 3 - SLCR (Maintained Large Size) */}
                    <Link
                        href="/"
                        className="shrink-0 hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/Logo_edited.png"
                            alt="SLCR Logo"
                            width={180}
                            height={180}
                            // KEPT: Maintained h-16/h-20 to keep it prominent
                            className="h-16 lg:h-20 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Logo 4 - Namami Gange (Reduced Size) */}
                    <Link
                        href="https://nmcg.nic.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/namiti_gange.gif"
                            alt="Namami Gange Programme"
                            width={80}
                            height={60}
                            // UPDATED: Reduced height from h-16/h-20 to h-10/h-12
                            className="h-10 lg:h-12 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                    <div className="flex items-center justify-between gap-2">
                        {/* Partner Logos on Mobile (Reduced Size) */}
                        <Link href="https://um.dk/en" target="_blank" rel="noopener noreferrer" className="shrink-0">
                            <Image
                                src="/denmark.png"
                                alt="Denmark Ministry"
                                width={160}
                                height={70}
                                // UPDATED: Reduced from h-10/h-12 to h-7/h-8
                                className="h-7 sm:h-8 w-auto object-contain"
                                priority
                                unoptimized
                            />
                        </Link>

                        <Link href="https://jalshakti.gov.in/" target="_blank" rel="noopener noreferrer" className="shrink-0">
                            <Image
                                src="/Ministry_of_Jal_Shakti.svg"
                                alt="Ministry of Jal Shakti"
                                width={80}
                                height={70}
                                // UPDATED: Reduced from h-10/h-12 to h-7/h-8
                                className="h-7 sm:h-8 w-auto object-contain"
                                style={{ filter: 'none' }}
                                priority
                            />
                        </Link>

                        {/* SLCR Logo on Mobile (Maintained Size) */}
                        <Link href="/" className="shrink-0">
                            <Image
                                src="/Logo_edited.png"
                                alt="SLCR Logo"
                                width={140}
                                height={140}
                                // KEPT: Maintained h-10/h-12
                                className="h-10 sm:h-12 w-auto object-contain"
                                priority
                            />
                        </Link>

                        <Link href="https://nmcg.nic.in/" target="_blank" rel="noopener noreferrer" className="shrink-0">
                            <Image
                                src="/namiti_gange.gif"
                                alt="Namami Gange"
                                width={60}
                                height={40}
                                // UPDATED: Reduced from h-10/h-12 to h-7/h-8
                                className="h-7 sm:h-8 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Mobile Title */}
                    <div className="text-center mt-4 pt-4 border-t border-gray-100">
                        <Link href="/">
                            <h1 className="text-xl sm:text-2xl font-extrabold text-primary leading-tight">
                                Smart Laboratory on Clean Rivers
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}