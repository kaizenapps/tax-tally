// components/Header.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Tax Tally Logo"
            width={32}
            height={32}
            className="w-8 h-8"
            priority
          />
          <div className="text-2xl font-bold text-emerald-800">Tax Tally</div>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/pricing" className="hover:text-emerald-700 hover:font-semibold">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-emerald-700 hover:font-semibold">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;