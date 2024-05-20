import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { player1, player2 } = req.body;

    try {
      const match = await prisma.match.create({
        data: {
          player1,
          player2,
          score1: 0,
          score2: 0,
        },
      });

      res.status(200).json(match);
    } catch (error) {
      console.error('Failed to start match', error);
      res.status(500).json({ error: 'Failed to start match' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
