import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { player, newScore, matchId } = req.body;

    try {
      const match = await prisma.match.findUnique({
        where: { id: matchId },
        include: { histories: true },
      });

      if (!match) {
        return res.status(404).json({ error: 'Match not found' });
      }

      const updateData = player === 'player1' ? { score1: newScore } : { score2: newScore };

      await prisma.match.update({
        where: { id: matchId },
        data: updateData,
      });

      await prisma.history.create({
        data: {
          matchId,
          player,
          newScore,
        },
      });

      res.status(200).json({ message: 'Score updated successfully' });
    } catch (error) {
      console.error('Failed to update score', error);
      res.status(500).json({ error: 'Failed to update score' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
