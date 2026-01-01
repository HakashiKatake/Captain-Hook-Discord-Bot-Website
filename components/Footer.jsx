import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t-2 border-black dark:border-gray-700 bg-white dark:bg-zinc-900 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
            <div>
                <h3 className="font-bold text-lg mb-4 text-black dark:text-white">Captain Hook</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">The most swashbuckling bot on Discord. Raise the anchor and set sail!</p>
            </div>
            <div>
                <h3 className="font-bold text-lg mb-4 text-black dark:text-white">Links</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 hover:underline">Home</Link></li>
                    <li><Link href="/commands" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 hover:underline">Commands</Link></li>
                    <li><a href="https://discord.gg/9Ef8fq5sTA" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 hover:underline">Support Server</a></li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold text-lg mb-4 text-black dark:text-white">Legal</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link href="/legal/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 hover:underline">Terms of Service</Link></li>
                    <li><Link href="/legal/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 hover:underline">Privacy Policy</Link></li>
                </ul>
            </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Captain Hook. All rights reserved. Not affiliated with Discord.
        </div>
      </div>
    </footer>
  )
}
