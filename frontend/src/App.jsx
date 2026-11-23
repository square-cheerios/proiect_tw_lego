
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";

import InventoryPage from "./pages/InventoryPage.jsx";
import LegoDetails from "./pages/LegoDetails.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>

                <Route
                    path="/"
                    element={<InventoryPage />}
                />

                <Route
                    path="/legoSets/:id"
                    element={<LegoDetails />}
                />

                <Route
                    path="/despre"
                    element={<AboutPage />}
                />

                <Route
                    path="*"
                    element={<NotFoundPage />}
                />

            </Route>
        </Routes>
    );
}
