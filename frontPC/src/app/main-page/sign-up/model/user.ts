export  class User{
  userId: number;
  cityId: number;
  companyId: number;
  name: string;
  lastname: string;
  phone: string;
  birthday: string;
  email: string;
  username: string;
  password: string;
  // tslint:disable-next-line:max-line-length
  constructor(userId: number, cityId: number, companyId: number, name: string, lastname: string, phone: string, birthday: string, email: string, username: string, password: string) {
    this.userId = userId;
    this.cityId = cityId;
    this.companyId = companyId;
    this.name = name;
    this.lastname = lastname;
    this.phone = phone;
    this.birthday = birthday;
    this.email = email;
    this.username = username;
    this.password = password;
  }
}
