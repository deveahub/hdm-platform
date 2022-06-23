import yup from '@/yup';

export const passwordFieldValidation = yup.string().min(8);
export const keepSessionFieldValidation = yup.boolean();
