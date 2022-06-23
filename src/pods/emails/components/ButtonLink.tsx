import { ReactNode } from 'react';

import theme from '@/styles/theme';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  bg?: keyof typeof theme['colors'];
  color?: keyof typeof theme['colors'];
  pb?: number;
  pt?: number;
  pl?: number;
  pr?: number;
}

const ButtonLink = ({
  href,
  children,
  bg = 'primary',
  color = 'bg',
  pb,
  pt,
  pl,
  pr,
}: ButtonLinkProps) => (
  <th>
    <div
      style={{
        ...(pt && { marginTop: pt }),
        ...(pl && { marginLeft: pl }),
        ...(pr && { marginRight: pr }),
        ...(pb && { marginBottom: pb }),
      }}
    >
      <a
        href={href}
        target="_blank"
        style={{
          padding: '8px 16px',
          width: 250,
          verticalAlign: 'middle',
          textAlign: 'center',
          display: 'block',
          textShadow: '0px 1px 1px #333',
          backgroundColor: theme.colors[bg],
          textDecoration: 'none',
          borderRadius: theme.radii[3],
          color: theme.colors[color],
          textTransform: 'uppercase',
        }}
        rel="noreferrer"
      >
        {children}
      </a>
    </div>
  </th>
);

export default ButtonLink;
