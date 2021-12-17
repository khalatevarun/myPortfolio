import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Varun Khalate | Frontend Engineer</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Portfolio website" />
      </Helmet>
      <App />
    </>
  );
};
