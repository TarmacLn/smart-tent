import { Tent, TentLocation, TentStats, TentTypeEnum } from './types';

class DataStore {
    private tent: Tent | undefined = undefined;
    private tentLocation: TentLocation | undefined = undefined;
    private tentStats: TentStats[] | undefined = undefined;
    private static dangerCells = [0,1,9,10,18,19,27,28,36,37,5,6,7];
    private static warningCells = [2,11,20,29,38,45,46,47,4,8,14,15,16];

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
        this.tentStats = [];
    }

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

    public getTentStats(): TentStats[] | undefined {
        return this.tentStats;
    }

    public setTentStats(tentStats: TentStats[]): void {
        this.tentStats = tentStats;
    }

    public getDangerCells(): number[] {
        return DataStore.dangerCells;
    }

    public getWarningCells(): number[] {
        return DataStore.warningCells;
    }
}

export default DataStore;
