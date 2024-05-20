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
  const router = useRouter();
  const { matchId } = router.query;

  useEffect(() => {
    if (matchId) {
      console.log('Fetching match data for matchId:', matchId);
      axios.get(`/api/get_match/${matchId}`)
        .then(response => {
          console.log('Fetched match data:', response.data);
          setMatch(response.data);
        })
        .catch(error => {
          console.error('Failed to fetch match', error);
        });
    }
  }, [matchId]);

  if (!match) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="p-10 bg-base-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Match between {match.player1} and {match.player2}</h1>
      <h2 className="text-2xl font-semibold mb-4 text-center">Score</h2>
      <div className="flex justify-around mb-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">{match.player1}</h3>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">{match.score1}</span>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">{match.player2}</h3>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">{match.score2}</span>
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
