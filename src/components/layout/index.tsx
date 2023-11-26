import { ReactNode } from 'react';

import { Stack } from '@mui/material';

import { useTransition } from '@/common/hooks';

type LayoutProps = {
  children: ReactNode;
  transition?: boolean;
};

export const Layout = ({ children, transition = true }: LayoutProps) => {
  useTransition({ disable: !transition });
  return <Stack sx={{ height: '100%', minHeight: '100vh' }}>{children}</Stack>;
};
