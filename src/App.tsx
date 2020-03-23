import React from 'react';
import logo from 'logo.svg';
import 'App.css';

export default function () {
  const opts = {
    className: "App-link",
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.<br />
          こんにちはこんにちは！！hoge
        </p>
        <a {...opts}>
          Learn React
        </a>
      </header>
    </div>
  );
}
