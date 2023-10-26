import React from 'react';
import { links } from './common/constants';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { type ILink } from './components/Sidebar/interface';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          {links.map((link: ILink) => (
            <Route
              key={link.route}
              path={link.route}
              element={link.element()}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
