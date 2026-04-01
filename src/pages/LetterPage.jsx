import { motion } from "framer-motion";

export default function LetterPage() {
    return (
        <section className="rounded-[2rem] border border-green-100 bg-white px-6 py-12 shadow-2xl md:px-10 md:py-16">
            <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
                    My note to you
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-5xl">Happy Birthday sweetheart </h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55 }}
                className="mx-auto mt-10 max-w-3xl rounded-[2rem] bg-gradient-to-br from-rose-50 to-pink-50 p-8 shadow-inner md:p-10"
            >
                <div className="space-y-5 text-slate-700 md:text-lg">
                    <p>
                        To the person I admire so deeply,
                    </p>
                    <p className="leading-8">
                        Happy birthday sweetheart! I am so grateful I get to spend another year celebrating your birthday
                        along side you. You have become someone so important in my life, I am grateful that I am the lucky person
                        that gets to navigate life with you. I genuinely am happy that I get to spend my life with you.
                        Thank you for being so patient and kind with me, I'm sure at times I can be
                        a bit much, but I really appreciate the way you treat me. I also appreciate your silly goofy nature, I love how you always
                        mention that you're just a "silly goofy guy", because you truly are and never fail to put a smile on my face.
                        I hope to spend more years celebrating your birthday, and I look forward to spending
                        the rest of our lives together :)
                    </p>
                </div>

                <div className="mt-8 rounded-[1.5rem] bg-white/80 p-5 shadow-sm">
                    <p className="text-lg font-semibold text-green-600">With love,</p>
                    <p className="mt-2 text-slate-600">Mahal 💙</p>
                </div>
            </motion.div>
        </section>
    );
}