import { Store } from './Context';
import { useState, useEffect, useContext, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const LineChart = () => {
  const { Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4, Button5, setButton5 } = useContext(Store)

  const chartRef = useRef(null);

  useEffect(() => {
    // Set theme
    am4core.useTheme(am4themes_animated);
    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.logo.disabled = true

    // Set data
    const rawData = [
      { group: 'All fellow eyes (n = 587)', xValue: 0, yValue: 2448.9},
      { group: 'All fellow eyes (n = 587)', xValue: 3, yValue: 2441.6},
      { group: 'All fellow eyes (n = 587)', xValue: 7, yValue: 2437.3},
      { group: 'All fellow eyes (n = 587)', xValue: 11, yValue: 2441.6 },
      { group: 'All fellow eyes (n = 587)', xValue: 13, yValue: 2446.5 },
      { group: 'All fellow eyes (n = 587)', xValue: 23, yValue: 2433.7},
      
      { group: 'Timolol BID (n = 197)', xValue: 0, yValue: 2454.7 },
      { group: 'Timolol BID (n = 197)', xValue: 3, yValue: 2448.6},
      { group: 'Timolol BID (n = 197)', xValue: 7, yValue: 2446.8 },
      { group: 'Timolol BID (n = 197)', xValue: 11, yValue: 2418.9},
      { group: 'Timolol BID (n = 197)', xValue: 13, yValue: 2426.6 },
      { group: 'Timolol BID (n = 197)', xValue: 23, yValue: 2409.0 },
    
      { group: 'Bimatoprost implant 10 g (n = 197)', xValue: 0, yValue: 2471.7 },
      { group: 'Bimatoprost implant 10 g (n = 197)', xValue: 3, yValue: 2440.8 },
      { group: 'Bimatoprost implant 10 g (n = 197)', xValue: 7, yValue: 2416.4 },
      { group: 'Bimatoprost implant 10 g (n = 197)', xValue: 11, yValue:  2390.1},
      { group: 'Bimatoprost implant 10 g (n = 197)', xValue: 13, yValue: 2395.4},
      { group: 'Bimatoprost implant 10 g (n = 197)', xValue: 23, yValue: 2316.4 },
     
  { group: 'zero', xValue: 0, yValue: 0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0, yValue: 0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  
    ];

    const pboData = rawData.filter(item => item.group === 'All fellow eyes (n = 587)');
    const zeroData = rawData.filter(item => item.group === 'zero');
    const topData = rawData.filter(item => item.group === 'Timolol BID (n = 197)');
    const bimsrData = rawData.filter(item => item.group === 'Bimatoprost implant 10 g (n = 197)');
  
    const tickLabels = ["BL", "W2", "W6", "W15", "W18", "W22", "W31", "W34", "W38", "W44", "W52", "M14", "M16", "M18", "M20"];

// Create x-axis
const xAxis = chart.xAxes.push(new am4charts.ValueAxis());
xAxis.min = -1;
xAxis.max = 25;
xAxis.renderer.labels.template.fontSize = 14;
xAxis.renderer.minGridDistance = 25;
xAxis.renderer.grid.template.opacity = 0;
xAxis.title.text = `Time`;
xAxis.renderer.labels.template.adapter.add("text", function (text) {
  if (text === "0") {
    return "BL";
  } else if (text === "3") {
    return "W12";
  } else if (text === "7") {
    return "W28";
  } else if (text === "11") {
    return "W44";
  } else if (text === "15") {
    return "M12";
  } else if (text === "17") {
    return "W52";
  } else if (text === "23") {
    return "M20";
  }
  return "|";
});


    const yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 2000
    yAxis.max = 2600
    yAxis.strictMinMax = true;
    yAxis.renderer.labels.template.fontSize = 14;
    yAxis.renderer.minGridDistance = 20.5
    yAxis.title.text = `Mean CECD (cells/mm[baseline-shift: super; font-size: 10;]2)`;
    

    // Create series
    const series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = 'yValue';
    series1.dataFields.valueX = 'xValue';
    series1.data = Button1 ? pboData : zeroData
    series1.strokeWidth = 2;
    series1.stroke = am4core.color('green')
    

    const series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = 'yValue';
    series2.dataFields.valueX = 'xValue';
    series2.data = Button2 ? topData : zeroData
    series2.strokeWidth = 2;
    series2.stroke = am4core.color('blue')
    
    const series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = 'yValue';
    series3.dataFields.valueX = 'xValue';
    series3.data = Button3 ? bimsrData : zeroData
    series3.strokeWidth = 2;
    series3.stroke = am4core.color('black')
    

  
   

    // Add bullets to each data point
    let bullet1 = series1.bullets.push(new am4charts.Bullet());
    let circle = bullet1.createChild(am4core.Circle);
    circle.width = 5;
    circle.height = 5;
    circle.horizontalCenter = 'middle';
    circle.verticalCenter = 'middle';
    circle.strokeWidth = 2;
    circle.stroke = am4core.color(`green`);
    circle.fill = am4core.color(`green`);


    let bullet2 = series2.bullets.push(new am4charts.Bullet());
    let square = bullet2.createChild(am4core.Circle);
    square.width = 5;
    square.height = 5;
    square.horizontalCenter = 'middle';
    square.verticalCenter = 'middle';
    square.strokeWidth = 2;
    square.stroke = am4core.color('blue');
    square.fill = am4core.color('blue');

    let bullet3 = series3.bullets.push(new am4charts.Bullet());
        let diamond = bullet3.createChild(am4core.Circle);
        diamond.width = 5;
        diamond.height = 5;
        diamond.horizontalCenter = 'middle';
        diamond.verticalCenter = 'middle';
        diamond.strokeWidth = 2;
        diamond.stroke = am4core.color('black');
        diamond.fill = am4core.color('black');
        diamond.direction = 'pbo';
        diamond.rotation = 45

        chart.tooltip.getFillFromObject = true;
    chart.tooltip.background.fill = am4core.color('#ffffff');
    chart.tooltip.getStrokeFromObject = true;
    chart.tooltip.stroke = am4core.color('#707070');
    chart.tooltip.fontSize = 14;
    chart.tooltip.label.maxWidth = 300;
    chart.tooltip.label.wrap = true;

 

    // Set chart instance to the ref
    chartRef.current = chart;

    // Clean up the chart when the

    return () => {
      chart.dispose();
    };
  }, [Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4, Button5, setButton5]);

  return <div id="chartdiv" style={{ width: '1500px', height: '500px' }} />;
};

export default LineChart;