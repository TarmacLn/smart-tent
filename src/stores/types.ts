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
    SlowFade = 'slowFade',
    FastFade = 'fastFade',
    Twinkle = 'twinkle',
    InWaves = 'inWaves',
    Flashing = 'flashing',
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
