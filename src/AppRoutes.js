import React from "react"
import { Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact/Contact";


function AppRoutes() {
    return(
        <>
        <Routes>
            <Route path="/" element={<>home</>} exact/>
            <Route path="/sobre" element={<>sobre</>} exact/>
            <Route path="/contatos" element={<Contact/>} exact/>
        </Routes>
        </>
    )
}
export default AppRoutes