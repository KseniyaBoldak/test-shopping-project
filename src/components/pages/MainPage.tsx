import './style.css';
import Navigation from '../../Navigation';
import AppRoutes from '../../AppRoutes';
const MainPage = () => {
    return (
        <div className="main">
            <Navigation/>
            <div>
                <AppRoutes/>
            </div>
        </div>
    )
}
export default MainPage;