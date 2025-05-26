import {FaSpotify} from "react-icons/fa";
import {GoHomeFill} from "react-icons/go";
import {IoIosSearch} from "react-icons/io";
import {TiFolderOpen} from "react-icons/ti";
import {GrInstallOption} from "react-icons/gr";
import React, {useRef} from "react";

function NavBar({children}: { children: React.ReactNode }) {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleDivFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    return (
        <div className="w-full h-full flex flex-col">
            <div className="bg-black flex w-full sticky top-0 items-stretch">
                {/*spotify*/}
                <div className="flex p-5 hover:cursor-pointer">
                    <a className="flex justify-center items-center" href="#">
                        <FaSpotify className="text-white text-3xl" title="Spotify"/>
                    </a>
                </div>

                {/*search*/}
                <div className="flex justify-center gap-2 pr-10 ">
                    <div className="items-center flex ">
                        <button className="hover:cursor-pointer bg-neutral-900 p-2 rounded-full flex
                        hover:bg-neutral-700 transition-colors">
                            <GoHomeFill className="text-white text-3xl" title="Home"/>
                        </button>
                    </div>

                    <div className="flex items-center group ">
                        <div tabIndex={0} className="flex bg-neutral-900 rounded-full transition-all
                        group-hover:bg-neutral-700 border-3 group-hover:border-gray-700
                         border-transparent focus-within:border-white focus-within:border-3
                         hover:cursor-text"
                             onFocus={handleDivFocus}>
                            <div className="items-center flex">
                                <button className="hover:cursor-pointer p-2 ">
                                    <IoIosSearch className=" text-gray-400 text-3xl transition-all
                                    group-hover:text-gray-300 group-focus-within:text-white" title="Search"/>
                                </button>
                            </div>
                            <div className="flex items-center lg:w-100">
                                <input ref={inputRef} className="focus:outline-none focus: text-white
                                bg-neutral-900 w-full transition-all group-hover:bg-neutral-700"
                                       type="text"
                                       placeholder="What do you want to play?"/>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <button className="border-s-1 px-2 border-gray-400 transition-all
                                    hover:cursor-pointer">
                                        <TiFolderOpen className="text-gray-400 transition-all text-2xl "
                                                      title="Browse"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*login*/}
                <div className="flex justify-center gap-2">
                    <button
                        className="text-zinc-400 font-bold hover:cursor-pointer transition-colors
                        hover:text-white">Premium
                    </button>
                    <button
                        className="text-zinc-400 font-bold hover:cursor-pointer transition-colors
                        hover:text-white">Support
                    </button>
                    <button
                        className="text-zinc-400 font-bold hover:cursor-pointer transition-colors
                        hover:text-white pr-3">Download
                    </button>
                    <div className="flex items-center">
                        <div className="border-s-1 border-zinc-300 h-2/5"></div>
                    </div>
                    <div className="flex items-center px-5">
                        <div className="flex justify-center">
                            <button
                                className="flex items-center gap-1 text-zinc-400 group transition-colors font-semibold hover:cursor-pointer hover:text-white">
                            <GrInstallOption
                                className="font-semibold mt-1 text-zinc-400 group-hover:text-white transition-colors"/>
                                Install App
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center gap-2">
                        <button
                            className="text-gray-400 font-bold hover:text-white
                            transition-colors hover:cursor-pointer pr-2">
                            Sign up
                        </button>
                        <div className="flex items-center">
                            <button className="text-black font-bold px-8 py-3 bg-white
                            rounded-full flex hover:cursor-pointer hover:opacity-95">Log in
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="h-full w-full">
                {children}
            </div>
        </div>

    );
}

export default NavBar;