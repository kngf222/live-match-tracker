import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { player, newScore } = req.body;
    try {
      await prisma.match.update({
        where: { player },
        data: {
          [`${player}Score`]: newScore,
        },
      });
      res.status(200).json({ message: 'Score updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update score' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
