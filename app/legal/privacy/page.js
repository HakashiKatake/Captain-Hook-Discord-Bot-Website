export default function Privacy() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-black mb-8 text-primary dark:text-blue-400">Privacy Policy</h1>
            <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-black dark:text-white">1. Data Collection</h2>
                <p className="text-gray-700 dark:text-gray-300">Captain Hook collects minimal data necessary for functionality:</p>
                <ul className="text-gray-700 dark:text-gray-300">
                    <li>Server IDs and channel IDs (for configuration).</li>
                    <li>User IDs (for moderation and economy features).</li>
                    <li>Command usage statistics.</li>
                </ul>

                <h2 className="text-black dark:text-white">2. Data Usage</h2>
                <p className="text-gray-700 dark:text-gray-300">Data is used solely to provide and improve the bot&apos;s features. We do not sell or share your data with third parties.</p>

                <h2 className="text-black dark:text-white">3. Data Deletion</h2>
                <p className="text-gray-700 dark:text-gray-300">You can request the deletion of your data by contacting us on our Support Server.</p>

                <h2 className="text-black dark:text-white">4. Third Party Services</h2>
                <p className="text-gray-700 dark:text-gray-300">The bot runs on the Discord platform and is subject to Discord&apos;s Terms of Service and Privacy Policy.</p>
            </div>
        </div>
    )
}
