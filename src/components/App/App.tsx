import { Route } from "react-router-dom";
import { lazy } from "react";

import Paths from "routing/paths";
import Awaiting from "functions/awaiting";

import { LoginPage } from "Pages";

const YouTubePage = lazy(() => import("Pages/YouTubePage"));

const App = () => {
    return (
        <>
            <Route exact path={Paths.landing} component={LoginPage} />
            <Route exact path={Paths.youtube} component={Awaiting(YouTubePage)} />
        </>
    );
};

export default App;
