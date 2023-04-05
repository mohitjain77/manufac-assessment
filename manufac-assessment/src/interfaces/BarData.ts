export interface BarOptions{
    xAxis:xAxis,
    yAxis:yAxis,
    tooltip:tooltip,
    series:seriesElements[],
}

interface xAxis{
    type:string,
    data:string[]
}

interface yAxis{
    name:string,
    nameLocation:string,
    nameTextStyle:nameTextStyle,
}

interface tooltip{
    trigger: string,
    axisPointer: axisPointer
}

interface axisPointer {
    type:string
}

interface seriesElements{
    barWidth: string,
    data: number[],
    type: string,
}

interface nameTextStyle{
    padding:number[]
}