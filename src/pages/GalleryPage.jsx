import { motion } from "framer-motion";
import { galleryItems } from "../data/memories";

export default function GalleryPage() {
    return (
        <section className="rounded-[2rem] border border-rose-100 bg-white px-6 py-12 shadow-2xl md:px-10 md:py-16">
            <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-400">
                    Favorite moments
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                    A Small Gallery of Us
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                    Photos and videos of some of my favorite memories with you.
                </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {galleryItems.map((item, index) => (
                    <motion.div
                        key={item.src + index}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: index * 0.06 }}
                        className="overflow-hidden rounded-[1.75rem] border border-rose-100 bg-rose-50 p-3 shadow-lg"
                    >
                        {item.type === "image" ? (
                            <img
                                src={item.src}
                                alt={item.caption}
                                className="h-72 w-full rounded-[1.25rem] object-cover"
                            />
                        ) : (
                            <video
                                src={item.src}
                                controls
                                className="h-72 w-full rounded-[1.25rem] object-cover bg-black"
                            />
                        )}

                        <div className="p-3">
                            <p className="text-base font-semibold text-green-600">
                                Memory {index + 1}
                            </p>
                            <p className="mt-1 text-sm leading-7 text-slate-600">
                                {item.caption}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}