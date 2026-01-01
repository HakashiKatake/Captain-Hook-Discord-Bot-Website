"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { motion } from 'framer-motion'
import { Shield, Gamepad2, Smile, Zap } from 'lucide-react'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-amber-100/50 dark:bg-zinc-800/50 border-b-2 border-black dark:border-gray-700 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="mb-8 p-4 bg-white dark:bg-zinc-800 border-4 border-black dark:border-gray-600 rounded-full shadow-retro dark:shadow-none"
          >
            <Image
              src="/assets/logo.png"
              width={150}
              height={150}
              quality={100}
              alt="Captain Hook Logo"
              className="rounded-full"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-primary dark:text-blue-400"
          >
            Captain Hook
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 max-w-2xl mb-10 font-medium"
          >
            The ultimate pirate companion for your Discord server. Games, moderation, memes, and more!
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://discord.com/api/oauth2/authorize?client_id=756715507306201130&permissions=8&scope=bot" target="_blank" rel="noopener noreferrer">
                Add to Server
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 dark:text-white dark:border-white" asChild>
              <Link href="/commands">
                View Commands
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-20 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black dark:text-white">Why Captain Hook?</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:translate-y-[-4px] transition-transform">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary dark:text-blue-400 mb-2" />
                  <CardTitle>Moderation</CardTitle>
                </CardHeader>
                <CardContent>
                  Keep your ship clean with powerful tools like mute, kick, ban, and lockdown.
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full hover:translate-y-[-4px] transition-transform">
                <CardHeader>
                  <Gamepad2 className="w-12 h-12 text-secondary dark:text-yellow-400 mb-2" />
                  <CardTitle>Games</CardTitle>
                </CardHeader>
                <CardContent>
                  Engage your crew with Tic-Tac-Toe, Connect4, Hangman, and more!
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full hover:translate-y-[-4px] transition-transform">
                <CardHeader>
                  <Smile className="w-12 h-12 text-accent dark:text-red-400 mb-2" />
                  <CardTitle>Fun & Memes</CardTitle>
                </CardHeader>
                <CardContent>
                  Liven up the chat with memes, roasting, shipping, and magic 8-ball.
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full hover:translate-y-[-4px] transition-transform">
                <CardHeader>
                  <Zap className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-2" />
                  <CardTitle>Utilities</CardTitle>
                </CardHeader>
                <CardContent>
                  Useful tools for image manipulation, voice commands, and server management.
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
