export class BaseDomainModel<T>{
    constructor(jsonObj:{}){
      Object.assign(this ,jsonObj)
    }
}