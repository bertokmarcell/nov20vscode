import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import { KarakterProvide } from "./KarakterContext/KarakterContext";
import Karakterek from "./components/Karakterek";

export default function App() {
  return (
    <KarakterProvide>
      <Karakterek />
    </KarakterProvide>
  );
}