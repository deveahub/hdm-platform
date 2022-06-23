import MailLayout from '../components/MailLayout';
import Summary from '../components/Summary';
import Text from '../components/Text';

interface NewUserTemplateProps {
  name: string;
  surname: string;
  phone: string;
  email: string;
  alias: string;
  password: string;
}

export const getTitle = ({ name }: NewUserTemplateProps) =>
  `Bienvenid@ ${name}`;

const NewUserTemplate = (props: NewUserTemplateProps) => {
  const { name, surname, phone, email, alias, password } = props;
  return (
    <MailLayout title={getTitle(props)}>
      <tr>
        <Text pb={16}>
          Hola {name}, aquí tienes información sobre tu usuario.
        </Text>
      </tr>
      <tr>
        <Text bold pb={32}>
          ¡No compartas esta información!
        </Text>
      </tr>
      <Summary
        items={[
          ['Nombre', name],
          ['Apellidos', surname],
          ['Teléfono', phone],
          ['Correo electrónico', email],
          ['Identificador', alias],
          ['Contraseña', password],
        ]}
      />
    </MailLayout>
  );
};

export default NewUserTemplate;
