import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import Button from '@/components/Button';
import FieldSet from '@/components/Fieldset';
import FormInput from '@/components/form/FormInput';
import Spinner from '@/components/Spinner';
import Stack from '@/components/Stack';
import TextError from '@/components/TextError';
import TextSuccess from '@/components/TextSuccess';
import directLoginValidationSchema, {
  DIRECT_LOGIN_VALIDATION_SCHEMA_INITIAL_VALUES,
} from '@/pods/auth/directLoginValidationSchema';
import useDirectLogin from '@/pods/auth/useDirectLogin';

const DirectLoginForm = () => {
  const { push } = useRouter();
  const {
    handlers: { directLogin },
    ...directLoginState
  } = useDirectLogin();

  return (
    <Formik
      initialValues={DIRECT_LOGIN_VALIDATION_SCHEMA_INITIAL_VALUES}
      validationSchema={directLoginValidationSchema}
      onSubmit={directLogin}
    >
      <Stack fullWidth as={Form} direction="column" spacing={2}>
        <FieldSet>
          <FormInput
            type="email"
            label="Correo electrónico"
            name="email"
            placeholder="usuario@correo.com"
            autoComplete="email"
          />
        </FieldSet>
        {directLoginState.type === 'success' && (
          <TextSuccess>
            Se ha enviado un correo electrónico con un enlace temporal
          </TextSuccess>
        )}
        {directLoginState.type === 'error' &&
          typeof directLoginState.error === 'string' && (
            <TextError>{directLoginState.error}</TextError>
          )}
        <Stack spacing={2}>
          <Button
            type="button"
            variant="foreground"
            onClick={() => push('/auth/login', undefined, { shallow: true })}
          >
            Volver
          </Button>
          <Button
            fullWidth
            type="submit"
            disabled={directLoginState.type === 'loading'}
          >
            {directLoginState.type === 'loading' ? (
              <Spinner />
            ) : (
              'Generar enlace temporal'
            )}
          </Button>
        </Stack>
      </Stack>
    </Formik>
  );
};

export default DirectLoginForm;
