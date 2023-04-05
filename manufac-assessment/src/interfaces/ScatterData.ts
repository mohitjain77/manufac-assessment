export interface ScatterOptions{
    xAxis:xAxis,
    yAxis:yAxis,
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

interface seriesElements{
    symbolSize: number,
    data: number[][],
    type: string,
}

interface nameTextStyle{
    padding:number[]
}