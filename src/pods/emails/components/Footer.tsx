import theme from '@/styles/theme';

import Link from './Link';
import Text from './Text';

const Footer = () => (
  <tfoot
    style={{
      width: '100%',
      backgroundColor: theme.colors.foreground,
    }}
  >
    <tr>
      <Text padding="16px" size="-1" pb={16}>
        Este correo electrónico es informativo y puede contener información
        sensible, se recomienda que no se realicen copias ni reenvíos del
        contenido aquí descrito.
      </Text>
    </tr>
    <tr>
      <Text size="-1" padding="0 16px 16px">
        Para más información o consultas relacionadas con este proceso
        escribenos a{' '}
        <Link bold href="mailto:email@email.com">
          email@email.com
        </Link>
      </Text>
    </tr>
  </tfoot>
);

export default Footer;
