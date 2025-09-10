import { Cover, NewCover, SeverityEnum, Tent, TentLocation, TentStats, TentTypeEnum } from './types';
import { makeAutoObservable } from 'mobx';

class DataStore {
    private tent: Tent | undefined = undefined;
    private tentLocation: TentLocation | undefined = undefined;
    private tentStats: TentStats | undefined = undefined;
    private wind: number = 70;
    private severity: SeverityEnum | undefined = undefined;
    private covers: Cover[] = [];
    private coverIdCounter: number = 0;
    private static dangerCells = [0, 1, 9, 10, 18, 19, 27, 28, 36, 37, 5, 6, 7];
    private static warningCells = [2, 11, 20, 29, 38, 45, 46, 47, 4, 8, 14, 15, 16];

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
        makeAutoObservable(this);
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
}

export default DataStore;
