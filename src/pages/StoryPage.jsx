import { motion } from "framer-motion";
import { timelineMoments } from "../data/memories";

export default function StoryPage() {
    return (
        <section className="rounded-[2rem] border border-green-100 bg-white px-6 py-12 shadow-2xl md:px-10 md:py-16">
            <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
                    Welcome to our story
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-5xl">Our story so far</h2>
            </div>

            <div className="relative mt-14 space-y-12 before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-green-200 md:before:left-1/2">
                {timelineMoments.map((moment, index) => (
                    <motion.div
                        key={moment.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.55, delay: index * 0.08 }}
                        className="relative grid items-center gap-6 md:grid-cols-2 md:gap-12"
                    >
                        <div className={index % 2 === 0 ? "md:text-right md:pr-14" : "md:order-2 md:pl-14"}>
                            <div className="rounded-[1.75rem] border border-rose-100 bg-white p-7 shadow-xl">
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
                                    Chapter {index + 1}
                                </p>
                                <h3 className="mt-3 text-2xl font-bold text-green-600 md:text-3xl">
                                    {moment.title}
                                </h3>
                                <p className="mt-4 leading-8 text-slate-700 md:text-lg">{moment.text}</p>
                            </div>
                        </div>

                        <div className={index % 2 === 0 ? "md:pl-14" : "md:order-1 md:pr-14"}>
                            <div className="overflow-hidden rounded-[1.75rem] shadow-2xl">
                                <img
                                    src={moment.image}
                                    alt={moment.title}
                                    className="h-72 w-full object-cover transition duration-500 hover:scale-105 md:h-80"
                                />
                            </div>
                        </div>

                        <div className="absolute left-3 top-8 h-5 w-5 rounded-full border-4 border-white bg-green-400 shadow-lg md:left-1/2 md:-translate-x-1/2" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}