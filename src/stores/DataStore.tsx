import { Tent, TentLocation, TentStats, TentTypeEnum } from './types';

class DataStore {
    private tent: Tent | undefined = undefined;
    private tentLocation: TentLocation | undefined = undefined;
    private tentStats: TentStats[] | undefined = undefined;

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
}

export default DataStore;
