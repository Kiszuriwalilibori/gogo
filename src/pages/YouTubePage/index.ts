import { connect } from "react-redux";
import { RootStateType } from "types";
import { withRouter } from "react-router";
import YouTubePage from "./YouTubePage";

const mapStateToProps = (state: RootStateType) => ({
    isLogged: state.log.isLogged,
    isLoading: state.fetch.isLoading,
    isError: state.fetch.isError,
    errorMessage: state.fetch.errorMessage,
});

export default withRouter(connect(mapStateToProps, {})(YouTubePage));
