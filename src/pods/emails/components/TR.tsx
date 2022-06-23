import { ReactNode } from 'react';

interface TRProps {
  pb?: number;
  pt?: number;
  pl?: number;
  pr?: number;
  children: ReactNode;
}

const TR = ({ pb, pt, pl, pr, children }: TRProps) => (
  <tr
    style={{
      ...(pt && { paddingTop: pt }),
      ...(pl && { paddingLeft: pl }),
      ...(pr && { paddingRight: pr }),
      ...(pb && { paddingBottom: pb }),
    }}
  >
    {children}
  </tr>
);

export default TR;
