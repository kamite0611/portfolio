import { Stack } from '@mui/material';

type CarrierProps = {};

const carriers = {
  '2023': [
    {
      date: '2022/08 ~ ',
      title: 'ふるさと納税管理サービス',
      comment: (
        <>
          役割: フリーランス
          <br />
          言語: Next.js / FireStore / Graphql / GCP
        </>
      ),
    },
    {
      date: '2022/07 ~ 2023/06',
      title: 'LINEマーケティングツール',
      comment: (
        <>
          役割: フリーランス
          <br />
          言語: Ruby on Rails / Elixir / Vue.js / AWS
        </>
      ),
    },
  ],
  '2022': [
    {
      date: '2022/07 ~ 2023/09',
      title: '美容室管理サービス',
      comment: (
        <>
          役割: CTO
          <br />
          言語: React / NestJS / Hasura / GCP
        </>
      ),
    },
    {
      date: '2021/08 ~ 2022/06',
      title: 'ショート動画配信サービス',
      comment: (
        <>
          役割: フリーランス
          <br />
          言語: React / Vue.js / Ruby on Rails
        </>
      ),
    },
  ],
  '2021': [
    {
      date: '2021/06 ~ 2021/11',
      title: 'チャットボット開発',
      comment: (
        <>
          役割: 正社員
          <br />
          言語: Node.js / React
        </>
      ),
    },
    {
      date: '2019/09 ~ 2021/06',
      title: '美容室予約サービス',
      comment: (
        <>
          役割: 正社員
          <br />
          言語: Ruby on Rails / Vue.js{' '}
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
