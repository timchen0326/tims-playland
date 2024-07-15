'use client'
import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, BarController } from 'chart.js';
import { animate } from 'popmotion';

Chart.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, BarController);

const ChartComponent: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const myChartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (myChartRef.current) {
          myChartRef.current.destroy();
        }

        const targetData = [12, 19, 3, 5, 2, 3];
        const initialData = targetData.map(() => 0);

        myChartRef.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
              {
                label: '# of Votes',
                data: initialData,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            animation: {
              duration: 0 // general animation time
            },
            hover: {
            },
            plugins: {
              legend: {
                labels: {
                  font: {
                    size: 14,
                    weight: 'bold'
                  }
                }
              },
              tooltip: {
                backgroundColor: 'rgba(0,0,0,0.8)',
                titleFont: {
                  size: 16,
                  weight: 'bold'
                },
                bodyFont: {
                  size: 14
                },
                padding: 15,
                cornerRadius: 5,
                displayColors: false
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: 'rgba(0,0,0,0.1)'
                }
              },
              x: {
                grid: {
                  display: false
                }
              }
            }
          },
        });

        // Animate each bar
        targetData.forEach((target, index) => {
          animate({
            from: 0,
            to: target,
            duration: 1500,
            onUpdate: (latest) => {
              if (myChartRef.current) {
                myChartRef.current.data.datasets[0].data[index] = latest;
                myChartRef.current.update('none');
              }
            }
          });
        });
      }
    }

    return () => {
      if (myChartRef.current) {
        myChartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="chart-container p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-xl">
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartComponent;