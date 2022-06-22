import { ComponentProps } from '@stitches/react';
import { useField, useFormikContext } from 'formik';
import { useId } from 'react';

import CheckBox from '../CheckBox';
import Stack from '../Stack';
import TextError from '../TextError';

interface FormCheckBoxProps extends ComponentProps<typeof CheckBox> {
  label?: string;
  name: string;
  CustomCheckBox?: typeof CheckBox;
}

const FormCheckBox = ({
  CustomCheckBox = CheckBox,
  name,
  label,
  ...props
}: FormCheckBoxProps) => {
  const { submitCount } = useFormikContext();
  const [field, meta] = useField(name);
  const id = useId();

  const error =
    (Boolean(submitCount) || meta.touched) && meta.error ? meta.error : null;

  return (
    <Stack direction="column" spacing={1}>
      <Stack spacing={1} alignItems="center">
        <CustomCheckBox
          css={{
            ...(error && { borderColor: '$red-dark-0' }),
          }}
          {...props}
          {...field}
          id={id}
        />
        {label && <label htmlFor={id}>{label}</label>}
      </Stack>
      {error && <TextError>{error}</TextError>}
    </Stack>
  );
};

export default FormCheckBox;
