import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [matchId, setMatchId] = useState<number | null>(null); // Track match ID
  const [matchUrl, setMatchUrl] = useState<string | null>(null); // Track match URL

  const startMatch = async () => {
    try {
      const response = await axios.post('/api/start_match', { player1, player2 });
      const newMatchId = response.data.id;  // Save the match ID from the response
      setMatchId(newMatchId);
      setScore1(0);
      setScore2(0);
      setMatchUrl(`${window.location.origin}/match/${newMatchId}`);  // Construct match URL
      console.log('Match started:', response.data);
    } catch (error) {
      console.error('Failed to start match:', error);
    }
  };

  const updateScore = async (player: string, newScore: number) => {
    try {
      if (matchId === null) {
        console.error('No matchId available');
        return;
      }
      await axios.post('/api/update_score', { player, newScore, matchId });
      if (player === 'player1') {
        setScore1(newScore);
      } else {
        setScore2(newScore);
      }
    } catch (error) {
      console.error('Failed to update score:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to Live Score Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Player 1 Name"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Player 2 Name"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        />
        <button onClick={startMatch}>Start Match</button>
      </div>
      {matchUrl && (
        <div>
          <p>Match URL: <a href={matchUrl} target="_blank" rel="noopener noreferrer">{matchUrl}</a></p>
        </div>
      )}
      <div>
        <h2>Match Score</h2>
        <div>
          {player1}: {score1}
          <button onClick={() => updateScore('player1', score1 + 1)}>+</button>
          <button onClick={() => updateScore('player1', score1 - 1)}>-</button>
        </div>
        <div>
          {player2}: {score2}
          <button onClick={() => updateScore('player2', score2 + 1)}>+</button>
          <button onClick={() => updateScore('player2', score2 - 1)}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
