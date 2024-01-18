// TransitionRoutes.js

import React from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const TransitionRoutes = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page-transition" timeout={300}>
        <Routes location={location}>{children}</Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionRoutes;
