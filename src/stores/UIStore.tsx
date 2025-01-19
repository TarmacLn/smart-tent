import { makeAutoObservable } from 'mobx';

class UIStore {
    private currentTab: number = 0;
    private tentSuccess: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    get CurrentTab() {
        return this.currentTab;
    }

    get TentSuccess() {
        return this.tentSuccess;
    }

    public setCurrentTab(currentTab: number): void {
        this.currentTab = currentTab;
    }

    public setTentSuccess(tentSuccess: boolean): void {
        this.tentSuccess = tentSuccess;
    }
}

export default UIStore;
