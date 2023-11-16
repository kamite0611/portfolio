import { ReactNode } from 'react';

import { Page } from '../functional';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return <Page>{children}</Page>;
};
