import { Routes, Route } from "react-router-dom"

import TerritoriesList from "../../pages/TerritoriesList/TerritoriesList"
import SingleTerritoryPage from "../../pages/SingleTerritoryPage/SingleTerritoryPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/territories" element={<TerritoriesList/>}/>
            <Route path="/territories/:id" element={<SingleTerritoryPage/>}/>
        </Routes>
    );
};

export default AppRoutes