export enum TentTypeEnum {
    AFrame = 'aFrame',
    Dome = 'dome',
}

export enum SeverityEnum {
    Danger = 'danger',
    Warning = 'warning',
    Normal = 'normal',
}

export enum CoverTypeEnum {
    OnTop = 'onTop',
    Around = 'around',
}

export enum CoverSizeEnum {
    Small = 2, //2x3
    Medium = 3, //3x4
    Large = 4, //4x5
}

export enum LightModeEnum {
    Static = 'static',
    Twinkle = 'twinkle',
    Flashing = 'flashing',
}

export enum SpecialThemeEnum {
    RustlingLeaves = 'rustlingLeaves',
    Lightning = 'lightning',
    Forest = 'forest',
    Party = 'party',
    Birthday = 'birthday',
    Disco = 'disco',
    Sunrise = 'sunrise',
    Sunset = 'sunset',
    Dreamland = 'dreamland',
}

export enum MealEnum {
    Breakfast = 'breakfast',
    Lunch = 'lunch',
    Dinner = 'dinner',
}

export enum WeatherEnum {
    Sunny = 'sunny',
    SunWithClouds = 'sunWithClouds',
    Cloudy = 'cloudy',
    Rain = 'rain',
    Storm = 'storm',
    ClearNight = 'clearNight',
    CloudyNight = 'cloudyNight',
}

export interface Tent {
    size: number; //size can be 2(small), 3(medium), 4(large)
    stakes: number;
    type: TentTypeEnum;
}

export interface TentLocation {
    x: number;
    y: number;
}

export interface TentStats {
    humidity: number;
    sunshine: number;
    groundStability: number;
}

export interface StakeConfiguration {
    id: number;
    depth: number;
    angle: number;
}

export interface Cover {
    id: number;
    name: string;
    type: CoverTypeEnum;
    size: CoverSizeEnum;
}

export interface NewCover {
    name: string;
    type: CoverTypeEnum;
    size: CoverSizeEnum;
}

export interface Theme {
    name: string;
    description: string;
    enum: SpecialThemeEnum;
    colours: string[];
    tab: number;
}

export interface Food {
    name: string;
    description: string;
    price: number;
    meals: MealEnum[];
    vegetarian: boolean;
}

export interface FoodItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    notes: string;
}

export interface Order {
    items: FoodItem[];
    total: number;
    paymentMethod: string;
    deliveryTime: Date;
}

export interface TimeWeather {
    time: string;
    temperature: number; //Celsius
    weather: WeatherEnum;
}

export interface DayWeather {
    day: string;
    high: number;
    low: number;
    weather: WeatherEnum;
    humidity: number;
    colour: string;
}

export interface Device {
    name: string;
    id: number;
    performance: number;
    active?: boolean;
}

export interface Event {
    id: number;
    name: string;
    date: string;
    time: string;
    location: string;
    category: string;
    description: string;
    price?: number;
}

export interface Sight {
    id: number;
    name: string;
    description: string;
    image: string;
    location: string;
    distance: string;
}
