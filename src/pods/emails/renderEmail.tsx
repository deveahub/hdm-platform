import { ComponentProps } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import templates from './templates';

const renderEmail = <Name extends keyof typeof templates>(
  name: Name,
  variables: ComponentProps<typeof templates[Name][0]>
) => {
  const Template = templates[name] as any;

  renderToStaticMarkup(<Template {...variables} />);
};

export default renderEmail;
