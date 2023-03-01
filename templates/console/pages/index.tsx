import { IndexPageView } from '@danielwii/asuna-admin/dist/common/index.page';
import { PanesState, useSharedPanesGlobalValue } from '@danielwii/asuna-admin/dist/store/panes.global';
import useLogger from '@danielwii/asuna-helper/dist/logger/hooks';

import React from 'react';
import useEffectOnce from 'react-use/lib/useEffectOnce';
import useLocalStorage from 'react-use/lib/useLocalStorage';

import { register } from '../services/register';

const IndexPage: React.FC = () => {
  // const register = require('../services/register').register;

  const [value] = useLocalStorage<PanesState>('menus');
  const [_, panesStateSetter] = useSharedPanesGlobalValue();

  useEffectOnce(() => {
    if (value) panesStateSetter(value);
  });

  useLogger('<[index-page]>', register);

  return <IndexPageView register={register} />;
};

export default IndexPage;
