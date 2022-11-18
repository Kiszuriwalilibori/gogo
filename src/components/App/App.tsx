import { Route } from "react-router-dom";
import { lazy } from "react";

import Paths from "routing/paths";

import { LoginPage } from "pages/index";

const YouTubePage = lazy(() => import("pages/YouTubePage"));

const App = () => {
    return (
        <>
            <Route exact path={Paths.landing}>
                <LoginPage />
            </Route>

            <Route exact path={Paths.youtube}>
                <YouTubePage />
            </Route>
        </>
    );
};

export default App;
