import useLogger from '@danielwii/asuna-helper/dist/logger/hooks';

import { LoginPageRender } from '@danielwii/asuna-admin/dist/common/login.page';

import getConfig from 'next/config';
import React from 'react';

import type { NextPage } from 'next';

const LoginPage: NextPage = (props) => {
  const register = require('../services/register').register;

  useLogger('<[login-page]>', props, register);

  return <LoginPageRender {...props} register={register} nextConfig={getConfig()} hideCharacteristics={true} />;
};
// Page.getInitialProps = wechatLoginGetInitial;

export default LoginPage;
