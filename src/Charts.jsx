import * as echarts from 'echarts';
import { useRef, useEffect } from 'react';
import "./Charts.css";

export default function Charts() {
    const bar = useRef(null);

    useEffect(() => {
        const chart = echarts.init(bar.current);

        const option = {
            title: {
              text: 'Basic Bar Chart',
            },
            tooltip: {},
            xAxis: {
          
            },
            yAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            series: [
              {
                name: 'Sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 15],
              },
            ],
          };

          chart.setOption(option);

          return () => {
            chart.dispose()
          }
    }, [])
    return(
        <section className="bar" ref={ bar }>
            <h1>vuguv</h1>
        </section>
    );
}