import { Video } from "types/types";

const initialState = {
    movies: [] as Video[],
    selectedMovie: {} as Video,
    activeUserId: "",
};

export default initialState;
