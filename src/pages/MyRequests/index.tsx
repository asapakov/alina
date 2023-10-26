import styles from './my-requests.modude.scss';
import React from 'react';
import TableHeader from '../../components/molecules/List/Header';
import TableComponent from '../../components/molecules/List/Table';

const MyRequests = () => {
  return (
    <div>
      <TableHeader />
      <TableComponent />
    </div>
  );
};

export default MyRequests;
