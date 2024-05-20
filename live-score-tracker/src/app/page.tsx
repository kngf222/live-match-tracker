import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [message, setMessage] = useState('');
  const [matchId, setMatchId] = useState<string | null>(null);

  const startMatch = async () => {
    try {
      const response = await axios.post('/api/start_match', { player1, player2 });
      setMatchId(response.data.id);  // Store the match ID for later use
      setMessage('Match started successfully');
    } catch (error) {
      setMessage('Failed to start match');
    }
  };

  const updateScore = async (player: 'player1' | 'player2', newScore: number) => {
    try {
      await axios.post('/api/update_score', { player, newScore, player1, player2 });
      setMessage('Score updated successfully');
    } catch (error) {
      setMessage('Failed to update score');
    }
  };

  return (
    <div className="container">
      <h1>Welcome to Live Score Tracker</h1>
      <input
        type="text"
        placeholder="Player 1"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Player 2"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
      />
      <button onClick={startMatch}>Start Match</button>
      <p>{message}</p>

      {matchId && (
        <div>
          <h2>Match ID: {matchId}</h2>
          <button onClick={() => updateScore('player1', 1)}>Player 1 +</button>
          <button onClick={() => updateScore('player1', -1)}>Player 1 -</button>
          <button onClick={() => updateScore('player2', 1)}>Player 2 +</button>
          <button onClick={() => updateScore('player2', -1)}>Player 2 -</button>
        </div>
      )}
    </div>
  );
};

export default Home;
