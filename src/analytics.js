// src/analytics.js
import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-W7FF56KEJ7'); // Replace with your Tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
