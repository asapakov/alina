import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { Link, useLocation } from 'react-router-dom';
import { links } from '../../common/constants';
import { type ILink } from './interface';
import styles from './sidebar.module.scss';
import logo from '../../assets/images/logo.svg';
import { showSidebar, hideSidebar } from '../../store/redux/actions';

const Sidebar = () => {
  const { t } = useTranslation();
  const { isSidebarOpen } = useAppSelector((state: any) => state.app);
  const dispatch = useAppDispatch();
  const activeRoute = useCallback(
    (route: string) => route === window.location.pathname,
    [useLocation()],
  );

  const linkCn = (route: string) => {
    return activeRoute(route) ? styles.linkActive + ' ' + styles.link : styles.link;
  };

  const LinkComponent = ({ route, title, icon }: ILink): JSX.Element => {
    return (
      <Link to={route} key={title}>
        <div className={linkCn(route)}>
          <img src={icon} alt="logo" />
          {t(title)}
        </div>
      </Link>
    );
  };

  return (
    <div>
      <div className={styles.logo}>
        <img src={logo} alt="alina-logo" />
      </div>
      {links.map(LinkComponent)}
    </div>
  );
};

export default Sidebar;
