import { Route, Routes } from 'react-router-dom';
import MensProducts from './components/Products/Categories/Mens';
import MainPage from './components/pages/MainPage';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/men's%20clothing" element={<MensProducts/>}/>
            {/* <Route path="/women's%20clothing" element={}/>
            <Route path="/jewelery" element={}/>
            <Route path="/electronics" element={}/> */}
            <Route path="*" element={<MainPage/>}/>
        </Routes>
        
    );
};

export default AppRoutes;