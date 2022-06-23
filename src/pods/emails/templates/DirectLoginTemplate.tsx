import ButtonLink from '../components/ButtonLink';
import MailLayout from '../components/MailLayout';
import Text from '../components/Text';

interface DirectLoginTemplateProps {
  url: string;
  name: string;
}

export const getTitle = () => 'Acceso sin contraseña';

const DirectLoginTemplate = ({ url, name }: DirectLoginTemplateProps) => (
  <MailLayout title={getTitle()}>
    <tr>
      <Text pb={32}>
        Hola {name}, se ha generado un enlace de acceso temporal
      </Text>
    </tr>
    <tr>
      <ButtonLink href={url}>Acceder</ButtonLink>
    </tr>
  </MailLayout>
);

export default DirectLoginTemplate;
