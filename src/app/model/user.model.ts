export class User {
  public user_id: string;
  public firstname: string;
  public lastname: string;
  public email: string;
  public dob: string;

  constructor(user_id: string, firstname: string, lastname: string, email: string, dob: string) {
    this.user_id = user_id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.dob = dob;
  }
}
