import { LoginInitialProps, LoginPageRender, wechatLoginGetInitial } from 'asuna-admin';
import { NextComponentType } from 'next';
import getConfig from 'next/config';
import { NextPageContext } from 'next/dist/next-server/lib/utils';
import React from 'react';
import { register } from '../services/register';

const Page: NextComponentType<NextPageContext, Promise<LoginInitialProps>, LoginInitialProps> = props => (
  <LoginPageRender {...props} register={register} nextConfig={getConfig()} hideCharacteristics={true} />
);
Page.getInitialProps = wechatLoginGetInitial;

export default Page;
