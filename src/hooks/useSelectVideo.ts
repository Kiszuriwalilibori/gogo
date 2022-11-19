import { useCallback, useEffect, useState } from "react";
import { Video } from "types";
import useDispatchAction from "./useDispatchAction";

const useSelectMovie = () => {
    const [selectedVideo, setSelected] = useState<any>({});
    const { setSelectedMovie } = useDispatchAction();

    const selectVideo = useCallback((movie: Video) => {
        setSelected(movie);
    }, []);
    useEffect(() => {
        selectedVideo && setSelectedMovie(selectedVideo);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedVideo]);
    return { selectedVideo, selectVideo };
};

export default useSelectMovie;
