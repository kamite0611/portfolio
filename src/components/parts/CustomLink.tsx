import Link from 'next/link';
import { ReactNode } from 'react';

import { styled } from '@mui/material';

import { MUIStyledCommonProps } from '@/common/type';

type LinkMode = 'initial' | 'noStyle' | 'underline';

type BasicProps = MUIStyledCommonProps & {
  href: string;
  mode?: LinkMode;
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
  children?: ReactNode;
};

type CustomLinkProps = BasicProps;

const StyledLink = styled(Link)(({ theme }) => ({}));

export const CustomLink = ({ mode = 'initial', ...other }: CustomLinkProps) => {
  const props = { mode, ...other } as CustomLinkProps;

  switch (props.mode) {
    case 'initial': {
      return <StyledLink {...props} />;
    }
    case 'noStyle': {
      return (
        <StyledLink
          style={{ textDecoration: 'none', color: '#000' }}
          {...props}
        />
      );
    }
    case 'underline': {
      return (
        <StyledLink
          style={{
            textDecoration: 'underline',
            color: '#000',
          }}
          {...props}
        />
      );
    }
  }
};
