/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/html-has-lang, @next/next/no-head-element, @next/next/no-page-custom-font */
import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

interface MailLayoutProps {
  children: ReactNode;
  title: string;
}

const MailLayout = ({ children, title }: MailLayoutProps) => (
  <html>
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <table
        cellSpacing={0}
        cellPadding={0}
        style={{
          width: '100%',
          maxWidth: '980px',
          margin: '0',
          borderCollapse: 'collapse',
        }}
      >
        <Header title={title} />
        <tbody>
          <table
            cellSpacing={0}
            cellPadding={0}
            style={{ padding: '32px 16px' }}
          >
            {children}
          </table>
        </tbody>
        <Footer />
      </table>
    </body>
  </html>
);

export default MailLayout;
