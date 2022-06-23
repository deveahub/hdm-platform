import yup from '@/yup';

export const userEmailValidation = yup.string().email();
export const userPhoneValidation = yup.string();
export const userNameValidation = yup.string();
export const userSurnameValidation = yup.string();
