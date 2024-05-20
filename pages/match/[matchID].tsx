import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface Match {
  id: number;
  player1: string;
  player2: string;
  score1: number;
  score2: number;
}

export default function Match() {
  const router = useRouter();
  const { matchId } = router.query;
  const [match, setMatch] = useState(null);

  useEffect(() => {
    if (matchId) {
      axios.get(`/api/match/${matchId}`)
        .then(response => {
          setMatch(response.data);
        })
        .catch(error => {
          console.error('Failed to fetch match', error);
        });
    }
  }, [matchId]);

  if (!match) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Match {matchId}</h1>
      <div>
        <h2>{match.player1}: {match.score1}</h2>
      </div>
      <div>
        <h2>{match.player2}: {match.score2}</h2>
      </div>
    </div>
  );
}
