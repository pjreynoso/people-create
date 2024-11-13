export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  address: {
    address: string;
  }
}

export interface ResponseGetAllUser {
  users: User[]
}

export interface UserEdit {
  firstName: string;
  gender: string;
  address: string;
  phone: string;
  email: string;
  age: number;
}

export interface PayloadUserEdit extends UserEdit {
  id: number;
}