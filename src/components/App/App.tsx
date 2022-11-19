import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import loadable from "@loadable/component";
import Paths from "routing/paths";

import { LoginPage } from "pages/index";
const YouTubePage = loadable(() => import("pages/YouTubePage"));

const App = () => {
    return (
        <Routes>
            <Route path={Paths.landing} element={<LoginPage />} />
            <Route path={Paths.youtube} element={<YouTubePage />} />
        </Routes>
    );
};

export default App;
