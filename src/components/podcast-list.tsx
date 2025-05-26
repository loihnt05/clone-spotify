import {podcastList} from "../assets/podcast-source.ts";
import Podcast from "./podcast.tsx";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";

function PodcastList() {
    return (
        <div className={`flex flex-col gap-2`}>
            {/*header*/}
            <div className="flex w-full">
                <div
                    className="tracking-tight pl-3 font-bold text-white transition-all text-2xl hover:underline hover:cursor-pointer select-none">
                    Trending songs
                </div>
                <div className="ml-auto text-neutral-500 hover:underline transition-all hover:cursor-pointer font-bold
                                select-none text-sm flex items-center tracking-tight pr-5 ">
                    Show all
                </div>
            </div>
            <div className="relative group">
                <div>
                    <div className="flex overflow-x-auto w-full scrollbar-hide snap-x ">
                        {
                            podcastList.map((podcast, index: number) => {
                                return (
                                    <div key={index} className="shrink-0 snap-start scroll-ml-8">
                                        <Podcast podcast={podcast}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="absolute top-3/8 -left-3 items-center justify-center group-hover:flex hidden">
                    <button className="text-white bg-neutral-900 rounded-full size-9
                                        flex items-center justify-center mr-2 hover:bg-neutral-800 hover:cursor-pointer
                    ">
                        <SlArrowLeft className='text-white rounded-full size-4 mr-0.5'/>
                    </button>
                </div>
                <div className="absolute top-3/8 -right-5 items-center justify-center group-hover:flex hidden">
                    <button className="text-white bg-neutral-900 rounded-full size-9
                                        flex items-center justify-center mr-2 hover:bg-neutral-800 hover:cursor-pointer
                    ">
                        <SlArrowRight className='text-white rounded-full size-4 mr-0.5'/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PodcastList;