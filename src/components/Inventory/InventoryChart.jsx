import * as echarts from 'echarts';
import { useEffect, useRef, useState } from 'react';
import TotalStockChart from './InventoryChart/TotalStockChart';
import LowStockChart from './InventoryChart/LowStockChart';

export default function InventoryChart(props) {
    const bar = useRef(null);

    const [active, setActive] = useState("Total Stock");
    const [chartData, setChartData] = useState([props.inventoryData]);

    useEffect(() => {
        let data;
        const foodCategory = ["Ready-to-Serve", "Raw Ingredients", "Condiments", "Vegetables", "Dairy", "Meal Sets", "Beverages", "Fruits"];

        active === "Total Stock" ? (
            data = props.inventoryData
        ) : active === "Low Stock" ? (
            data = props.inventoryData.filter((i) => i.quantity <= 10 && i.quantity > 0)
        ) : active === "Out of Stock" ? (
            data = props.inventoryData.filter((i) => i.quantity === 0)
        ) : active === "Food Stock" ? (
            data = props.inventoryData.filter((i) => foodCategory.includes(i.category))
        ) : active === "Utility Stock" ? (
            console.log(null)
        ) : console.log(null);
        
        setChartData(data);
        
    }, [active, props.inventoryData])

    return(
        <>
            <div className="d-flex justify-content-between mx-4">
                <div className="inventory_nav d-flex overflow-x-auto rounded-pill mt-2 w-100" style={{ background: "#fff" }}>
                        <button onClick={ () => setActive("Total Stock") } className={`btn rounded-pill font-sm ${active === "Total Stock" ? "active" : ""}`}>Total Stock</button>
                        <button onClick={ () => setActive("Low Stock") } className={`btn rounded-pill font-sm ${active === "Low Stock" ? "active" : ""}`}>Low Stock</button>
                        <button onClick={ () => setActive("Out of Stock") } className={`btn rounded-pill font-sm ${active === "Out of Stock" ? "active" : ""}`}>Out of Stock</button>
                        <button onClick={ () => setActive("Available Stock") } className={`btn rounded-pill font-sm ${active === "Available Stock" ? "active" : ""}`}>Available Stock</button>
                        <button onClick={ () => setActive("Food Stock") } className={`btn rounded-pill font-sm ${active === "Food Stock" ? "active" : ""}`}>Food Stock</button>
                        <button onClick={ () => setActive("Utility Stock") } className={`btn rounded-pill font-sm ${active === "Utility Stock" ? "active" : ""}`}>Utility Stock</button>
                </div>
                {/* <TotalStock inventoryData={ props.inventoryData }/> */}
            </div>
            <div>
                <div ref={ bar }>
                {
                    active === "Total Stock" ? (
                        <TotalStockChart chartData={ chartData } />
                    ) : <LowStockChart chartData={ chartData } />
                    
                }   
            </div>
            </div>
        </>
    );
}