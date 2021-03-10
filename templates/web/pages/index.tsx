import { NextComponentType, NextPageContext } from 'next';

type InitialProps = {};

const IndexView: NextComponentType<NextPageContext, Promise<InitialProps>, InitialProps> = () => {
  return <div>hello world</div>;
};

export default IndexView;
