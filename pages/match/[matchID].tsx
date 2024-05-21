import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface Match {
  id: number;
  player1: string;
  player2: string;
  score1: number;
  score2: number;
  histories: History[];
}

interface History {
  id: number;
  player: string;
  newScore: number;
  timestamp: string;
}

export default function MatchPage() {
  const [match, setMatch] = useState<Match | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { matchId } = router.query;

  useEffect(() => {
    if (matchId) {
      console.log(`Fetching match data for matchId: ${matchId}`);
      axios.get(`/api/get_match/${matchId}`)
        .then(response => {
          console.log('Match data received:', response.data);
          setMatch(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Failed to fetch match:', error);
          setLoading(false);
        });
    }
  }, [matchId]);

  const updateScore = async (player: 'player1' | 'player2', newScore: number) => {
    try {
      if (!matchId) {
        console.error('No matchId available');
        return;
      }
      await axios.post('/api/update_score', { player, newScore, matchId });
      setMatch(prevMatch => prevMatch ? { ...prevMatch, [player === 'player1' ? 'score1' : 'score2']: newScore } : null);
    } catch (error) {
      console.error('Failed to update score', error);
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!match) {
    return <div className="text-center mt-10">Match not found</div>;
  }

  return (
    <div className="p-10 bg-base-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Match between {match.player1} and {match.player2}</h1>
      <h2 className="text-2xl font-semibold mb-4 text-center">Score</h2>
      <div className="flex justify-around mb-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">{match.player1}</h3>
          <div className="flex items-center justify-center space-x-2">
            <button className="btn btn-secondary" onClick={() => updateScore('player1', match.score1 + 1)}>+</button>
            <span className="text-2xl">{match.score1}</span>
            <button className="btn btn-secondary" onClick={() => updateScore('player1', match.score1 - 1)}>-</button>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">{match.player2}</h3>
          <div className="flex items-center justify-center space-x-2">
            <button className="btn btn-secondary" onClick={() => updateScore('player2', match.score2 + 1)}>+</button>
            <span className="text-2xl">{match.score2}</span>
            <button className="btn btn-secondary" onClick={() => updateScore('player2', match.score2 - 1)}>-</button>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Match History</h2>
      <ul className="list-disc list-inside">
        {match.histories.map(history => (
          <li key={history.id}>
            {history.player} scored {history.newScore} at {new Date(history.timestamp).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
