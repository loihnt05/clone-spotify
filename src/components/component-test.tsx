import React, { useRef, useState } from "react";

const ResizablePanel: React.FC = () => {
    const [width, setWidth] = useState(300);
    const isResizing = useRef(false);

    const handleMouseDown = () => {
        isResizing.current = true;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isResizing.current) {
            const newWidth = e.clientX;
            if (newWidth > 150 && newWidth < 600) {
                setWidth(newWidth);
            }
        }
    };

    const handleMouseUp = () => {
        isResizing.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    return (
        <div className="flex h-screen w-full">
            <div
                className="bg-gray-100 p-4"
                style={{ width: `${width}px`, minWidth: "150px" }}
            >
                <p>Resizable Panel</p>
            </div>
            {/* Divider */}
            <div
                onMouseDown={handleMouseDown}
                className="w-1 cursor-col-resize bg-gray-400 hover:bg-gray-600"
            />
            {/* Main Content */}
            <div className="flex-1 bg-white p-4">
                <p>Main Content Area</p>
            </div>
        </div>
    );
};

export default ResizablePanel;
