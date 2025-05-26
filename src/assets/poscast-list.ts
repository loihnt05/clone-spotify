import { v4 } from 'uuid';
export type PodCast = {
    id: string,
    image: string,
    name?: string,
    poem: string,
}
export const podcastList: PodCast[] = [
    {
        id: v4(),
        image: "https://i.scdn.co/image/ab67616d00001e02794744c57c9f35db88249842",
        name: "m-tp M-TP",
        poem: "Sơn tùng M-TP",
    },
];