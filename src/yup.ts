/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup';

export const COMMON_TRANSLATIONS = {
  mixed: {
    required: 'Campo obligatorio',
  },
};

yup.setLocale({
  mixed: {
    required: COMMON_TRANSLATIONS.mixed.required,
  },
  string: {
    email: 'Formato de correo no válido',
    min: 'Mínimo ${min} caracteres',
  },
});

export default yup;
