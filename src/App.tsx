import NavBar from "./components/nav-bar.tsx";
import {useEffect, useRef, useState} from "react";
import {GoPlus} from "react-icons/go";
import {TbWorld} from "react-icons/tb";

function App() {
    const leftMin = (w: number) => {
        console.log(w)
        return w * 90 / 419;
    }
    const leftMax = (w: number) => {
        return w / 3;
    }
    const parentRef = useRef<HTMLDivElement>(null);
    const [parentWidth, setParentWidth] = useState(0);
    const [width, setWidth] = useState(leftMin(parentWidth));
    const [isDragging, setIsDragging] = useState(false);
    const isResizing = useRef(false);
    const handleMouseMove = (e: MouseEvent) => {
        if (isResizing.current) {
            const newWidth = e.clientX;
            if (newWidth > leftMin(parentWidth) && newWidth < leftMax(parentWidth)) {
                setWidth(newWidth);
            }
        }
    }

    const handleMouseUp = () => {
        setIsDragging(false);
        isResizing.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    }

    const handleMouseDown = () => {
        setIsDragging(true);
        isResizing.current = true;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    }
    useEffect(() => {
        if (parentRef.current) {
            const width = parentRef.current.offsetWidth;
            setParentWidth(width);
        }
    }, []);

    return (
        <NavBar>
            <div ref={parentRef} className="w-full h-full flex bg-black">
                {/*left*/}
                <div className={`h-full bg-neutral-900 rounded-lg ml-2 mb-2`}
                     style={{width: `${width}px`, minWidth: `${leftMin(parentWidth)}px`}}>
                    {/*header*/}
                    <header className="text-white font-bold text-md flex py-2 px-4 items-center">
                        Your Library
                        <button
                            className={"hover:cursor-pointer ml-auto transition-all rounded-full hover:bg-neutral-800 p-2"}>
                            <GoPlus className={"size-5 text-gray-400"}></GoPlus>
                        </button>
                    </header>
                    {/*body*/}
                    <div className="w-full h-4/7 overflow-auto">
                        {/*tab1*/}
                        <div className="mx-2 mt-5 rounded-lg h-auto bg-neutral-800 p-3">
                            <div className="font-bold text-md text-white">
                                Create your first playlist
                            </div>
                            <div className="text-white text-sm mt-2 mb-4">
                                It's easy, we'll help you
                            </div>
                            <div>
                                <button className="text-md font-bold text-black bg-white rounded-full px-4 py-1 hover:cursor-pointer transition-colors hover:opacity-90">
                                    Create playlist
                                </button>
                            </div>
                        </div>
                        {/*tab2*/}
                        <div className="mx-2 mt-5 rounded-lg h-auto bg-neutral-800 p-3">
                            <div className="font-bold text-md text-white">
                                Let's find some podcast to follow
                            </div>
                            <div className="text-white text-sm mt-2 mb-4">
                                We'll keep you updated on new episodes
                            </div>
                            <div>
                                <button className="text-md font-bold text-black bg-white rounded-full px-4 py-1 hover:cursor-pointer transition-colors hover:opacity-90">
                                    Browse podcasts
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*footer*/}
                    <footer className="w-full h-1/3 pt-10">
                        {/*some page footer*/}
                        <div className="text-neutral-400 flex flex-wrap gap-3 py-2 px-5 text-xs">
                            <div>
                                <a className="hover:cursor-pointer">Legal</a>
                            </div>
                            <div>
                                <a className="hover:cursor-pointer">Safe & Privacy Center</a>
                            </div>
                            <div>
                                <a className="hover:cursor-pointer">Privacy Policy</a>
                            </div>
                            <div>
                                <a className="hover:cursor-pointer">Cookies</a>
                            </div>
                            <div>
                                <a className="hover:cursor-pointer">About Ads</a>
                            </div>
                            <div>
                                <a className="hover:cursor-pointer">Accessibility</a>
                            </div>

                        </div>
                        <div className="text-white flex flex-wrap gap-3 py-2 px-5 text-xs">
                            <a className="hover:cursor-pointer hover:underline transition-all">Cookies</a>
                        </div>
                        {/*languages*/}
                        <div className="flex pl-5 pt-3">
                            <button className="flex items-center gap-1 transition-all text-white text-xs font-bold bg-black border-gray-500 hover:border-white hover:cursor-pointer border-2 rounded-full px-4 py-1">
                                <TbWorld className="text-white font-bold size-5 mt-0.5 transition-all"/>
                                English
                            </button>
                        </div>
                    </footer>
                </div>
                {/*resizable*/}
                <div
                    onMouseDown={handleMouseDown}
                    className={`w-3 hover:cursor-grab flex justify-center items-center group py-2`}
                >
                    <div
                        className={`h-full w-0.25 group-hover:bg-neutral-500 rounded-sm ${isDragging ? "bg-white" : ""}`}></div>
                </div>
                {/*right*/}
                <div className={`h-100  bg-neutral-900 w-full rounded-lg mr-2`}>

                </div>
            </div>
        </NavBar>);
}

export default App
