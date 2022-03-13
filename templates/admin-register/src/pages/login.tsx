import { LoginInitialProps, LoginPageRender, wechatLoginGetInitial } from '@danielwii/asuna-admin';

import getConfig from 'next/config';
import React from 'react';

import { register } from '../services/register';

import type { NextPage } from 'next';

const Page: NextPage<LoginInitialProps> = (props) => (
  <LoginPageRender {...props} register={register} nextConfig={getConfig()} hideCharacteristics={true} />
);
Page.getInitialProps = wechatLoginGetInitial;

export default Page;
