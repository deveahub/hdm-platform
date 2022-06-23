import { HTMLAttributes } from 'react';

import theme from '@/styles/theme';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: keyof typeof theme['fontSizes'];
  bold?: boolean;
  shadow?: boolean;
  color?: keyof typeof theme['colors'];
  pb?: number;
  pt?: number;
  pl?: number;
  pr?: number;
  padding?: number | string;
  minWidth?: number;
}

const Text = ({
  size = '0',
  bold = false,
  shadow = false,
  pb,
  pt,
  pl,
  pr,
  padding,
  minWidth,
  color = 'text',
  ...props
}: TextProps) => (
  <th>
    <p
      {...props}
      style={{
        fontSize: theme.fontSizes[size],
        fontWeight: bold ? 600 : 300,
        textAlign: 'left',
        fontFamily: "'Roboto', sans-serif",
        textShadow: shadow ? '0px 1px 1px #333' : undefined,
        color: theme.colors[color],
        lineHeight: 'normal',
        ...(pt && { paddingTop: pt }),
        ...(pl && { paddingLeft: pl }),
        ...(pr && { paddingRight: pr }),
        ...(pb && { paddingBottom: pb }),
        ...(minWidth && { minWidth }),
        ...(padding && { padding }),
      }}
    />
  </th>
);

export default Text;
