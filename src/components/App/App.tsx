import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Paths from "routing/paths";

import { LoginPage, YouTubePage } from "pages/index";

const App = () => {
    return (
        <Routes>
            <Route path={Paths.landing} element={<LoginPage />} />
            <Route path={Paths.youtube} element={<YouTubePage />} />
        </Routes>
    );
};

export default App;
