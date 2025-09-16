import { makeAutoObservable } from 'mobx';

class UIStore {
    private currentTab: number = 0;
    private success: boolean = false;
    private successText: string = '';
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

    get Success() {
        return this.success;
    }

    get SuccessText() {
        return this.successText;
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

    public setSuccess(success: boolean): void {
        this.success = success;
    }

    public setSuccessText(successText: string): void {
        this.successText = successText;
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
