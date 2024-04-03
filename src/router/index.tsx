
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeRoute from './routes/Home';
import LoginRoute from './routes/Login';
import RegisterRoute from './routes/Register';
import MainPageRoute from './routes/MainPage';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeRoute />} />
                <Route path='/login/*' element={<LoginRoute />} />
                <Route path='/register/*' element={<RegisterRoute />} />
                <Route path='/main-page/*' element={<MainPageRoute />} />
            </Routes>
        </BrowserRouter>
    );
}