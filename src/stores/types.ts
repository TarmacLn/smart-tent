export enum TentTypeEnum {
    AFrame = 'aFrame',
    Dome = 'dome',
}

export interface Tent {
    length: number;
    width: number;
    height: number;
    stakes: number;
    type: TentTypeEnum;
}

export interface TentLocation {
    x: number;
    y: number;
    z: number;
}

export interface TentStats {
    humidity: number;
    sunshine: number;
    groundStability: number;
}