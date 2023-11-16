import { Stack, Typography } from '@mui/material';

import { Page } from '@/components/functional';

export default function Home() {
  return (
    <Page>
      <Stack
        sx={{
          padding: 2,
          maxWidth: '800px',
          width: '100%',
          margin: 'auto',
          my: 5,
        }}
      >
        <Typography my={2} variant="h1">
          Welcome to Next.js sample app.
        </Typography>

        <ul>
          <li>Next.js（PagesRouter） v14.0</li>
          <li>MaterialUI v5.14</li>
          <li>nprogress</li>
          <li>ESLint</li>
          <li>Prettier</li>
          <li>VSCode settings</li>
          <li>locale settings</li>
        </ul>
      </Stack>
    </Page>
  );
}
