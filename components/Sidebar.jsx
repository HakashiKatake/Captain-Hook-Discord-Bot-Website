"use client"
import Link from 'next/link'
import { cn } from '../lib/utils'
import { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'

export default function Sidebar({ categories, activeCategory, activeCommand, onSelect }) {
  const [openCategories, setOpenCategories] = useState({})

  // Initialize all categories as open by default
  useEffect(() => {
    const initialOpen = Object.keys(categories).reduce((acc, cat) => {
      acc[cat] = true
      return acc
    }, {})
    setOpenCategories(initialOpen)
  }, [categories])

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  return (
    <aside className="w-full md:w-64 lg:w-72 shrink-0 border-r-2 border-black dark:border-gray-700 bg-gray-50 dark:bg-zinc-900 hidden md:block h-[calc(100vh-64px)] overflow-y-auto sticky top-16">
      <div className="p-6">
        <h2 className="font-bold text-lg mb-4 text-black dark:text-white">Command Categories</h2>
        <nav className="space-y-2">
          {Object.entries(categories).map(([category, commands]) => (
            <div key={category} className="space-y-1">
              <button
                onClick={() => toggleCategory(category)}
                className="flex items-center justify-between w-full font-semibold text-sm text-black dark:text-white hover:text-primary dark:hover:text-blue-400 transition-colors py-1"
              >
                {category}
                <ChevronRight 
                  className={cn(
                    "h-4 w-4 transition-transform",
                    openCategories[category] ? "rotate-90" : ""
                  )} 
                />
              </button>
              
              {openCategories[category] && (
                <div className="ml-2 border-l-2 border-gray-200 dark:border-gray-700 pl-4 space-y-1 mt-1">
                  {commands.map((cmd) => (
                    <a
                      key={cmd.name}
                      href={`#${cmd.name}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(cmd.name);
                        if (element) {
                            // Account for sticky header
                            const headerOffset = 80;
                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                            window.scrollTo({
                                top: offsetPosition,
                                behavior: "smooth"
                            });
                        }
                      }}
                      className={cn(
                        "block text-sm py-1 transition-colors hover:text-primary dark:hover:text-blue-400",
                        activeCommand === cmd.name ? "text-primary dark:text-blue-400 font-medium" : "text-gray-600 dark:text-gray-400"
                      )}
                    >
                      {cmd.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}
