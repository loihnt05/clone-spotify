import React, { useRef } from "react";

const HorizontalScroll: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
    };

    return (
        <div className="relative w-full">
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-400 text-black p-2 rounded-full shadow"
            >
                ◀
            </button>

            <div
                ref={scrollRef}
                className="overflow-x-auto scroll-smooth whitespace-nowrap px-8"
            >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div
                        key={n}
                        className="inline-block w-64 h-32 bg-blue-300 mx-2 rounded flex items-center justify-center text-xl font-semibold"
                    >
                        Box {n}
                    </div>
                ))}
            </div>

            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-400 text-black p-2 rounded-full shadow"
            >
                ▶
            </button>
        </div>
    );
};

export default HorizontalScroll;
