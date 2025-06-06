import {type PodCast} from "../assets/podcast-source.ts";
import { FaPlay } from "react-icons/fa";

function Podcast({podcast}: { podcast: PodCast }) {
    return (
        <div
            className="podcast-card flex flex-col rounded-lg px-3 pt-3 pb-8 transition-all hover:bg-neutral-800 hover:cursor-pointer">
            <div className="w-[155px] h-[155px] object-contain flex justify-center relative">
                <img className=" rounded-lg "
                     src={podcast.image}
                     alt="image not found">
                </img>
                <div className="play-icon hidden transition-all justify-center items-center absolute bottom-0 right-0 bg-green-400 rounded-full w-9 h-9 mb-1 mr-1 ">
                    <FaPlay className="text-black ml-0.5 size-4" />
                </div>
            </div>
            <div className="flex flex-col gap-1 mt-2 select-none">
                <div className="text-white font-bold justify-self-start w-full tracking-tight">
                    {podcast.name}
                </div>
                <div
                    className="text-xs text-gray-400 font-semibold justify-self-start w-full tracking-tight">
                    {podcast.poem}
                </div>
            </div>
        </div>
    );
}

export default Podcast;