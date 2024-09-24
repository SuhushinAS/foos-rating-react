import {Footer} from 'modules/layout/components/Footer';
import React from 'react';
import './Layout.less';

type TLayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({children}: TLayoutProps) => {
  return (
    <div className="Layout">
      <main className="Layout__Body">{children}</main>
      <footer className="Layout__Footer">
        <Footer />
      </footer>
    </div>
  );
};
