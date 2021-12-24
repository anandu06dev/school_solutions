import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class LocalstorageService {
    public storageName = '_school_solutions'

    public data: { [key: string]: any } = {}

    public rxStorage = new BehaviorSubject<any>(this.data)

    constructor() {
        this.loadStorage()
    }

    loadStorage(store = 'local') {
        const storage = store === 'session' ? sessionStorage : localStorage
        const temp = storage.getItem(this.storageName)

        if (temp === '' || temp === undefined || temp === null) {
            this.data = {}
        } else {
            this.data = JSON.parse(temp)
        }
    }

    setData(Obj: any) {
        Object.keys(Obj).forEach((res) => {
            this.data[res] = Obj[res]
        })

        this.updateStorage()
    }

    updateStorage(store = 'local') {
        const storage = store === 'session' ? sessionStorage : localStorage
        storage.setItem(this.storageName, JSON.stringify(this.data))
        const temp = { ...this.data }
        this.rxStorage.next(temp)
    }

    get(obj = '') {
        if (obj === '') {
            return this.data
        } else {
            return this.data[obj]
        }
    }

    remove(obj = '') {
        this.data[obj] = null
        delete this.data[obj]
        this.updateStorage()
    }

    removeAll() {
        this.data = {}
        this.updateStorage()
    }
}
