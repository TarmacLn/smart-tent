import { Cover, Food, FoodItem, LightModeEnum, NewCover, Order, SeverityEnum, SpecialThemeEnum, Tent, TentLocation, TentStats, TentTypeEnum, Theme } from './types';
import { makeAutoObservable } from 'mobx';

class DataStore {
    //Tent and Covers Data
    private tent: Tent | undefined = undefined;
    private tentLocation: TentLocation | undefined = undefined;

    private tentStats: TentStats | undefined = undefined;
    private wind: number = 70;
    private severity: SeverityEnum | undefined = undefined;

    private covers: Cover[] = [];
    private coverIdCounter: number = 0;

    private static dangerCells = [0, 1, 9, 10, 18, 19, 27, 28, 36, 37, 5, 6, 7];
    private static warningCells = [2, 11, 20, 29, 38, 45, 46, 47, 4, 8, 14, 15, 16];

    //Lighting Data
    private lightingMode: 'basic' | 'colour' | 'special' = 'basic';

    private light: 'on' | 'off' = 'off';
    private tempMode: 'cold' | 'warm' = 'cold';
    private brightness: number = 100;
    private autoMode: boolean = false;
    private nightMode: boolean = false;

    private colourMode: 'single' | 'multiple' = 'single';
    private lightMode: LightModeEnum = LightModeEnum.Static;
    private colours: string[] = ['#d0d0d0', '#d0d0d0', '#d0d0d0', '#d0d0d0', '#d0d0d0'];

    private static themes: Theme[] = [
        {
            name: 'Rustling Leaves',
            description: 'A calming theme that mimics the gentle rustling of leaves in a forest.',
            enum: SpecialThemeEnum.RustlingLeaves,
            colours: ['#A3C1AD', '#6B8E23', '#556B2F'],
            tab: 0,
        },
        {
            name: 'Lightning',
            description: 'An electrifying theme that simulates the sudden flashes of lightning during a storm.',
            enum: SpecialThemeEnum.Lightning,
            colours: ['#FFFFFF', '#FFFF00', '#ADD8E6'],
            tab: 0,
        },
        {
            name: 'Forest',
            description: 'A serene theme that captures the essence of a peaceful forest environment.',
            enum: SpecialThemeEnum.Forest,
            colours: ['#228B22', '#006400', '#8FBC8F'],
            tab: 0,
        },
        {
            name: 'Party',
            description: 'A vibrant theme that brings the energy and excitement of a party to life.',
            enum: SpecialThemeEnum.Party,
            colours: ['#FF69B4', '#FFD700', '#00FFFF'],
            tab: 1,
        },
        {
            name: 'Birthday',
            description: 'A cheerful theme that celebrates birthdays with bright and festive colors.',
            enum: SpecialThemeEnum.Birthday,
            colours: ['#FFB6C1', '#FFA500', '#FFFFE0'],
            tab: 1,
        },
        {
            name: 'Disco',
            description: 'A groovy theme that captures the flashy and fun atmosphere of a disco dance floor.',
            enum: SpecialThemeEnum.Disco,
            colours: ['#FF00FF', '#00FF00', '#0000FF'],
            tab: 1,
        },
        {
            name: 'Sunrise',
            description: 'A warm theme that reflects the beautiful colors of a sunrise.',
            enum: SpecialThemeEnum.Sunrise,
            colours: ['#FF4500', '#FFD700', '#FF69B4'],
            tab: 2,
        },
        {
            name: 'Sunset',
            description: 'A soothing theme that captures the tranquil colors of a sunset.',
            enum: SpecialThemeEnum.Sunset,
            colours: ['#FF6347', '#FF8C00', '#FF1493'],
            tab: 2,
        },
        {
            name: 'Dreamland',
            description: 'A mystical theme that evokes the enchanting ambiance of a dreamlike state.',
            enum: SpecialThemeEnum.Dreamland,
            colours: ['#8A2BE2', '#4B0082', '#7B68EE'],
            tab: 2,
        },
    ];
    private specialTheme: SpecialThemeEnum | undefined = undefined;

    private foodIdCounter: number = 0;
    private basket: FoodItem[] = [];
    private orders: Order[] = [];

    private events: number[] = [];

    constructor() {
        this.tent = {
            size: 2,
            stakes: 4,
            type: TentTypeEnum.AFrame,
        };
        this.tentLocation = {
            x: 0,
            y: 0,
        };
        this.tentStats = {
            humidity: 0,
            sunshine: 0,
            groundStability: 0,
        };
        this.wind = 70;
        this.severity = undefined;
        this.covers = [];
        this.coverIdCounter = 0;
        this.lightingMode = 'basic';
        this.light = 'off';
        this.tempMode = 'cold';
        this.brightness = 100;
        this.autoMode = false;
        this.nightMode = false;
        this.colourMode = 'single';
        this.lightMode = LightModeEnum.Static;
        this.colours = ['#d0d0d0', '#d0d0d0', '#d0d0d0', '#d0d0d0', '#d0d0d0'];
        this.specialTheme = undefined as unknown as SpecialThemeEnum;
        this.basket = [];
        this.orders = [];
        this.events = [];
        makeAutoObservable(this);
    }

    public refreshData(): void {
        this.tent = undefined;
        this.tentLocation = undefined;
        this.tentStats = undefined;
        this.wind = 70;
        this.severity = undefined;
        this.covers = [];
        this.coverIdCounter = 0;
        this.lightingMode = 'basic';
        this.light = 'off';
        this.tempMode = 'cold';
        this.brightness = 100;
        this.autoMode = false;
        this.nightMode = false;
        this.colourMode = 'single';
        this.lightMode = LightModeEnum.Static;
        this.colours = ['#d0d0d0', '#d0d0d0', '#d0d0d0', '#d0d0d0', '#d0d0d0'];
        this.specialTheme = undefined as unknown as SpecialThemeEnum;
        this.basket = [];
        this.orders = [];
        this.events = [];
    }

    //Tent and Covers Getters and Setters
    public getTent(): Tent | undefined {
        return this.tent;
    }

    public setTent(tent: Tent): void {
        this.tent = tent;
    }

    public getTentLocation(): TentLocation | undefined {
        return this.tentLocation;
    }

    public setTentLocation(tentLocation: TentLocation): void {
        this.tentLocation = tentLocation;
    }

    public getTentStats(): TentStats | undefined {
        return this.tentStats;
    }

    public setTentStats(tentStats: TentStats): void {
        this.tentStats = tentStats;
    }

    public setWind(wind: number): void {
        this.wind = wind;
    }

    public getWind(): number {
        return this.wind;
    }

    public getSeverity(): SeverityEnum | undefined {
        return this.severity;
    }

    public setSeverity(severity: SeverityEnum | undefined): void {
        this.severity = severity;
    }

    public getCovers(): Cover[] {
        return this.covers;
    }

    public addCover(newCover: NewCover): void {
        this.coverIdCounter += 1;

        const cover: Cover = {
            id: this.coverIdCounter,
            ...newCover
        };

        this.covers.push(cover);
    }

    public updateCover(updatedCover: Cover): void {
        this.covers = this.covers.map((c) => c.id === updatedCover.id ? updatedCover : c);
    }

    public removeCover(id: number): void {
        this.covers = this.covers.filter((c) => c.id !== id);
    }

    public clearCovers(): void {
        this.covers = [];
    }

    public getDangerCells(): number[] {
        return DataStore.dangerCells;
    }

    public getWarningCells(): number[] {
        return DataStore.warningCells;
    }

    //Lighting Getters and Setters
    public getLightingMode(): 'basic' | 'colour' | 'special' {
        return this.lightingMode;
    }

    public setLightingMode(mode: 'basic' | 'colour' | 'special'): void {
        this.lightingMode = mode;
    }

    public getLight(): 'on' | 'off' {
        return this.light;
    }

    public setLight(state: 'on' | 'off'): void {
        this.light = state;
    }

    public getTempMode(): 'cold' | 'warm' {
        return this.tempMode;
    }

    public setTempMode(mode: 'cold' | 'warm'): void {
        this.tempMode = mode;
    }

    public getBrightness(): number {
        return this.brightness;
    }

    public setBrightness(level: number): void {
        this.brightness = level;
    }

    public getAutoMode(): boolean {
        return this.autoMode;
    }

    public setAutoMode(state: boolean): void {
        this.autoMode = state;
    }

    public getNightMode(): boolean {
        return this.nightMode;
    }

    public setNightMode(state: boolean): void {
        this.nightMode = state;
    }

    public getColourMode(): 'single' | 'multiple' {
        return this.colourMode;
    }

    public setColourMode(mode: 'single' | 'multiple'): void {
        this.colourMode = mode;
    }

    public getLightMode(): LightModeEnum {
        return this.lightMode;
    }

    public setLightMode(mode: LightModeEnum): void {
        this.lightMode = mode;
    }
    public getColours(): string[] {
        return this.colours;
    }

    public setColours(colours: string[]): void {
        this.colours = colours;
    }

    public getSpecialTheme(): SpecialThemeEnum | undefined {
        return this.specialTheme;
    }

    public setSpecialTheme(theme: SpecialThemeEnum | undefined): void {
        this.specialTheme = theme;
    }

    public getTheme(themeEnum: SpecialThemeEnum | undefined): Theme | undefined {
        return DataStore.themes.find(theme => theme.enum === themeEnum);
    }

    public getBasket(): FoodItem[] {
        return this.basket;
    }

    public addToBasket(food: Food, notes: string): void {
        this.foodIdCounter += 1;
        const foodExists = this.basket.find((item) => item.name === food.name && item.notes === notes);
        if (foodExists) {
            foodExists.quantity += 1;
            this.basket = this.basket.map((item) => item.id === foodExists.id ? foodExists : item);
            return;
        }

        const foodItem: FoodItem = {
            id: this.foodIdCounter,
            name: food.name,
            price: food.price, 
            quantity: 1,
            notes
        };
        this.basket.push(foodItem);
    }

    public removeFromBasket(id: number): void {
        const item = this.basket.find((item) => item.id === id);
        if (item) {
            if (item.quantity > 1) {
                item.quantity -= 1;
                this.basket = this.basket.map((i) => i.id === item.id ? item : i);
            } else {
                this.basket = this.basket.filter((i) => i.id !== id);
            }
        }
    }

    public clearBasket(): void {
        this.basket = [];
    }

    public getOrders(): Order[] {
        return this.orders;
    }

    public addOrder(order: Order): void {
        this.orders.push(order);
    }

    public addEvent(eventId: number): void {
        if (!this.events.includes(eventId)) {
            this.events.push(eventId);
        }
    }

    public getEvents(): number[] {
        return this.events;
    }

}

export default DataStore;
