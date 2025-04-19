import "./Inventory.css";
import NavigationBar from "../NavigationBar/NavigationBar.jsx";
import InventoryTable from "./InventoryTable.jsx";
import { inventoryData } from "../../assets/data/inventory.js"

import { Link } from 'react-router-dom';


import { useState } from "react";
import InventoryChart from "./InventoryChart.jsx";

export default function Inventory() {
    const [active, setActive] = useState("Table");

    return(
        <div className="d-flex w-100">
            <NavigationBar />

            <div className="inventory ms-lg-4 w-100 pb-5 overflow-x-hidden overflow-y-auto">
                <div className="d-flex justify-content-between mx-4">
                    <div className="d-flex justify-content-between rounded-pill mt-2" style={{ background: "#fff" }}>
                            <button onClick={ () => setActive("Table") } className={`btn rounded-pill font-sm ${active === "Table" ? "active" : ""}`}>Tables</button>
                            <button onClick={ () => setActive("Dashboard") } className={`btn rounded-pill font-sm ${active === "Dashboard" ? "active" : ""}`}>Charts</button>
                    </div>
                    <div className="mt-2">
                        <Link to="/dashboard" className="home_btn me-4 d-none"><img src="/images/home.png" width="15px" /></Link>
                    </div>
                </div>
                {
                    active === "Table" ? (
                        <InventoryTable inventoryData={ inventoryData } />
                    ) : <InventoryChart inventoryData={ inventoryData } />
                    
                }
            </div>

        </div>
    )
}

