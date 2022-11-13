import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Review from './containers/Review';
import './assets/style.css'
import Cart from './containers/Cart';
import Car from './containers/Car';
import Writereview from './containers/Writereview';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
          
            {/* <Route path="/cart" element={<Cart />} /> */}
          
           
        </Routes>
    );
};
export default Router;
