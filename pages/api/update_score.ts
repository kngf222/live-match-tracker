import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { matchId, player, newScore } = req.body;
    try {
      const match = await prisma.match.update({
        where: { id: matchId },
        data: {
          [player === 'player1' ? 'score1' : 'score2']: newScore,
          histories: {
            create: {
              player,
              newScore,
            },
          },
        },
        include: { histories: true },
      });
      res.status(200).json(match);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update score' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
