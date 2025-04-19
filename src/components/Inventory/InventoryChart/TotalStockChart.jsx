import * as echarts from 'echarts';
import { useEffect, useRef, useState } from 'react';

export default function TotalStockChart(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState("All");
    const [chartData, setChartData] = useState(props.chartData);

    const itemsPerPage = 10;
    const totalPages = Math.ceil(props.chartData.length / itemsPerPage);

    const currentData = chartData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    
    const bar = useRef(null);

    useEffect(() => {
        let data = [...props.chartData]; 
    
        if (filter === "A-Z" || filter === "All") {
            setChartData(data.sort((a, b) => a.name.localeCompare(b.name)));
        } else if (filter === "Z-A") {
            setChartData(data.sort((a, b) => b.name.localeCompare(a.name))); 
        } else if (filter === "Quantity") {
            setChartData(data.sort((a, b) => b.quantity - a.quantity));
        }
    
        setChartData(data);
        setCurrentPage(1); 
    }, [filter, props.chartData]);

    useEffect(() => {

        const graph = echarts.init(bar.current);

        const yAxis = currentData.map(item => item.name).reverse();
        const data = currentData.map(item => item.quantity).reverse();
        
        const maxVal = Math.max(...data);
        
        const option = {
            title: { text: "Total Stock" },
            tooltip: {},
            xAxis: {
                type: "value",
                max: maxVal,
                axisLabel: {
                    show: true,
                    interval: 'auto',
                    color: "#000",      // Force black text
                    fontSize: 12
                  },
                  axisLine: {
                    show: true,
                    lineStyle: {
                      color: "#999"     // Make sure the axis line is visible
                    }
                  },
                  splitLine: {
                    show: true,
                    lineStyle: {
                      color: "#ddd"     // Light gray grid lines
                    }
                }
            },
            yAxis: {
                type: "category",  // ✅ Important: horizontal bars need this
                data: yAxis,        // ✅ Your category names
            },
            grid: {
                left: 150, 
            },
            series: [{
                type: "bar",
                data: data,
                barWidth: 30,       
                barCategoryGap: 10,  
                barGap: "0%",
                itemStyle: {
                    color: '#183040' 
                }
            }]
        };

        graph.setOption(option);

        return () => {
            if (graph) {
                graph.dispose(); // Dispose the chart instance when the component unmounts
            }
        };

    }, [currentData]);

    return(
        <>
            <div className='d-flex justify-content-between'>
                <div class="dropdown">
                    <button class="btn font-sm d-flex align-items-start fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <p>{ filter }</p>
                        <img src="/images/arrow_down.svg" width="15px" className='ms-1' style={{ marginTop: "2px" }} />
                    </button>
                    <ul class="dropdown-menu">
                        <li><button onClick={ () => setFilter("All") } class="dropdown-item">All</button></li>
                        <li><button onClick={ () => setFilter("Z-A") } class="dropdown-item">Z-A</button></li>
                        <li><button onClick={ () => setFilter("Quantity") } class="dropdown-item">Quantity</button></li>
                    </ul>
                </div>

                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <button class="page-link font-sm" onClick={ () => setCurrentPage(currentPage - 1) }>Previous</button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li class="page-item"><button key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`page-link font-sm ${currentPage === index + 1 ? 'active' : ''}`}>{ index + 1}</button></li>
                        ))}
                        <button class="page-link font-sm" onClick={ () => setCurrentPage(currentPage + 1) }>Next</button>
                    </ul>
                </nav>
            </div>

            <div className='w-100 overflow-x-auto overflow-y-hidden'>
                <div ref={ bar } className='me-5' style={{ width: '100%', height: "90vh" }}>
                
                </div>
            </div>
        </>
    );
}