import React, { useMemo } from 'react';
import styles from './header.module.scss';
import { useLocation } from 'react-router-dom';
import { links } from '../../common/constants';
import { type ILink } from '../Sidebar/interface';
import { useTranslation } from 'react-i18next';
import notification from '../../assets/images/notification.svg';
import LanguageSelect from './LanguageSelect';
import { useAppSelector } from '../../store/redux';

const Header = () => {
  const { t } = useTranslation();
  const title = useMemo(
    () => links.find((l: ILink) => l.route === window.location.pathname).header,
    [useLocation()],
  );
  const { avatarUrl, fullName } = useAppSelector((state: any) => state.user);
  // getting user's data from store after success login

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <p>{t(title)}</p>
      </div>
      <div className={styles.profile}>
        <LanguageSelect />
        <div>
          <img src={notification} alt="notification" />
        </div>
        <div className={styles.auth}>
          <img src={avatarUrl} alt="avatar" />
          <p>{fullName}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
