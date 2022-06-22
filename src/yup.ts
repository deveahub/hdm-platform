/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup';

yup.setLocale({
  mixed: {
    required: 'Campo obligatorio',
  },
  string: {
    email: 'Formato de correo no válido',
    min: 'Mínimo ${min} caracteres',
  },
});

export default yup;
