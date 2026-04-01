import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

export default function Navbar({
                                   pages,
                                   currentPage,
                                   setCurrentPage,
                                   goNext,
                                   goPrev,
                               }) {
    return (
        <div className="sticky top-0 z-50 border-b border-rose-100 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
                <div className="flex items-center gap-2 text-green-600">
                    <Heart className="h-5 w-5 fill-current" />
                    <span className="text-sm font-semibold md:text-base">
            A Birthday Page For You
          </span>
                </div>

                <div className="hidden gap-2 md:flex">
                    {pages.map((page) => (
                        <button
                            key={page.id}
                            onClick={() => setCurrentPage(page.id)}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                                currentPage === page.id
                                    ? "bg-green-500 text-white shadow-lg"
                                    : "bg-white text-slate-600 shadow-sm hover:-translate-y-0.5 hover:bg-rose-50"
                            }`}
                        >
                            {page.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={goPrev}
                        aria-label="Go to previous page"
                        className="rounded-full border border-green-200 bg-white p-2 text-green-500 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-green-50 hover:shadow-md active:translate-y-0 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-300"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>

                    <button
                        onClick={goNext}
                        aria-label="Go to next page"
                        className="rounded-full border border-green-200 bg-white p-2 text-green-500 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-green-50 hover:shadow-md active:translate-y-0 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-300"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}