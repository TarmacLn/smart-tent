import { makeAutoObservable } from 'mobx';

class UIStore {
    private currentTab: number = 0;
    private tentSuccess: boolean = false;
    private stakeSuccess: boolean = false;
    private tentReady: boolean = false;
    private stakeReady: boolean = false;
    private infoModal: boolean = false;
    private refreshModal: boolean = false;
    private sound: boolean = true;

    constructor() {
        makeAutoObservable(this);
    }

    get CurrentTab() {
        return this.currentTab;
    }

    get TentSuccess() {
        return this.tentSuccess;
    }

    get StakeSuccess() {
        return this.stakeSuccess;
    }

    get InfoModal() {
        return this.infoModal;
    }

    get RefreshModal() {
        return this.refreshModal;
    }

    get Sound() {
        return this.sound;
    }

    get TentReady() {
        return this.tentReady;
    }

    get StakeReady() {
        return this.stakeReady;
    }

    public setCurrentTab(currentTab: number): void {
        this.currentTab = currentTab;
    }

    public setTentSuccess(tentSuccess: boolean): void {
        this.tentSuccess = tentSuccess;
    }

    public setStakeSuccess(stakeSuccess: boolean): void {
        this.stakeSuccess = stakeSuccess;
    }

    public setInfoModal(infoModal: boolean): void {
        this.infoModal = infoModal;
    }

    public setRefreshModal(refreshModal: boolean): void {
        this.refreshModal = refreshModal;
    }

    public setSound(sound: boolean): void {
        this.sound = sound;
    }

    public setTentReady(tentReady: boolean): void {
        this.tentReady = tentReady;
    }

    public setStakeReady(stakeReady: boolean): void {
        this.stakeReady = stakeReady;
    }
}

export default UIStore;
