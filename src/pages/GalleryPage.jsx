import { motion } from "framer-motion";
import { galleryPhotos } from "../data/memories";

export default function GalleryPage() {
    return (
        <section className="rounded-[2rem] border border-green-100 bg-white px-6 py-12 shadow-2xl md:px-10 md:py-16">
            <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
                    Favorite photos
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-5xl">A Small Gallery of Us</h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {galleryPhotos.map((photo, index) => (
                    <motion.div
                        key={photo + index}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: index * 0.06 }}
                        className="overflow-hidden rounded-[1.75rem] border border-green-100 bg-green-50 p-3 shadow-lg"
                    >
                        <img
                            src={photo}
                            alt={`Gallery memory ${index + 1}`}
                            className="h-72 w-full rounded-[1.25rem] object-cover"
                        />
                        <div className="p-3">
                            <p className="text-base font-semibold text-green-600">Memory {index + 1}</p>
                            <p className="mt-1 text-sm leading-7 text-slate-600">
                                Add your own caption or a tiny note about this photo.
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}