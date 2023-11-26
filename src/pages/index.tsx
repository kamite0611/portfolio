import { motion } from 'framer-motion';

import { Stack } from '@mui/material';

import { Carrier, PersonalProductList } from '@/@view-model/Top';
import { Myself } from '@/@view-model/Top/Myself';
import { Skills } from '@/@view-model/Top/Skills';
import { Page } from '@/components/functional';

export default function Home() {
  return (
    <Page config={{ title: 'KAMITE.ME' }}>
      <Stack
        flexGrow={1}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        {/* 自己紹介 */}
        <Myself />

        <Stack
          flexGrow={1}
          sx={{
            width: { xs: '100%', sm: '60%' },
            height: { sm: '100vh' },
            overflow: { sm: 'scroll' },
          }}
        >
          {/* 個人開発 */}
          <PersonalProductList />

          <Stack sx={{ padding: { xs: '30px ', sm: '50px' } }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Carrier />
            </motion.div>
          </Stack>

          <Stack>
            <Skills />
          </Stack>
        </Stack>
      </Stack>
    </Page>
  );
}
