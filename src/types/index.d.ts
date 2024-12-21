export interface ICountry {
    flag: string;
    region: string;
    capital: Array<string>
    flags: IFlagImage
    name: ICountryNameData
}

export interface IFlagImage {
    png: string
    svg: string
}

export interface ICountryNameData {
    common: string
    official: string
}
