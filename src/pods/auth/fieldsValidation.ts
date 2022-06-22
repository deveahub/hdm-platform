import yup from '@/yup';

export const passwordFieldValidation = yup.string().required().min(8);
export const keepSessionFieldValidation = yup.boolean().required();
