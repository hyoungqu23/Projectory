import reset from '../../styles/reset';
import { Global } from '@emotion/react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Global styles={reset}>
      <Header />
      <div>{children}</div>
      <Footer />
    </Global>
  );
};

export default Layout;
