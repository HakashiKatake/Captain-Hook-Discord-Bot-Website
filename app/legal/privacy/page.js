export default function Privacy() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-black mb-4 text-primary dark:text-blue-400">Privacy Policy for Captain Hook</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8"><strong>Last Updated:</strong> January 1, 2026</p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Introduction</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        This Privacy Policy explains how Captain Hook (&quot;the Bot&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects information when you use our Discord bot. By using Captain Hook, you agree to the collection and use of information in accordance with this policy.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Information We Collect</h2>

                    <h3 className="text-xl font-semibold text-black dark:text-white mt-4">Data Collected Automatically</h3>
                    <p className="text-gray-700 dark:text-gray-300">When you interact with Captain Hook, we may collect:</p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                        <li><strong>User IDs</strong>: Discord user identifiers to provide features like AFK status, economy system, and reminders</li>
                        <li><strong>Server IDs</strong>: Discord server identifiers to store server-specific settings like custom prefixes</li>
                        <li><strong>Channel IDs</strong>: To enable features like message sniping and welcome messages</li>
                        <li><strong>Message Content</strong>: Only when you invoke a command or trigger a bot feature (e.g., blacklisted word detection)</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-black dark:text-white mt-6">Data Stored Locally</h3>
                    <p className="text-gray-700 dark:text-gray-300">Captain Hook stores the following data in a local SQLite database:</p>
                    <div className="overflow-x-auto mt-4">
                        <table className="min-w-full border-2 border-black dark:border-gray-600">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th className="px-4 py-2 text-left border-b-2 border-black dark:border-gray-600">Data Type</th>
                                    <th className="px-4 py-2 text-left border-b-2 border-black dark:border-gray-600">Purpose</th>
                                    <th className="px-4 py-2 text-left border-b-2 border-black dark:border-gray-600">Retention</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300">
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="px-4 py-2">Server Prefix</td>
                                    <td className="px-4 py-2">Custom command prefix per server</td>
                                    <td className="px-4 py-2">Until server removes bot</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="px-4 py-2">AFK Status</td>
                                    <td className="px-4 py-2">User&apos;s AFK message</td>
                                    <td className="px-4 py-2">Until user returns</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="px-4 py-2">Sniped Messages</td>
                                    <td className="px-4 py-2">Last deleted message per channel</td>
                                    <td className="px-4 py-2">Temporary (session only)</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="px-4 py-2">Economy Data</td>
                                    <td className="px-4 py-2">Virtual currency balances</td>
                                    <td className="px-4 py-2">Persistent</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Blacklisted Words</td>
                                    <td className="px-4 py-2">Server moderation</td>
                                    <td className="px-4 py-2">Until removed by admin</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">How We Use Your Information</h2>
                    <p className="text-gray-700 dark:text-gray-300">We use collected information to:</p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>Execute bot commands you request</li>
                        <li>Store your preferences (custom prefixes, AFK messages)</li>
                        <li>Provide moderation features (word filtering)</li>
                        <li>Maintain the virtual economy system</li>
                        <li>Display server and user statistics</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Data We Do NOT Collect</h2>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>We do <strong>NOT</strong> collect or store message history</li>
                        <li>We do <strong>NOT</strong> track your activity or presence persistently</li>
                        <li>We do <strong>NOT</strong> collect personal information (email, IP address, etc.)</li>
                        <li>We do <strong>NOT</strong> sell or share your data with third parties</li>
                        <li>We do <strong>NOT</strong> use your data for advertising</li>
                        <li>We do <strong>NOT</strong> use your data to train AI or machine learning models</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Third-Party Services</h2>
                    <p className="text-gray-700 dark:text-gray-300">Captain Hook may interact with these external APIs:</p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                        <li><strong>Jikan API</strong> (anime information) - No user data shared</li>
                        <li><strong>waifu.pics</strong> (anime GIFs) - No user data shared</li>
                        <li><strong>Random animal APIs</strong> (cat, dog, fox images) - No user data shared</li>
                        <li><strong>ip-api.com</strong> (IP lookup command) - Only IP addresses you provide</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Data Security</h2>
                    <p className="text-gray-700 dark:text-gray-300">We implement reasonable security measures to protect your data:</p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>Data is stored locally on secured servers</li>
                        <li>No sensitive personal information is collected</li>
                        <li>Database access is limited to bot operations only</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Data Deletion</h2>
                    <p className="text-gray-700 dark:text-gray-300">You can request data deletion by:</p>
                    <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                        <li><strong>AFK Data</strong>: Use the <code className="bg-gray-100 dark:bg-zinc-700 px-1 rounded">$afk</code> command to clear your status</li>
                        <li><strong>Economy Data</strong>: Contact the bot owner</li>
                        <li><strong>Server Data</strong>: Remove the bot from your server (all server-specific data will be deleted)</li>
                    </ol>
                    <p className="text-gray-700 dark:text-gray-300 mt-4">
                        For complete data deletion requests, contact us via our <a href="https://discord.gg/MyneuXgVRr" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">Support Server</a>.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Children&apos;s Privacy</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Captain Hook is not directed at individuals under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent and believe your child has provided personal information, please contact us.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Changes to This Policy</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        We may update this Privacy Policy from time to time. We will notify users of significant changes through our support server or bot announcements.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Your Rights</h2>
                    <p className="text-gray-700 dark:text-gray-300">You have the right to:</p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>Know what data we collect about you</li>
                        <li>Request deletion of your data</li>
                        <li>Opt-out of data collection by not using the bot</li>
                        <li>Contact us with privacy concerns</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Contact Us</h2>
                    <p className="text-gray-700 dark:text-gray-300">If you have questions about this Privacy Policy, please contact us:</p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                        <li><strong>Discord Support Server</strong>: <a href="https://discord.gg/MyneuXgVRr" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">https://discord.gg/MyneuXgVRr</a></li>
                        <li><strong>Bot Owner</strong>: Hakashi Katake</li>
                    </ul>
                </section>

                <hr className="border-gray-200 dark:border-gray-700" />

                <p className="text-gray-600 dark:text-gray-400 italic text-center">
                    By using Captain Hook, you acknowledge that you have read and understood this Privacy Policy.
                </p>
            </div>
        </div>
    )
}
