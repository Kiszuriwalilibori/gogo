import { Route } from "react-router-dom";
import { lazy } from "react";

import Paths from "routing/paths";
import Awaiting from "functions/awaiting";

import { LoginPage } from "pages/index";

const YouTubePage = lazy(() => import("pages/YouTubePage"));

const App = () => {
    return (
        <>
            <Route exact path={Paths.landing} component={LoginPage} />
            <Route exact path={Paths.youtube} component={Awaiting(YouTubePage)} />
        </>
    );
};

export default App;
