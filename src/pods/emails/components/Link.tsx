import { ReactNode } from 'react';

import theme from '@/styles/theme';

interface LinkProps {
  href: string;
  children: ReactNode;
  underline?: boolean;
  bold?: boolean;
}

const Link = ({
  href,
  children,
  underline = false,
  bold = false,
}: LinkProps) => (
  <a
    style={{
      textDecoration: underline ? 'underline' : 'none',
      color: theme.colors['primary-dark-2'],
      fontWeight: bold ? 'bold' : 'normal',
    }}
    href={href}
  >
    {children}
  </a>
);

export default Link;
