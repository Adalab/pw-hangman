import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
=======
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
>>>>>>> 974905e03481e80ac88aab392032e0242a3c8d12
);

