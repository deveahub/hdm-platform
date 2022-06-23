import { User } from '@/pods/user/types';

export interface LoginAPIResponse extends User {
  token: string;
}

export interface DirectLoginAPIResponse {
  success: boolean;
}
