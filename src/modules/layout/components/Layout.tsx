import {Footer} from 'modules/layout/components/Footer';
import {Header} from 'modules/layout/components/Header';
import React from 'react';
import './Layout.less';

type TLayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({children}: TLayoutProps) => {
  return (
    <div className="Layout">
      <header className="Layout__Header">
        <Header />
      </header>
      <main className="Layout__Body">{children}</main>
      <footer className="Layout__Footer">
        <Footer />
      </footer>
    </div>
  );
};
