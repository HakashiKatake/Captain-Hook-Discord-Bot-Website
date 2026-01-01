"use client"
import { commandsData } from '../../data/commands'
import Sidebar from '../../components/Sidebar'
import { Card, CardContent } from '../../components/ui/Card'
import { cn } from '../../lib/utils'

export default function CommandsPage() {
  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      <Sidebar categories={commandsData} />

      <main className="flex-1 p-6 md:p-12 overflow-y-auto bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="mb-12">
            <h1 className="text-4xl font-black mb-4 text-primary dark:text-blue-400">Commands</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Explore the complete list of Captain Hook commands.
              Use <code className="bg-gray-100 dark:bg-zinc-800 rounded px-1 border border-black dark:border-gray-600 text-black dark:text-white">$</code> as prefix.
            </p>
          </div>

          {Object.entries(commandsData).map(([category, commands]) => (
            <div key={category} className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-black dark:text-white">
                <span className="w-8 h-1 bg-primary dark:bg-blue-400 block rounded-full"></span>
                {category}
              </h2>

              <div className="grid gap-6">
                {commands.map((cmd) => (
                  <div
                    key={cmd.name}
                    id={cmd.name}
                    className="scroll-mt-24 group"
                  >
                    <Card className="transition-all hover:translate-x-1 hover:translate-y-1">
                      <div className="p-6">
                        <div className="flex items-baseline justify-between mb-2">
                          <h3 className="text-xl font-bold font-mono text-primary dark:text-blue-400">
                            ${cmd.name}
                          </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {cmd.description}
                        </p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
