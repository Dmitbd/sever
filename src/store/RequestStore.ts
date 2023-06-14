import { makeAutoObservable } from 'mobx'

type Request = {
  date: string
  url: string
}

class RequestStore {

  requests: Request[] = []

  constructor() {
    makeAutoObservable(this)
  }

  increment(date: string, url: string) {
    this.requests.push({ date, url })
  }
}

export default new RequestStore()
