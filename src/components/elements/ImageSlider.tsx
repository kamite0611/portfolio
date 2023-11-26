import { Stack } from '@mui/material';

import { CustomImage } from '../parts/CustomImage';

type ImagesSliderProps = {
  images: string[];
};

export const ImagesSlider = ({ images }: ImagesSliderProps) => {
  return (
    <Stack sx={{ position: 'relative', width: '500px', height: '300px' }}>
      {images.map((image, i) => (
        <CustomImage
          key={i}
          mode="cover"
          src={image}
          width={500}
          height={300}
          sx={{ position: 'absolute' }}
        />
      ))}
    </Stack>
  );
};
