import NavBar from "./components/nav-bar.tsx";
import {useEffect, useRef, useState} from "react";
import {GoPlus} from "react-icons/go";
import {TbWorld} from "react-icons/tb";
import PodcastList from "./components/podcast-list.tsx";
import {footer} from "./assets/footer.ts";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

function App() {
    const leftMin = (w: number) => {
        return w * 90 / 419;
    }
    const leftMax = (w: number) => {
        return w * 2 / 5;
    }
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(300); // left

    const [isDragging, setIsDragging] = useState(false);

    const isResizing = useRef(false);

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || !isResizing.current || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const newWidth = e.clientX - containerRect.left;
        const minWidth = leftMin(containerRect.width);
        const maxWidth = leftMax(containerRect.width);

        setWidth(Math.min(Math.max(newWidth, minWidth), maxWidth));

    }

    const handleMouseUp = () => {
        setIsDragging(false);
        isResizing.current = false;
    }

    const handleMouseDown = () => {
        setIsDragging(true);
        isResizing.current = true;
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <NavBar>
            <div ref={containerRef} className="w-full h-full flex bg-black pb-4 ">
                {/*left*/}
                <div className={`h-full bg-neutral-950 rounded-lg ml-2 mb-2 select-none`}
                     style={{width: `${width}px`}}>
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
                        <div className="mx-2 mt-5 rounded-lg h-auto bg-neutral-900 p-5">
                            <div className="font-bold text-md text-white">
                                Create your first playlist
                            </div>
                            <div className="text-white text-sm mt-2 mb-4">
                                It's easy, we'll help you
                            </div>
                            <div>
                                <button
                                    className="text-md font-bold text-black bg-white rounded-full px-4 py-1 hover:cursor-pointer transition-colors hover:opacity-90">
                                    Create playlist
                                </button>
                            </div>
                        </div>
                        {/*tab2*/}
                        <div className="mx-2 mt-5 rounded-lg h-auto bg-neutral-900 p-5">
                            <div className="font-bold text-md text-white">
                                Let's find some podcast to follow
                            </div>
                            <div className="text-white text-sm mt-2 mb-4">
                                We'll keep you updated on new episodes
                            </div>
                            <div>
                                <button
                                    className="text-md font-bold text-black bg-white rounded-full px-4 py-1 hover:cursor-pointer transition-colors hover:opacity-90">
                                    Browse podcasts
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*footer*/}
                    <footer className="w-full h-1/3 pt-5">
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
                            <button
                                className="flex items-center gap-1 transition-all text-white text-xs font-bold bg-black border-gray-500 hover:border-white hover:cursor-pointer border-2 rounded-full px-4 py-1">
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
                <div className="flex-1 flex flex-col overflow-auto select-none p-6 rounded-lg mr-2
                bg-gradient-to-b from-[#202020] via-[#1a1a1a] to-neutral-950  scrollbar-hide
                ">
                    <PodcastList key='1'/>
                    <PodcastList key='2'/>
                    {/*footer*/}
                    <div className="mt-5">
                        <hr className="border-zinc-700 opacity-50"/>
                        <div className="grid grid-cols-5 gap-2 pt-13 pb-10">
                            {
                                footer.map((item, index) => {
                                    return (
                                        <div key={index} className="flex flex-col items-start gap-2">
                                            <div className="text-white font-bold tracking-tight text-sm">{item.header}</div>
                                            <div className="text-neutral-400 flex gap-2 flex-col">
                                                {
                                                item.contents.map((link, index) => {
                                                    return (
                                                        <div key={index} className="flex flex-col tracking-tight font-semibold text-xs hover:underline hover:cursor-pointer hover:text-white">
                                                            {link}
                                                        </div>
                                                    );
                                                })
                                            }</div>
                                        </div>
                                    );
                                })
                            }
                            <div className="flex flex-row items-start gap-3 ml-auto">

                                <div className="flex rounded-full bg-neutral-800 p-2 hover:cursor-pointer hover:opacity-90 transition-all">
                                    <button className="text-white hover:cursor-pointer">
                                        <FaInstagram/>
                                    </button>
                                </div>
                                <div className="flex rounded-full bg-neutral-800 p-2 hover:cursor-pointer hover:opacity-90 transition-all">
                                    <button className="text-white hover:cursor-pointer">
                                        <FaTwitter/>
                                    </button>
                                </div>
                                <div className="flex rounded-full bg-neutral-800 p-2 hover:cursor-pointer hover:opacity-90 transition-all">
                                    <button className="text-white hover:cursor-pointer">
                                        <FaFacebook/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <hr className="border-zinc-700 opacity-50"/>
                        <div className="text-neutral-400 text-xs pt-8 pb-10">
                            © 2025 Spotify AB
                        </div>
                    </div>
                </div>
            </div>
        </NavBar>);
}

export default App
