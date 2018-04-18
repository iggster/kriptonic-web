import { UserProfile} from "./user-profiles";


export class User {

  constructor(
    public id: number,
    public hash: string,
    public name: string,
    public password: string,
    public email: string,
    public role: string,
    public qrcode: any,
    public accountActivated: boolean,
    public modifyingUser: string,
    public dateModified: Date,
    public dateCreated: Date,
    public userProfile: UserProfile){}
}
