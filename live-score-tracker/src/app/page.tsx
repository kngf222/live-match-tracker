import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const startMatch = async () => {
    try {
      const response = await axios.post('/api/start_match', { player1, player2 });
      const matchId = response.data.id;
      window.location.href = `/match/${matchId}`;
    } catch (error) {
      console.error('Failed to start match', error);
    }
  };

  return (
    <div>
      <h1>Welcome to Live Score Tracker</h1>
      <input value={player1} onChange={(e) => setPlayer1(e.target.value)} placeholder="Player 1" />
      <input value={player2} onChange={(e) => setPlayer2(e.target.value)} placeholder="Player 2" />
      <button onClick={startMatch}>Start Match</button>
    </div>
  );
}
