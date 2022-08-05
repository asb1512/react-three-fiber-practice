import React, { useState } from 'react';
import ThreeD from './ThreeD';
import Welcome from './Welcome';
import './App.css';

export default function App() {
  const [active, setActive] = useState(0);

  return (
    <>
      <ThreeD active={active} setActive={setActive} />
      <Welcome active={active} />
    </>
  );
}
