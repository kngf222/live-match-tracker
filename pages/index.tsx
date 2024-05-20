import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Home = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [matchId, setMatchId] = useState<number | null>(null);
  const [matchUrl, setMatchUrl] = useState<string | null>(null); // Track match URL

  const startMatch = async () => {
    try {
      const response = await axios.post('/api/start_match', { player1, player2 });
      console.log('Response from start_match:', response.data);  // Add this line
      setMatchId(response.data.matchId);  // Ensure this is correctly mapped
      setScore1(0);
      setScore2(0);
      setMatchUrl(`${window.location.origin}/match/${response.data.id}`);  // Construct match URL
      console.log('Match started:', response.data);
    } catch (error) {
      console.error('Failed to start match:', error);
    }
  };

  const updateScore = async (player: string, newScore: number) => { 
    console.log('Current matchId:', matchId);  // Add this line
  
    if (!matchId) {
      console.error('No matchId available');
      return;
    }
  
    console.log('Updating score:', { player, newScore, matchId });

    try {
      await axios.post('/api/update_score', { player, newScore, matchId });  // Ensure matchId is passed
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Live Score Tracker</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Player 1 Name"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          className="input input-bordered mr-2"
        />
        <input
          type="text"
          placeholder="Player 2 Name"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
          className="input input-bordered"
        />
        <button onClick={startMatch} className="btn btn-primary ml-2">Start Match</button>
      </div>
      {matchUrl && (
        <div className="mb-4">
          <p>Match URL: <a href={matchUrl} target="_blank" rel="noopener noreferrer" className="link link-primary">{matchUrl}</a></p>
        </div>
      )}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Match Score</h2>
        <div className="mb-2">
          {player1}: {score1}
          <button onClick={() => updateScore('player1', score1 + 1)} className="btn btn-sm btn-success ml-2">+</button>
          <button onClick={() => updateScore('player1', score1 - 1)} className="btn btn-sm btn-danger ml-2">-</button>
        </div>
        <div>
          {player2}: {score2}
          <button onClick={() => updateScore('player2', score2 + 1)} className="btn btn-sm btn-success ml-2">+</button>
          <button onClick={() => updateScore('player2', score2 - 1)} className="btn btn-sm btn-danger ml-2">-</button>
        </div>
      </div>
    </div>
  );
};

export default Home;