import ReactECharts from "echarts-for-react";
import { wineData } from "../utils/wineData";
import { BarOptions } from "../interfaces/BarData";
const BarChart = () => {

    const getClassAvgMalicAcid = (): number[] => {
        let avgDataList: number[] = [];
        let avgDataMap = new Map<number, number[]>();
        // Created a map with key="alcohol", value="Array of Malic Acid Values"
        wineData.forEach((wine) => {
            if (avgDataMap.has(wine["Alcohol"])) {
                let alcoholClassArray = avgDataMap.get(wine["Alcohol"]) as number[];
                alcoholClassArray.push(wine["Malic Acid"]);
                avgDataMap.set(wine["Alcohol"], alcoholClassArray);
            } else {
                let alcoholClassArray = [];
                alcoholClassArray.push(wine["Malic Acid"]);
                avgDataMap.set(wine["Alcohol"], alcoholClassArray);
            }
        });

        // Creating Array of average of each Malic Acid Alcohol Types
        avgDataMap.forEach((malicAcidArray, keys) => {
            let avgValue = 0;
            let totalSum = 0;

            malicAcidArray.forEach((malicAcid) => {
                totalSum += malicAcid;
            });
            avgValue = totalSum / malicAcidArray.length;
            avgDataList.push(Math.round(avgValue * 100) / 100);
        });
        return avgDataList;
    };

    // Created List of distinct Alcohol Types
    const getAlcoholType = (): string[] => {
        let alcoholTypeList: string[] = [];
        let alcoholTypeMap = new Map<number, boolean>();
        wineData.forEach(wine => {
            if (!alcoholTypeMap.has(wine['Alcohol'])) {
                alcoholTypeMap.set(wine['Alcohol'], true);
            }
        });
        alcoholTypeMap.forEach((value, key) => {
            alcoholTypeList.push("Alcohol " + key);
        });
        return alcoholTypeList;
    }

    // options to generate Bar Chart Graph
    const options: BarOptions = {
        xAxis: {
            type: 'category',
            data: getAlcoholType()
        },
        yAxis: {
            name: 'Average of Malic Acid',
            nameLocation: "center",
            nameTextStyle: { padding: [0, 0, 10, 0] }
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },
        series: [
            {
                barWidth: "20%",
                data: getClassAvgMalicAcid(),
                type: "bar",
            },
        ],
    };

    return (
        <div>
            <h1 className="title">Bar Chart</h1>
            <ReactECharts option={options} />
        </div >
    );
};

export default BarChart;
