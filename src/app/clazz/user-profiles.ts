
export class UserProfile {

constructor(
  public profileId: number,
  public userId: number,
  public profileDescription: string,
  public hashId: string,
  public firstName: string,
  public lastName: string,
  public dob: Date,
  public gender: string,
  public phone1: string,
  public phone2: string,
  public address: string,
  public city: string,
  public province: string,
  public country: string,
  public zip: string,
  public qrcode: any,
  public modifyingUser: string,
  public dateModified: Date,
  public dateCreated:Date){}
}
