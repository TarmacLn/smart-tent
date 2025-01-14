import { makeAutoObservable } from 'mobx';

class UIStore {
    private currentTab: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    get CurrentTab() {
        return this.currentTab;
    }

    public setCurrentTab(currentTab: number): void {
        this.currentTab = currentTab;
    }
}

export default UIStore;
