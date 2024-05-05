import {Link} from 'react-router-dom';
import './components/pages/style.css';
const Navigation = () => {

    return (
        
            <div className="info">
                <h1>Shopping Mall</h1>
                <button className="category">
                    <Link to="/men's%20clothing">Men's clothing</Link>
                </button>
                
                {/* <Link to={}>Women's clothing</Link>
                <Link to={}>Jewelery</Link>
                <Link to={}>Electronics</Link> */}
            </div>
        
    )
}
export default Navigation;