import React, { useRef, useState } from "react";

export default function Resizable() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [leftWidth, setLeftWidth] = useState(300); // default width

    const isDragging = useRef(false);

    const handleMouseDown = () => {
        isDragging.current = true;
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging.current || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const newLeftWidth = e.clientX - containerRect.left;
        const minWidth = 270;
        const maxWidth = containerRect.width - minWidth;

        setLeftWidth(Math.min(Math.max(newLeftWidth, minWidth), maxWidth));
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    React.useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <div ref={containerRef} className="flex w-full h-screen bg-gray-100">
            <div className="bg-white h-full" style={{ width: leftWidth }}>
                <div className="p-4">Left Panel</div>
            </div>

            <div
                onMouseDown={handleMouseDown}
                className="w-2 cursor-col-resize bg-gray-400 hover:bg-gray-600 transition"
            />

            <div className="flex-1 bg-gray-200">
                <div className="p-4">Right Panel</div>
            </div>
        </div>
    );
}
