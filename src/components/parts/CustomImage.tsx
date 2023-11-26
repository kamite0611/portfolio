import Image from 'next/image';
import React from 'react';

import { styled } from '@mui/material';

import { MUIStyledCommonProps } from '@/common/type';

type BaseImageProps = MUIStyledCommonProps & {
  src: string;
  alt?: string;
};

type SquareImageProps = BaseImageProps & {
  mode?: 'square';
  size: number;
};

type CircleImageProps = BaseImageProps & {
  mode?: 'circle';
  size: number;
};

type ContainImageProps = BaseImageProps & {
  mode: 'contain';
  width: number;
  height: number;
};

type CoverImageProps = BaseImageProps & {
  mode: 'cover';
  width: number;
  height: number;
};

type CustomImageProps =
  | SquareImageProps
  | ContainImageProps
  | CircleImageProps
  | CoverImageProps;

const StyledImage = styled(Image)(({ theme }) => ({}));

export const CustomImage = ({
  alt = '',
  mode = 'square',
  ...other
}: CustomImageProps) => {
  const props = { alt, mode, ...other } as CustomImageProps & {
    alt: string;
  };

  switch (props.mode) {
    case 'square': {
      const { size } = props;
      return (
        <StyledImage
          width={size}
          height={size}
          style={{ objectFit: 'cover' }}
          {...props}
        />
      );
    }
    case 'circle': {
      const { size } = props;
      return (
        <StyledImage
          width={size}
          height={size}
          style={{ objectFit: 'cover', borderRadius: '50%' }}
          {...props}
        />
      );
    }
    case 'contain': {
      return <StyledImage style={{ objectFit: 'contain' }} {...props} />;
    }
    case 'cover': {
      return <StyledImage style={{ objectFit: 'cover' }} {...props} />;
    }
  }
};
