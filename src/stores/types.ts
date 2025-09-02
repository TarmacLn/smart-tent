export enum TentTypeEnum {
    AFrame = 'aFrame',
    Dome = 'dome',
}

export enum SeverityEnum {
    Danger = 'danger',
    Warning = 'warning',
    Normal = 'normal',
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
    id: string;
    type: string;
    size: number | undefined; //size can be 2(small, 2x3), 3(medium, 3x4), 4(large, 4x5)
    location: TentLocation;
}
