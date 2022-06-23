import theme from '@/styles/theme';

import Text from './Text';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => (
  <thead
    style={{
      width: '100%',
      backgroundColor: theme.colors.primary,
      color: theme.colors.bg,
    }}
  >
    <tr>
      <Text padding="16px" shadow size="3" color="bg" bold>
        HDM
      </Text>
    </tr>
    <tr>
      <Text padding="0 16px 16px" size="1" bold color="primary-dark-2">
        {title}
      </Text>
    </tr>
  </thead>
);

export default Header;
