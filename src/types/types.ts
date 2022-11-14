import { RootStateType } from "components/AppProvider/AppProvider";

export type PathKeys = "youtube" | "landing";

interface Video {
    id: { videoId: string };
    snippet: { title: string; description: string; thumbnails: { medium: { url: string } } };
}

export type { RootStateType, Video };
