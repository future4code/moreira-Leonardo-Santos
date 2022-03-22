import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage.js';
import RegisterPage from '../pages/RegisterPage/RegisterPage.js';
import PostsFeedPage from '../pages/PostsFeedPage/PostsFeedPage.js';
import PostPage from '../pages/PostPage/PostPage.js';
import MobileMenu from '../pages/MobileMenu/MobileMenu.js';


const Router = ({changeButtonName, buttonName, token}) => {

    return (
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/cadastro' element={<RegisterPage/>}/>
                <Route path='/posts' element={<PostsFeedPage/>}/>
                <Route path='/posts/:postid' element={<PostPage/>}/>
                <Route path='/menu' element={<MobileMenu/>}/>
                <Route path='*' element={<h1>Ops página não encontrada</h1>}/>
            </Routes>
    );
};
export default Router;