import React from "react"
import { Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"


function AppRoutes() {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/sobre" element={<About/>} exact/>
            <Route path="/contatos" element={<Contact/>} exact/>
        </Routes>
        </>
    )
}
export default AppRoutes