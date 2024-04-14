'use client'

import Chart from "chart.js/auto";
import React from 'react';
import { useEffect } from "react";
import 'chartjs-adapter-moment';

const BarChart = () => {

  useEffect(() => {
    var ctx: any = document.getElementById('chart');
    const labels = [
      4000000,
      5000000,
      6000000,
      7000000,
      8000000,
      9000000,
      10000000,
      11000000,
      12000000,
      13000000,
      14000000,
      15000000,
      16000000,
      17000000,
      18000000,
      19000000,
      20000000,
      21000000,
      22000000,
      23000000,
      24000000,
    ];
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          data: [0, 0, 0, 0, 0, 0, 0, 0, 300, 150, 600, 0, 0, 200, 0, 0, 900, 300, 440, 190, 400],
          label: "",
          borderColor: "#F1F1F1",
          backgroundColor: "#8099FF",
          barThickness: 2,

        }
        ]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            title: {
              display: false,
              text: "Time"
            },
            grid: {
              display: false,
            },
            border: {
              dash: [5, 5],
              dashOffset: 2,
              color: "#8099FF",
            }
          },
          y: {
            title: {
              display: false,
              text: 'value'
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }
    });
  }, [])

  return (
    <canvas id="chart" height={150}></canvas>
  )
}

export default BarChart