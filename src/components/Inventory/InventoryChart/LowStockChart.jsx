import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

export default function LowStockChart(props) {
    // console.log("Chart Data");
    
    // console.log(props.stock);
    
    const bar = useRef(null);

    useEffect(() => {
        // Check if a chart instance already exists
        if (bar.current && !echarts.getInstanceByDom(bar.current)) {
            const graph = echarts.init(bar.current);
    
            const xAxis = props.chartData.map(i => i.name);
            const data = props.chartData.map(i => i.quantity);
    
            const option = {
                title: { text: "Total Stock" },
                xAxis: { data: xAxis },
                yAxis: {},
                tooltip: {},
                series: {
                    name: "Stock",
                    type: "bar",
                    data: data
                }
            };
    
            graph.setOption(option);
    
            return () => {
                if (graph) {
                    graph.dispose(); // Dispose the chart instance when the component unmounts
                }
            };
        }
    }, [props.chartData]);

    return(
        <section ref={ bar } style={{ width: '100%', height: '1000px' }}>
            
        </section>
    );
}