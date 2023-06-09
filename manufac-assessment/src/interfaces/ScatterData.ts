export interface ScatterOptions{
    xAxis:xAxis,
    yAxis:yAxis,
    tooltip:tooltip,
    series:seriesElements[],
}

interface xAxis{
    name:string,
    nameLocation:string,
    nameTextStyle:nameTextStyle,
}

interface yAxis{
    name:string,
    nameLocation:string,
    nameTextStyle:nameTextStyle,
}

interface tooltip{
    trigger: string,
}

interface axisPointer {
    type:string
}

interface seriesElements{
    symbolSize: number,
    data: number[][],
    type: string,
}

interface nameTextStyle{
    padding:number[]
}