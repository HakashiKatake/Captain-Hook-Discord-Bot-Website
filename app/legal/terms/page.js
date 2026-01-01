export default function Terms() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-black mb-8 text-primary dark:text-blue-400">Terms of Service</h1>
            <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-black dark:text-white">1. Acceptance of Terms</h2>
                <p className="text-gray-700 dark:text-gray-300">By inviting Captain Hook to your Discord server or using its features, you agree to be bound by these Terms of Service.</p>

                <h2 className="text-black dark:text-white">2. Usage License</h2>
                <p className="text-gray-700 dark:text-gray-300">Captain Hook is provided for personal, non-commercial use in Discord servers. You may not:</p>
                <ul className="text-gray-700 dark:text-gray-300">
                    <li>Use the bot for illegal activities.</li>
                    <li>Attempt to reverse engineer the bot&apos;s code.</li>
                    <li>Spam commands to intentionally lag or crash the bot.</li>
                </ul>

                <h2 className="text-black dark:text-white">3. Disclaimer</h2>
                <p className="text-gray-700 dark:text-gray-300">The bot is provided &quot;as is&quot;, without warranty of any kind. We are not responsible for any damages or data loss resulting from the use of Captain Hook.</p>

                <h2 className="text-black dark:text-white">4. Changes</h2>
                <p className="text-gray-700 dark:text-gray-300">We reserve the right to modify these terms at any time. Continued use of the bot constitutes acceptance of the new terms.</p>
            </div>
        </div>
    )
}
