import './App.module.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";

function App() {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/home"/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="*" element={<Navigate replace to="/home"/>}/>
                </Routes>
            </main>
        </>
    );
}

export default App;
