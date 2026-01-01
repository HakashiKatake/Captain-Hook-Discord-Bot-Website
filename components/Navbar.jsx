"use client"
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/Button'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ModeToggle } from './ModeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-black dark:border-gray-700 bg-white dark:bg-zinc-900 shadow-retro dark:shadow-none">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold italic tracking-tighter text-black dark:text-white">Captain Hook</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium text-black dark:text-gray-200 hover:text-primary dark:hover:text-blue-400 hover:underline">Home</Link>
            <Link href="/commands" className="text-sm font-medium text-black dark:text-gray-200 hover:text-primary dark:hover:text-blue-400 hover:underline">Commands</Link>
            <Link href="/legal/terms" className="text-sm font-medium text-black dark:text-gray-200 hover:text-primary dark:hover:text-blue-400 hover:underline">TOS</Link>
            <Button variant="primary" size="sm" asChild>
                <a href="https://discord.com/api/oauth2/authorize?client_id=756715507306201130&permissions=8&scope=bot" target="_blank" rel="noopener noreferrer">
                    Invite Bot
                </a>
            </Button>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-black dark:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-black dark:border-gray-700 bg-white dark:bg-zinc-900 p-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium text-black dark:text-white" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/commands" className="text-sm font-medium text-black dark:text-white" onClick={() => setIsOpen(false)}>Commands</Link>
            <Link href="/legal/terms" className="text-sm font-medium text-black dark:text-white" onClick={() => setIsOpen(false)}>TOS</Link>
            <Button variant="primary" size="sm" className="w-full" asChild>
                <a href="https://discord.com/api/oauth2/authorize?client_id=756715507306201130&permissions=8&scope=bot" target="_blank" rel="noopener noreferrer">
                    Invite Bot
                </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
