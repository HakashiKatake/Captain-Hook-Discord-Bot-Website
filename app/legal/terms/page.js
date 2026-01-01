export default function Terms() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-black mb-4 text-primary dark:text-blue-400">Terms of Service for Captain Hook</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8"><strong>Last Updated:</strong> January 1, 2026</p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">1. Acceptance of Terms</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        By inviting Captain Hook (&quot;the Bot&quot;) to your Discord server or using any of its features, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Bot.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">2. Description of Service</h2>
                    <p className="text-gray-700 dark:text-gray-300">Captain Hook is a multi-purpose Discord bot that provides:</p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Fun and entertainment commands</li>
                        <li>Moderation tools</li>
                        <li>Utility features</li>
                        <li>Voice channel interactions</li>
                        <li>Economy system with virtual currency</li>
                        <li>Image manipulation</li>
                        <li>Games and interactive features</li>
                        <li>Anime information lookup</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">3. User Eligibility</h2>
                    <p className="text-gray-700 dark:text-gray-300">To use Captain Hook, you must:</p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Be at least 13 years of age (or the minimum age required by Discord in your country)</li>
                        <li>Have a valid Discord account in good standing</li>
                        <li>Comply with Discord&apos;s Terms of Service and Community Guidelines</li>
                        <li>Have appropriate permissions in servers where you use moderation features</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">4. Acceptable Use</h2>

                    <h3 className="text-xl font-semibold text-black dark:text-white mt-4">You AGREE to:</h3>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Use the Bot in compliance with Discord&apos;s Terms of Service</li>
                        <li>Use moderation features responsibly and ethically</li>
                        <li>Report bugs and issues through proper channels</li>
                        <li>Respect other users and communities</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-black dark:text-white mt-4">You AGREE NOT to:</h3>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Use the Bot for illegal purposes</li>
                        <li>Exploit bugs, glitches, or vulnerabilities</li>
                        <li>Attempt to crash, overload, or disrupt the Bot</li>
                        <li>Use the Bot to harass, spam, or harm others</li>
                        <li>Circumvent rate limits or cooldowns</li>
                        <li>Use automated tools to interact with the Bot</li>
                        <li>Impersonate the Bot or its developers</li>
                        <li>Resell, redistribute, or commercialize the Bot</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">5. Command Usage</h2>

                    <h3 className="text-xl font-semibold text-black dark:text-white mt-4">General Commands</h3>
                    <p className="text-gray-700 dark:text-gray-300">All users may use general commands (fun, games, utility) in any server where the Bot is present.</p>

                    <h3 className="text-xl font-semibold text-black dark:text-white mt-4">Moderation Commands</h3>
                    <p className="text-gray-700 dark:text-gray-300">Moderation commands require appropriate Discord permissions:</p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                        <li><code className="bg-gray-100 dark:bg-zinc-700 px-1 rounded">$ban</code>, <code className="bg-gray-100 dark:bg-zinc-700 px-1 rounded">$mute</code> - Requires Ban Members / Moderate Members permission</li>
                        <li><code className="bg-gray-100 dark:bg-zinc-700 px-1 rounded">$purge</code>, <code className="bg-gray-100 dark:bg-zinc-700 px-1 rounded">$boom</code> - Requires Manage Messages permission</li>
                        <li><code className="bg-gray-100 dark:bg-zinc-700 px-1 rounded">$lock</code>, <code className="bg-gray-100 dark:bg-zinc-700 px-1 rounded">$unlock</code> - Requires Manage Channels permission</li>
                        <li><code className="bg-gray-100 dark:bg-zinc-700 px-1 rounded">$setdelay</code> - Requires Manage Channels permission</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-black dark:text-white mt-4">Owner-Only Commands</h3>
                    <p className="text-gray-700 dark:text-gray-300">Some commands are restricted to the Bot owner for administrative purposes.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">6. Virtual Economy</h2>
                    <p className="text-gray-700 dark:text-gray-300">Captain Hook features a virtual currency system:</p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Virtual currency has <strong>NO real-world value</strong></li>
                        <li>Currency cannot be exchanged for real money</li>
                        <li>The economy is for entertainment purposes only</li>
                        <li>We reserve the right to reset or modify economy data</li>
                        <li>Abuse of the economy system may result in restrictions</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">7. Content Disclaimer</h2>

                    <h3 className="text-xl font-semibold text-black dark:text-white mt-4">User-Generated Content</h3>
                    <p className="text-gray-700 dark:text-gray-300">The Bot may display content based on user input. We are not responsible for:</p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Inappropriate content created by users</li>
                        <li>Content from third-party APIs (memes, GIFs, etc.)</li>
                        <li>Messages or interactions between users</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-black dark:text-white mt-4">Third-Party APIs</h3>
                    <p className="text-gray-700 dark:text-gray-300">Some features use external services:</p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Anime data from Jikan API</li>
                        <li>Random images from various public APIs</li>
                        <li>We do not guarantee the availability or content of these services</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">8. Limitation of Liability</h2>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">THE BOT IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND.</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">We are NOT liable for:</p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Server downtime or unavailability</li>
                        <li>Data loss or corruption</li>
                        <li>Actions taken based on Bot information</li>
                        <li>Damages resulting from Bot usage</li>
                        <li>Third-party API failures</li>
                        <li>Discord platform changes</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">9. Service Modifications</h2>
                    <p className="text-gray-700 dark:text-gray-300">We reserve the right to:</p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Modify or discontinue features without notice</li>
                        <li>Update these Terms at any time</li>
                        <li>Limit or restrict access to certain features</li>
                        <li>Change command syntax or behavior</li>
                        <li>Reset data for maintenance purposes</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">10. Termination</h2>
                    <p className="text-gray-700 dark:text-gray-300">We may terminate or restrict your access to Captain Hook if:</p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                        <li>You violate these Terms</li>
                        <li>You abuse the Bot or its features</li>
                        <li>You are banned from our support server</li>
                        <li>Required by law or Discord</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">11. Intellectual Property</h2>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Captain Hook and its code are owned by Hakashi Katake</li>
                        <li>You may not copy, modify, or redistribute the Bot</li>
                        <li>User-submitted content remains property of the user</li>
                        <li>All trademarks belong to their respective owners</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">12. Indemnification</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        You agree to indemnify and hold harmless the Bot developers from any claims, damages, or expenses arising from your use of the Bot or violation of these Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">13. Governing Law</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        These Terms are governed by applicable laws. Disputes will be resolved through our support server when possible.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">14. Changes to Terms</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        We may update these Terms periodically. Continued use of the Bot after changes constitutes acceptance of the new Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">15. Severability</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        If any provision of these Terms is found unenforceable, the remaining provisions will continue in effect.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-black dark:text-white">16. Contact Information</h2>
                    <p className="text-gray-700 dark:text-gray-300">For questions about these Terms:</p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                        <li><strong>Discord Support Server</strong>: <a href="https://discord.gg/MyneuXgVRr" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">https://discord.gg/MyneuXgVRr</a></li>
                        <li><strong>Bot Owner</strong>: Hakashi Katake</li>
                    </ul>
                </section>

                <hr className="border-gray-200 dark:border-gray-700" />

                <section className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg border-2 border-black dark:border-gray-600">
                    <h2 className="text-xl font-bold text-black dark:text-white mb-4">Quick Summary</h2>
                    <div className="text-gray-700 dark:text-gray-300 space-y-2">
                        <p>✅ Use the Bot for fun and moderation</p>
                        <p>✅ Follow Discord&apos;s rules</p>
                        <p>✅ Report bugs responsibly</p>
                        <p>❌ Don&apos;t abuse, spam, or exploit</p>
                        <p>❌ Don&apos;t use for illegal purposes</p>
                        <p>❌ Don&apos;t harass other users</p>
                    </div>
                </section>

                <hr className="border-gray-200 dark:border-gray-700" />

                <p className="text-gray-600 dark:text-gray-400 italic text-center">
                    By using Captain Hook, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
            </div>
        </div>
    )
}
