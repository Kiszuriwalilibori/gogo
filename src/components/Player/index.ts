import { connect } from "react-redux";
import { RootStateType } from "types";
import { Player } from "./Player";

const mapStateToProps = (state: RootStateType) => ({
    videoId: state.movies.selectedMovie?.id?.videoId,
    title: state.movies.selectedMovie?.snippet?.title,
    description: state.movies.selectedMovie?.snippet?.description,
});

export default connect(mapStateToProps, {})(Player);
