export interface User {
  _id: string;
  userId: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
}

export interface LoginAPIResponse extends User {
  token: string;
}
