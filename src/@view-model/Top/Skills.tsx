import { ReactNode } from 'react';

import { Stack, styled } from '@mui/material';

import {
  SkillProgress,
  SkillProgressProps,
} from '@/components/elements/SkillProgress';

type SkillsProps = {};

const StyledSubTitle = styled(Stack)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: '500',
  marginBottom: '3px',
}));

export const Skills = (props: SkillsProps) => {
  return (
    <Stack sx={{ padding: { xs: '30px ', lg: '50px' }, gap: 2 }}>
      <Stack>
        <StyledSubTitle>Frontend</StyledSubTitle>
        <SkillDetail
          comment={
            <>
              React・TypeScriptを使用した開発を得意としています。
              <br />
              SPA開発での管理画面や、SSGを用いたSEO対策など、アプリの環境問わず開発できると自負しております。
            </>
          }
          skills={[
            { lang: 'react', value: 100 },
            { lang: 'nextjs', value: 100 },
            { lang: 'reactnative', value: 75 },
            { lang: 'flutter', value: 75 },
          ]}
        />
      </Stack>
      <Stack>
        <StyledSubTitle>Backend</StyledSubTitle>
        <SkillDetail
          comment={
            <>
              フロントエンドがSPAの場合やチャットボットなどさまざまなアプリのバックエンドを構築してきました。
              <br />
              NestJS,Express,Railsを実務で経験し、高いレベルでの理解があると自負しております。
            </>
          }
          skills={[
            { lang: 'node', value: 75 },
            { lang: 'nestjs', value: 75 },
            { lang: 'rails', value: 75 },
            { lang: 'laravel', value: 50 },
          ]}
        />
      </Stack>
      <Stack>
        <StyledSubTitle>Infrastructure</StyledSubTitle>
        <SkillDetail
          comment={
            <>
              主にGCPをベースとしたインフラ構築の経験があります。
              <br />
              シンプルなアプリケーションや、Dockerを用いて、GKE, Cloud
              Runを用いた、オートスケーリング、ローリングアップデートの実装も学んできました。
            </>
          }
          skills={[
            { lang: 'gcp', value: 90 },
            { lang: 'aws', value: 50 },
            { lang: 'terraform', value: 50 },
          ]}
        />
      </Stack>
      <Stack>
        <StyledSubTitle>Other</StyledSubTitle>
        <SkillDetail
          comment={
            <>
              Auth0,FirebaseAuth
              を用いた認証システムの構築や、Stripeを用いた決済システムなど、さまざまなソフトウェアを用いたシステム開発を経験してきました。
            </>
          }
          skills={[
            { lang: 'docker', value: 90 },
            { lang: 'firebase', value: 90 },
            { lang: 'graphql', value: 50 },
          ]}
        />
      </Stack>
    </Stack>
  );
};

type SkillDetailProps = {
  comment: ReactNode;
  skills: SkillProgressProps[];
};

export const SkillDetail = ({ comment, skills }: SkillDetailProps) => {
  return (
    <>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        sx={{
          flexDirection: { xs: 'column', lg: 'row' },
          gap: 2,
          maxWidth: '700px',
          padding: '20px',
          borderRadius: '16px',
          backgroundColor: '#f8f8f8',
        }}
      >
        <Stack sx={{ fontSize: '12px' }}>{comment}</Stack>
        <Stack direction="row">
          {skills.map(({ lang, value }, i) => (
            <SkillProgress key={i} lang={lang} value={value} />
          ))}
        </Stack>
      </Stack>
    </>
  );
};
