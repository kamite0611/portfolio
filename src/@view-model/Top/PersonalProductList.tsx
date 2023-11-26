import { ReactNode } from 'react';

import { motion } from 'framer-motion';

import { Box, Stack } from '@mui/material';

import { CustomImage } from '@/components/parts/CustomImage';
import { CustomLink } from '@/components/parts/CustomLink';

type PersonalProductListProps = {};

export const PersonalProductList = (props: PersonalProductListProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Stack
          sx={{
            padding: { xs: '30px ', lg: '50px' },
            gap: '80px',
          }}
        >
          <PersonalProductItem
            date="2023/10 ~"
            description="FlutterのWidgetサンプル図鑑"
            title="Flutter図鑑"
            tech={['Next.js', 'Flutter', 'Vercel']}
            comment={
              <>
                個人開発。
                Flutter図鑑はFlutterから提供されているWidgetサンプルが集まった情報メディアです。
              </>
            }
            logoUrl="/images/flutter-gallery/logo.png"
            productUrl="https://www.flutter-gallery.com/"
          />

          <PersonalProductItem
            date="2023/8 ~"
            description="シーシャバー検索サービス"
            title="HelloChill"
            tech={['Next.js', 'Prisma', 'Firebase', 'Vercel']}
            comment={
              <>
                個人開発。
                都内のシーシャバーをさまざまな条件で検索できるサービスです。
              </>
            }
            logoUrl="/images/hello-chill/logo.png"
            productUrl="https://www.hello-chill.com/"
          />
        </Stack>
      </motion.div>
    </>
  );
};

type PersonalProductProps = {
  date: string;
  description: string;
  title: string;
  tech: string[];
  comment: ReactNode;
  logoUrl: string;
  productUrl: string;
};

export const PersonalProductItem = ({
  date,
  description,
  title,
  tech,
  comment,
  logoUrl,
  productUrl,
}: PersonalProductProps) => {
  const techText = tech.join(' / ');

  return (
    <>
      <Stack
        sx={{
          gap: '20px',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: { lg: 'center' },
        }}
      >
        <Stack sx={{ width: { lg: '500px' } }}>
          <Stack
            sx={{
              fontSize: '11px',
              color: '#57717ac9',
              fontWeight: 'bold',
              flexDirection: 'row',
            }}
          >
            {date}
          </Stack>
          <Stack sx={{ fontSize: '11px' }}>{description}</Stack>
          <Stack my={2} sx={{ fontSize: '30px', fontWeight: 'bold' }}>
            <CustomLink
              href={productUrl}
              target="_blank"
              mode="noStyle"
              sx={{
                '&:hover': {
                  textDecoration: 'underline !important',
                },
              }}
            >
              {title}
            </CustomLink>
          </Stack>
          <Box sx={{ fontSize: '12px', fontWeight: 'bold' }}>TECH</Box>
          <Stack sx={{ fontSize: '11px' }}>{techText}</Stack>
          <Box mt={2} sx={{ fontSize: '12px', fontWeight: 'bold' }}>
            COMMENT
          </Box>
          <Stack mt={'2px'} sx={{ fontSize: '11px' }}>
            {comment}
          </Stack>
        </Stack>
        <CustomLink href={productUrl} target="_blank">
          <CustomImage
            mode="contain"
            src={logoUrl}
            width={400}
            height={300}
            sx={{
              width: { xs: '100%', lg: '400px' },
              border: '1px solid #57717a',
              borderRadius: 1,
              height: { xs: '200px', lg: '240px' },
              cursor: 'pointer',
            }}
          />
        </CustomLink>
      </Stack>
    </>
  );
};
