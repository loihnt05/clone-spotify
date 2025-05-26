import {podcastList} from "../assets/poscast-list.ts";

function Podcast() {
    return (
        <div className="flex justify-center w-full items-center h-full bg-gray-300">
            {
                podcastList.map((podcast) => {
                    return (
                        <div
                            className="flex flex-col rounded-lg space-2 px-4 pt-4 pb-8 transition-all hover:bg-gray-900 hover:cursor-pointer">
                            <div className="w-full flex justify-center">
                                <img className="w-[155px] h-[155px] rounded-lg"
                                     src={podcast.image}
                                     alt="image not found"/>

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
                })
            }
        </div>
    );
}

export default Podcast;