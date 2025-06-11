import React from "react"
import { useNavigation, Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"


export default function MainLayout() {
    const navigation = useNavigation()

    return (
        <div className="site-wrapper">
            <NavBar />
            {navigation.state === "loading" && (
                <div className="loading-overlay">
                <div className="spinner"></div>
                <p>Loading...</p>
                </div>
            )}
            <Outlet />
            <Footer />
        </div>
    )
}