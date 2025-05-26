import {podcastList} from "../assets/podcast-source.ts";
import Podcast from "./podcast.tsx";

function PodcastList() {
    return (
        <div className="flex flex-col gap-2 bg-black">
        {/*header*/}
            <div className="flex ">
                <div className="font-bold text-white transition-all text-2xl hover:underline hover:cursor-pointer select-none">
                    Trending songs
                </div>
                <div className="ml-auto text-neutral-500 hover:underline transition-all hover:cursor-pointer font-bold
                                select-none text-sm flex items-center tracking-tight pr-5 ">
                    Show all
                </div>
            </div>
            <div className="flex">
                {
                    podcastList.map((podcast, index: number) => {
                        return (
                            <div key={index}>
                                <Podcast podcast={podcast}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default PodcastList;