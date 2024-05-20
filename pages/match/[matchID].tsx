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

export default function MatchPage() {
  const [match, setMatch] = useState<Match | null>(null);
  const [matchId, setMatchId] = useState<number | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`/api/get_match/${id}`)
        .then(response => {
          setMatch(response.data);
          setMatchId(response.data.id);  // Set matchId
        })
        .catch(error => {
          console.error('Failed to fetch match', error);
        });
    }
  }, [id]);

  const updateScore = async (player: 'player1' | 'player2', newScore: number) => {
    if (!matchId) {
      console.error('matchId is not set');
      return;
    }

    try {
      console.log('Updating score for matchId:', matchId, 'player:', player, 'newScore:', newScore);
      await axios.post('/api/update_score', { player, newScore, matchId });
      setMatch(prevMatch => prevMatch ? { ...prevMatch, [player === 'player1' ? 'score1' : 'score2']: newScore } : null);
    } catch (error) {
      console.error('Failed to update score', error);
    }
  };

  if (!match) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Match between {match.player1} and {match.player2}</h1>
      <h2>Score</h2>
      <div>
        {match.player1}: {match.score1} <button onClick={() => updateScore('player1', match.score1 + 1)}>+</button> <button onClick={() => updateScore('player1', match.score1 - 1)}>-</button>
      </div>
      <div>
        {match.player2}: {match.score2} <button onClick={() => updateScore('player2', match.score2 + 1)}>+</button> <button onClick={() => updateScore('player2', match.score2 - 1)}>-</button>
      </div>
    </div>
  );
}
