import yup from '@/yup';

export const userEmailValidation = yup.string().email();
export const userPhoneValidation = yup.string();
