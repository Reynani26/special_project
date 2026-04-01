import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AccessPage from "./pages/AccessPage";
import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";
import GalleryPage from "./pages/GalleryPage";
import LetterPage from "./pages/LetterPage";
import froggies from "./assets/frogs.png";

const pages = [
    { id: "home", label: "Home" },
    { id: "story", label: "Our Story" },
    { id: "gallery", label: "Gallery" },
    { id: "letter", label: "My Letter" },
];

export default function App() {
    const [currentPage, setCurrentPage] = useState("home");
    const [enteredName, setEnteredName] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(() => {
        if (typeof window === "undefined") return false;
        return localStorage.getItem("birthdayUnlocked") === "true";
    });
    const [showError, setShowError] = useState(false);

    const allowedName = ["CJ", "Sweetheart"];

    const currentIndex = pages.findIndex((page) => page.id === currentPage);

    const goNext = () => {
        const nextIndex = (currentIndex + 1) % pages.length;
        setCurrentPage(pages[nextIndex].id);
    };

    const goPrev = () => {
        const prevIndex = (currentIndex - 1 + pages.length) % pages.length;
        setCurrentPage(pages[prevIndex].id);
    };



    const handleUnlock = (e) => {
        e.preventDefault();

        const isValid = allowedName.some(
            (name) => enteredName.trim().toLowerCase() === name.toLowerCase()
        );

        if (isValid) {
            setIsUnlocked(true);
            setShowError(false);
            localStorage.setItem("birthdayUnlocked", "true");
        } else {
            setShowError(true);
        }
    };

    const handleLockAgain = () => {
        setIsUnlocked(false);
        localStorage.removeItem("birthdayUnlocked");
    };

    if (!isUnlocked) {
        return (
            <div className="min-h-screen relative text-slate-800 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-rose-300/30 blur-[120px]" />
                    <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-pink-300/30 blur-[100px]" />
                </div>
                <div className="mx-auto max-w-6xl">
                    <PageWrapper>
                        <AccessPage
                            enteredName={enteredName}
                            setEnteredName={setEnteredName}
                            handleUnlock={handleUnlock}
                            showError={showError}
                        />
                    </PageWrapper>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen relative text-slate-800 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-rose-300/30 blur-[120px]" />
                <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-pink-300/30 blur-[100px]" />
            </div>

            <Navbar
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                goNext={goNext}
                goPrev={goPrev}
            />

            <img src={froggies} alt="Frog Couple" className="mx-auto" />

            <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
                <AnimatePresence mode="wait">
                    {currentPage === "home" && (
                        <PageWrapper key="home">
                            <HomePage onStart={() => setCurrentPage("story")} />
                        </PageWrapper>
                    )}

                    {currentPage === "story" && (
                        <PageWrapper key="story">
                            <StoryPage />
                        </PageWrapper>
                    )}

                    {currentPage === "gallery" && (
                        <PageWrapper key="gallery">
                            <GalleryPage />
                        </PageWrapper>
                    )}

                    {currentPage === "letter" && (
                        <PageWrapper key="letter">
                            <LetterPage />
                        </PageWrapper>
                    )}
                </AnimatePresence>

            </div>
            <div className="text-center">
                <button
                    onClick={handleLockAgain}
                    className="rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-white text-center"
                >
                    Reset back to access page
                </button>
            </div>
        </div>
    );
}