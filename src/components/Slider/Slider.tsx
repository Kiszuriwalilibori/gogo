import uuid from "react-uuid";
import isEqual from "lodash/isEqual";

import { useCallback, useEffect, useRef, useState } from "react";

import useDispatchAction from "hooks/useDispatchAction";
import Movie from "./Movie";
import ButtonPrevious from "./ButtonPrevious";

import { useBreakpoints } from "contexts/ViewPortProvider";
import { Video, SliderOrientation } from "types";
import ButtonNext from "./ButtonNext";

const movieHeight = 200;
const movieWidth = 180;

function calculateMoviesNumber(window: number, movieSize: number) {
    return Math.floor(window / movieSize);
}

function calculateNumberOfVideos(
    orientation: SliderOrientation,
    width: number | undefined,
    height: number | undefined
) {
    let count = 0;

    switch (orientation) {
        case "horizontal":
            if (width) count = calculateMoviesNumber(width - 40, movieWidth);
            break;
        case "vertical":
            if (height) count = calculateMoviesNumber(height as number, movieHeight);
            break;
        default:
            break;
    }

    return count;
}

interface Props {
    movies: Video[];
    renderCondition?: boolean;
}

const Slider = (props: Props) => {
    const { movies } = props;
    const { width, height, orientation: sliderOrientation } = useBreakpoints();
    const [selected, setSelected] = useState<any>({});
    const [moviesNumber, setMoviesNumber] = useState<number>(0);
    const [firstMovie, setFirstMovie] = useState<number>(0);
    const { setSelectedMovie } = useDispatchAction();
    const sliderRef = useRef<HTMLBaseElement>(null);

    const showNext = useCallback(() => {
        if (firstMovie <= movies.length - 2 - moviesNumber) setFirstMovie(firstMovie => firstMovie + 1);
        else {
            setFirstMovie(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstMovie, moviesNumber, movies.length]);

    const showPrevious = useCallback(() => {
        if (firstMovie !== 0) setFirstMovie(firstMovie - 1);
        else {
            setFirstMovie(movies.length - 1);
        }
    }, [firstMovie, movies.length]);

    const selectMovie = useCallback((movie: Video) => {
        setSelected(movie);
    }, []);

    useEffect(() => {
        const count = calculateNumberOfVideos(sliderOrientation!, width, height);
        count && setMoviesNumber(count);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width, height, sliderOrientation]);

    useEffect(() => {
        selected && setSelectedMovie(selected);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected]);

    const selectedMovies = movies.slice(firstMovie, moviesNumber + firstMovie);

    const sliderClass =
        sliderOrientation === "horizontal" ? "sidebar sidebar--horizontal" : "sidebar sidebar--vertical";

    return (
        <aside className={sliderClass} ref={sliderRef}>
            <ButtonPrevious
                sliderOrientation={sliderOrientation}
                clickHandler={showPrevious}
                disabled={firstMovie <= moviesNumber - 1}
            />

            {selectedMovies.map(movie => {
                return (
                    <Movie
                        key={uuid()}
                        clickHandler={selectMovie}
                        movie={movie}
                        isSelected={isEqual(movie, selected)}
                    />
                );
            })}
            <ButtonNext
                sliderOrientation={sliderOrientation}
                clickHandler={showNext}
                disabled={firstMovie >= movies.length - 2 - moviesNumber}
            />
        </aside>
    );
};

export default Slider;
