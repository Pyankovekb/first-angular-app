export class CityModel  {
    constructor(
    public cityName: string,
    public style: {
        background: string,
        colorStart: string,
        colorEnd: string,
    },
    
    public weather: {
        max: number,
        min: number,},
    public currentWeather?: string,
    public id?: number,
        )
    { }

}