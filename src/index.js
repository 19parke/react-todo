import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // 스크립트 모드의 역할은 리액트에서 한 번더 랜더링(2번)
  // 테스트모드이다
  // 2번 랜더링 되었다는 것은 정상적인 코드라는 것이다. 
  // 2번 콘솔에 찍어주는 것은 스크립트 모드에서 2번찍어주는 것(버츄얼 돔이 아니라)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
