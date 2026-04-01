import { motion } from "framer-motion";

export default function HomePage({ onStart }) {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-green-100 bg-white shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,113,133,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.12),_transparent_30%)]" />

            <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-28">

                <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, duration: 0.55 }}
                    className="mt-6 text-5xl font-bold tracking-tight text-green-600 md:text-7xl"
                >
                    A little website I made just for you sweetheart :)
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.28, duration: 0.55 }}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl"
                >
                    I wanted to make something more personal, so I turned some of my favourite
                    memories and feelings into a small interactive page for your birthday. I hope you like it hehe :3
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.38, duration: 0.55 }}
                    className="mt-10"
                >
                    <button
                        onClick={onStart}
                        className="rounded-2xl bg-green-500 px-7 py-3 text-base font-semibold text-white shadow-lg"
                    >
                        Begin Our Story
                    </button>
                </motion.div>
            </div>
        </section>
    );
}