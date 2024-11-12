'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Form', href: '/form' },
  { name: 'Dictionary', href: '/dictionary' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Health Insurance Guide for College Grads</div>
        <div className="flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700',
                {
                  'bg-gray-700': pathname === link.href,
                }
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}