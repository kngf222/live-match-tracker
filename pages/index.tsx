import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [matchId, setMatchId] = useState<number | null>(null); // Track the match ID

  const startMatch = async () => {
    try {
      const response = await axios.post('/api/start_match', { player1, player2 });
      setMatchId(response.data.id);  // Save the match ID from the response
      setScore1(0);
      setScore2(0);
      console.log('Match started:', response.data); // Debugging log
    } catch (error) {
      console.error('Failed to start match:', error);
    }
  };

  const updateScore = async (player: string, newScore: number) => {
    if (matchId === null) {
      console.error('No matchId available'); // Debugging log
      return;
    }

    console.log('Updating score:', { player, newScore, matchId }); // Debugging log

    try {
      await axios.post('/api/update_score', { player, newScore, matchId });  // Include matchId in the request
      if (player === 'player1') {
        setScore1(newScore);
      } else {
        setScore2(newScore);
      }
      console.log('Score updated for matchId:', matchId); // Debugging log
    } catch (error) {
      console.error('Failed to update score:', error);
    }
  };

  return (
    <div className="p-10 bg-base-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Live Score Tracker</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Player 1 Name"
          className="input input-bordered w-full max-w-xs mb-4"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Player 2 Name"
          className="input input-bordered w-full max-w-xs mb-4"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        />
        <button className="btn btn-primary w-full max-w-xs" onClick={startMatch}>Start Match</button>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Match Score</h2>
        <div className="flex justify-around mb-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">{player1}</h3>
            <div className="flex items-center justify-center space-x-2">
              <button className="btn btn-secondary" onClick={() => updateScore('player1', score1 + 1)}>+</button>
              <span className="text-2xl">{score1}</span>
              <button className="btn btn-secondary" onClick={() => updateScore('player1', score1 - 1)}>-</button>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">{player2}</h3>
            <div className="flex items-center justify-center space-x-2">
              <button className="btn btn-secondary" onClick={() => updateScore('player2', score2 + 1)}>+</button>
              <span className="text-2xl">{score2}</span>
              <button className="btn btn-secondary" onClick={() => updateScore('player2', score2 - 1)}>-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
