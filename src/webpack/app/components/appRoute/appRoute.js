import React from 'react';
import { useLocation } from '@reach/router';
import { Footer } from '../footer/footer';

export const AppRoute = ({ child, katacodaLayout, title, hasFooter = process.env.hasFooter }) => {
  const location = useLocation();

  if (window?.gtag) {
    window.gtag('config', 'UA-47523816-6', {
      page_path: location.pathname,
      page_title: title || location.pathname
    });
  }

  return (
    <React.Fragment>
      {child}
      {!katacodaLayout && hasFooter && <Footer />}
    </React.Fragment>
  );
};
