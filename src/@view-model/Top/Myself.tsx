import { motion } from 'framer-motion';

import { Stack } from '@mui/material';

import { CustomImage } from '@/components/parts/CustomImage';
import { CustomLink } from '@/components/parts/CustomLink';

type MyselfProps = {};

export const Myself = (props: MyselfProps) => {
  return (
    <Stack
      sx={{
        flexGrow: { xs: 0, sm: 1 },
        width: { xs: '100%', sm: '33%' },
        padding: { xs: '30px ', sm: '24px', lg: '30px' },
        // maxWidth: { sm: '400px' },
        alignItems: { sm: 'end' },
        backgroundColor: '#57717a',
        color: '#fff',
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Stack sx={{ maxWidth: '330px' }}>
          <Stack direction="row" alignItems="center" gap={'10px'}>
            <CustomImage src="/images/me.jpg" mode="circle" size={50} />
            <Stack>
              <Stack sx={{ fontSize: '18px', fontWeight: '500' }}>
                上手 旭
              </Stack>
              <Stack sx={{ fontSize: '14px' }}>akira kamite</Stack>
            </Stack>
          </Stack>
          <Stack sx={{ mt: 4, fontSize: '12px' }}>
            ソフトウェアエンジニア
            <br />
            チームでのものづくりが好き。
            <br />
            趣味程度に気になった技術を使って個人開発してます。
          </Stack>
          <Stack sx={{ mt: 4, fontSize: '12px' }}>
            <b>最近の趣味</b>
            Go, 強化学習, IoT
          </Stack>
          <Stack sx={{ mt: 3, fontSize: '12px' }}>
            <b>好きな技術</b>
            TypeScript, GCP
          </Stack>
          <Stack direction="row" mt={4} gap={1}>
            <CustomLink
              href="https://twitter.com/kamite0611"
              target="_blank"
              mode="noStyle"
              sx={{
                width: '40px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                borderRadius: 1,
              }}
            >
              <CustomImage src="/images/icons/twitter.svg" size={20} />
            </CustomLink>
            <CustomLink
              href="https://github.com/kamite0611"
              target="_blank"
              mode="noStyle"
              sx={{
                width: '40px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: 1,
              }}
            >
              <CustomImage src="/images/icons/github.svg" size={28} />
            </CustomLink>
            <CustomLink
              href="https://zenn.dev/kamite"
              target="_blank"
              mode="noStyle"
              sx={{
                width: '110px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: 1,
              }}
            >
              <CustomImage
                src="/images/icons/zenn.png"
                mode="contain"
                width={88}
                height={22}
              />
            </CustomLink>
          </Stack>
        </Stack>
      </motion.div>
    </Stack>
  );
};
