import React, {Fragment, fragment} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./Font.css"
import Trending from './component/trendingAll/index';
import TrendingMovie from './component/trendingMovie/list';
import TrendingTv from './component/trendingTV';
import TrendingPerson from './component/person';
import { GlobalStyle } from './styles/globalStyles';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <GlobalStyle/>
    <Trending>
    </Trending>
    <TrendingMovie/>
    <TrendingTv/>
    <TrendingPerson/>
  </Fragment>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
