import React from 'react';
import { Board } from './features/board';
import './App.css';

const App = () => {
  return (
    <main className='app-container'>
      <section className='title'>
        <h1>Kanban board</h1>
      </section>
      <section>
        <Board />
      </section>
    </main>
  );
}

export default App;
