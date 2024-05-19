import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const startMatch = async () => {
    await axios.post('/api/start_match', { player1, player2 });
    setScore1(0);
    setScore2(0);
  };

  const updateScore = async (player: number) => {
    const response = await axios.post('/api/score_update', { player });
    setScore1(response.data.score1);
    setScore2(response.data.score2);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Live Score Tracker</h1>
      <div className="my-4">
        <input
          type="text"
          className="border p-2 mr-2"
          placeholder="Player 1 Name"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
        />
        <input
          type="text"
          className="border p-2 mr-2"
          placeholder="Player 2 Name"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2" onClick={startMatch}>Start Match</button>
      </div>
      <h2 className="text-2xl my-4">Score: {score1} - {score2}</h2>
      <div>
        <button className="bg-green-500 text-white p-2 mr-2" onClick={() => updateScore(1)}>Player 1 Scores</button>
        <button className="bg-red-500 text-white p-2" onClick={() => updateScore(2)}>Player 2 Scores</button>
      </div>
    </div>
  );
}
