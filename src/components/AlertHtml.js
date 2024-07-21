// src/components/AlertHtml.js
import React, { useEffect } from 'react';

const AlertHtml = () => {
  useEffect(() => {
    fetch('/alertshe.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('alert-html').innerHTML = data;
      });
  }, []);

  return <div id="alert-html"></div>;
};

export default AlertHtml;
