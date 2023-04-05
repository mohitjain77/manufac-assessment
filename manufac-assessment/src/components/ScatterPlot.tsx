import ReactECharts from 'echarts-for-react';
import { wineData } from "../utils/wineData";
import { ScatterOptions } from '../interfaces/ScatterData';
const ScatterPlot = () => {
  
  const fillWineData = (): number[][] => {
    let scatterData: number[][] = [];
    wineData.forEach(wine=>{
      let wineDetails :number[] = [];
      if(typeof wine['Color intensity'] === 'number'){
        wineDetails.push(wine['Color intensity']);
      }else{
        wineDetails.push(parseFloat(wine['Color intensity']));
      }
      
      wineDetails.push(wine['Hue']);
      scatterData.push(wineDetails);
    });
    return scatterData;
  }

  const options:ScatterOptions = {
    xAxis: {name:"Color Intensity", nameLocation:"center",nameTextStyle:{padding:[10,0,0,0]}},
    yAxis: {name:"Hue",nameLocation:"center",nameTextStyle:{padding:[0,0,5,0]}},
    series: [
      {
        symbolSize: 5,
        data: fillWineData(),
        type: 'scatter'
      }
    ]
  };
  return (
    <div>
      <h1>Scatter Plot</h1>
      <ReactECharts option={options} />
    </div>
  );
};

export default ScatterPlot;
