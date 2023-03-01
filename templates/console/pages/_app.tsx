// import 'antd/dist/antd.css';
import 'react-quill/dist/quill.snow.css';
// import 'braft-editor/dist/index.css';
// import 'braft-extensions/dist/color-picker.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
// import '@ant-design/compatible/assets/index.css';
import 'draft-js/dist/Draft.css';
import 'highlight.js/styles/default.css';

import React from 'react';

import 'react-image-crop/dist/ReactCrop.css';
import 'spinkit/spinkit.css';
import 'video.js/dist/video-js.css';

import type { AppProps } from 'next/app';

export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
