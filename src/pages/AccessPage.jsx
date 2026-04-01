export default function AccessPage({
                                       enteredName,
                                       setEnteredName,
                                       handleUnlock,
                                       showError,
                                   }) {

    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-rose-100 bg-white shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,113,133,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.12),_transparent_30%)]" />

            <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-28">
                <p className="inline-flex rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-medium text-green-500 shadow-sm">
                    Private birthday page
                </p>

                <h1 className="mt-6 text-4xl font-bold tracking-tight text-green-600 md:text-6xl">
                    A little surprise awaits
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                    This page was made for one special person. Enter your name to continue.
                </p>

                <form
                    onSubmit={handleUnlock}
                    className="mx-auto mt-10 max-w-xl rounded-[1.75rem] border border-green-100 bg-green-50 p-5 text-left shadow-inner md:p-6"
                >
                    <label
                        htmlFor="partner-name"
                        className="block text-sm font-semibold uppercase tracking-[0.22em] text-green-400"
                    >
                        Your name
                    </label>

                    <input
                        id="partner-name"
                        type="text"
                        value={enteredName}
                        onChange={(e) => setEnteredName(e.target.value)}
                        placeholder="Enter your name"
                        className="mt-3 w-full rounded-2xl border border-green-200 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-green-300 focus:ring-2 focus:ring-green-200"
                    />

                    {showError && (
                        <p className="mt-3 text-sm text-green-500">
                            Ain't no way that's my special person's name big dog
                        </p>
                    )}

                    <div className="mt-5 flex flex-wrap gap-3">
                        <button
                            type="submit"
                            className="rounded-2xl bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                        >
                            Unlock the page
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}