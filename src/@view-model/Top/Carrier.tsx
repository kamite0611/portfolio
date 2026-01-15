import { Stack } from '@mui/material';

type CarrierProps = {};

const carriers = {
  '2025': [
    {
      date: '2025/9 ~ 2026/1',
      title: '起業',
      comment: <>役割: CTO</>,
    },
  ],
  '2024': [
    {
      date: '2024/11 ~ 2025/9',
      title: '富裕層向けマッチングアプリの開発',
      comment: (
        <>
          役割: フリーランス
          <br />
          言語: Next.js / ReactNative / NestJS / GraphQL / GCP
        </>
      ),
    },
  ],
  '2023': [
    {
      date: '2022/08 ~ 2024/11',
      title: 'ふるさと納税管理サービス',
      comment: (
        <>
          役割: フリーランス
          <br />
          言語: Next.js / FireStore / Graphql / GCP
        </>
      ),
    },
  ],
  '2021': [
    {
      date: '2021/11 ~ 2022/6',
      title: 'ショート動画配信サービス',
      comment: (
        <>
          役割: 正社員
          <br />
          言語: React / Vue.js / Ruby on Rails
        </>
      ),
    },
  ],
  '2019': [
    {
      date: '2019/09 ~ 2021/03',
      title: '美容室予約サービス',
      comment: (
        <>
          役割: 正社員
          <br />
          言語: Ruby on Rails / Vue.js
        </>
      ),
    },
  ],
};

export const Carrier = (props: CarrierProps) => {
  return (
    <Stack direction="column-reverse">
      {Object.entries(carriers).map(([year, works], pi) => {
        return (
          <Stack key={year} direction="row">
            <Stack
              sx={{
                fontSize: '18px',
                lineHeight: '26px',
                fontWeight: 'bold',
              }}
            >
              {year}
            </Stack>
            <Stack sx={{ paddingLeft: '20px' }}>
              {works.map((work, i) => (
                <Stack
                  key={i}
                  sx={{
                    position: 'relative',
                    paddingLeft: '40px',
                    paddingBottom: '20px',
                    '&:last-child': {
                      paddingBottom: '50px',
                    },
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#9ab8c2',
                      borderRadius: '50%',
                      top: '8px',
                      left: '8px',
                    },
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      height: 'calc(100% - 20px)',
                      width: '2px',
                      backgroundColor: '#9ab8c2',
                      left: '11px',
                      bottom: '-2px',
                    },
                  }}
                >
                  <Stack
                    sx={{
                      fontWeight: 'bold',
                      fontSize: { xs: '16px' },
                      lineHeight: '26px',
                    }}
                  >
                    {work.title}
                  </Stack>
                  <Stack
                    sx={{
                      color: '#b9b9b9',
                      fontSize: '10px',
                    }}
                  >
                    {work.date}
                  </Stack>
                  <Stack mt="2px" sx={{ fontSize: '11px' }}>
                    {work.comment}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};
