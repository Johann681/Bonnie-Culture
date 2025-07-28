'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react' // optional icon lib

export default function Navbar() {
  const [userName, setUserName] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const name = localStorage.getItem('userName')
    setUserName(name)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    setUserName(null)
    window.location.href = '/'
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Orders', href: '/orders' },
    { name: 'About', href: '/about' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-3 flex justify-between items-center bg-white shadow z-50">
      <Link href="/" className="text-xl font-bold text-gray-900">
        Bonnie Culture
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:text-black transition ${
                pathname === link.href ? 'text-black underline underline-offset-4' : ''
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}

        <li className="relative">
          <Link href="/cart" className="text-xl">
            🛒
          </Link>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            2
          </span>
        </li>

        <li>
          {userName ? (
            <div className="flex items-center gap-2">
              <Image
                src="/peeps.jpg"
                alt="User"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span>{userName}</span>
              <button
                onClick={handleLogout}
                className="ml-2 px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="px-3 py-1 border rounded hover:bg-gray-100 transition"
            >
              Login
            </Link>
          )}
        </li>
      </ul>

      {/* Mobile menu button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile nav panel */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow p-4 flex flex-col gap-4 text-gray-700 text-sm font-medium z-40">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`hover:text-black ${
                pathname === link.href ? 'text-black underline' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link href="/cart" className="text-xl">🛒</Link>

          {userName ? (
            <div className="flex items-center gap-2">
              <Image
                src="/peeps.jpg"
                alt="User"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span>{userName}</span>
              <button
                onClick={handleLogout}
                className="ml-2 px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="px-3 py-1 border rounded hover:bg-gray-100 transition"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
