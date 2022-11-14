import YouTube from "react-youtube";

import { useCallback } from "react";

import useDispatchAction from "hooks/useDispatchAction";

const options = {
    width: "100%",
    height: "100%",
    playerVars: {
        controls: 1,
        autoplay: 1,
        hl: "pl",
        modestbranding: 1,
    },
};

const error = {
    isError: true,
    errorMessage: "Video caused error",
};
interface Props {
    videoId: string;
    title: string;
    description: string;
}

export const Player = (props: Props) => {
    const { videoId, title, description } = props;
    const { showError } = useDispatchAction();

    const dispatchError = useCallback(() => {
        showError(error);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!videoId) return null;

    return (
        <section className="player" id="player-id">
            <YouTube
                videoId={videoId}
                opts={options}
                className={"youtube"}
                onError={dispatchError}
                //onStateChange={dispatchError} //for tests of error rendering
            ></YouTube>
            <p className="title">{title}</p>
            <p className="description">{description}</p>
        </section>
    );
};
