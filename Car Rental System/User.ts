import { generateId } from './helpers';
export default class User{
    private id:string
    name:string
    license:string
    bills:[]

    constructor(name:string,license:string,bills:[] = []){
        this.name = name
        this.license = license
        this.bills = bills
        this.id = generateId()
    }

    getUserInfo(billsRequseted:boolean){
        return {
            id:this.id,
            name:this.name,
            license:this.license,
            ...(billsRequseted && {bills:this.bills})
        }
    }

    setUserInfo(name:string|null,license:string|null){
        this.name = name!==null?name:this.name
        this.license = license!==null?license:this.license
    }
}