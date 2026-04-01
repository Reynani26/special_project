import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar  from "../src/components/Navbar.jsx";
import PageWrapper from "../src/components/PageWrapper.jsx";
import AccessPage from "../src/pages/AccessPage.jsx";
import HomePage from "../src/pages/HomePage.jsx";
import StoryPage from "../src/pages/StoryPage.jsx";
import GalleryPage from "../src/pages/GalleryPage.jsx";
import LetterPage from "../src/pages/LetterPage.jsx";
import froggies from "../src/assets/frogs.png";

const pages = [
    { id: "home", label: "Home" },
    { id: "story", label: "Our Story" },
    { id: "gallery", label: "Gallery" },
    { id: "letter", label: "My Letter" },
];

export default function App() {
    const [currentPage, setCurrentPage] = useState("home");
    const [enteredName, setEnteredName] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(false);
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

        allowedName.forEach((e) => {
            if (enteredName.trim().toLowerCase() === e.toLowerCase()) {
                setIsUnlocked(true);
                setShowError(false);
            }
            else {
                setShowError(true);
            }
        });
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
        </div>
    );
}