import { Outlet } from 'react-router-dom';
import React from 'react';
import Sidebar from '../Sidebar';
import styles from './layout.module.scss';
import Header from '../Header';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.content}>
        <Header />
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
