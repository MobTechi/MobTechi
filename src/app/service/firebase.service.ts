import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';
import { sortByNumber, SORTING_TYPES } from 'src/utils';
import { App } from '../model/app.model';

@Injectable({
    providedIn: 'root',
})

export class FirebaseService {
    private appDbPath = '/apps';
    public appsListSubject: BehaviorSubject<App[]>;

    constructor(private db: AngularFireDatabase) {
        this.appsListSubject = new BehaviorSubject<App[]>(null);
    }

    public getApps(): any {
        if (this.appsListSubject.value) {
            return this.appsListSubject.value;
        } else {
            return new Promise((resolve) => {
                return this.db.object(this.appDbPath).valueChanges().subscribe((data) => {
                    const apps = this.normalize(data);
                    this.appsListSubject.next(apps);
                    resolve(apps);
                });
            });
        }
    }

    public async getAppByUrl(routerUrl) {
        const appsList = await this.getApps();
        return appsList.find((app) => routerUrl.includes(app.id));
    }

    private normalize(appData = {}) {
        const appList = [];
        Object.keys(appData).forEach((key) => {
            const app: App = appData[key];
            if (app.active) {
                appList.push(app);
            }
        });
        return sortByNumber(appList, 'sequence', SORTING_TYPES.ascending);
    }
}
