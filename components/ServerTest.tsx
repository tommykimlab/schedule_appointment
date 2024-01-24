'use client'

import React, { useState, useEffect } from 'react';

const ServerTest = () => {
  const [helloMessage, setHelloMessage] = useState('');
  const [dataMessage, setDataMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.text())
      .then((data) => setHelloMessage(data))
      .catch((error) => console.error('Error fetching hello message:', error));

    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setDataMessage(JSON.stringify(data)))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <p>Hello Message: {helloMessage}</p>
      <p>Data Message: {dataMessage}</p>
    </div>
  );
};

export default ServerTest;
