import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [matchId, setMatchId] = useState(null);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const startMatch = async () => {
    try {
      const response = await axios.post('/api/start_match', { player1, player2 });
      setMatchId(response.data.matchId);
    } catch (error) {
      console.error('Failed to start match', error);
    }
  };

  const updateScore = async (player: string, newScore: number) => {
    try {
      await axios.post('/api/update_score', { matchId, player, newScore });
      if (player === 'player1') {
        setScore1(newScore);
      } else {
        setScore2(newScore);
      }
    } catch (error) {
      console.error('Failed to update score', error);
    }
  };

  if (matchId) {
    return (
      <div>
        <h1>Match {matchId}</h1>
        <div>
          <h2>{player1}: {score1}</h2>
          <button onClick={() => updateScore('player1', score1 + 1)}>+</button>
          <button onClick={() => updateScore('player1', score1 - 1)}>-</button>
        </div>
        <div>
          <h2>{player2}: {score2}</h2>
          <button onClick={() => updateScore('player2', score2 + 1)}>+</button>
          <button onClick={() => updateScore('player2', score2 - 1)}>-</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to Live Score Tracker</h1>
      <input type="text" value={player1} onChange={(e) => setPlayer1(e.target.value)} placeholder="Player 1" />
      <input type="text" value={player2} onChange={(e) => setPlayer2(e.target.value)} placeholder="Player 2" />
      <button onClick={startMatch}>Start Match</button>
    </div>
  );
}
