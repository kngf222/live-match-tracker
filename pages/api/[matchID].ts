import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { matchId } = req.query;
  try {
    const match = await prisma.match.findUnique({
      where: { id: Number(matchId) },
      include: { histories: true },
    });
    if (!match) {
      return res.status(404).json({ error: 'Match not found' });
    }
    res.status(200).json(match);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch match' });
  }
}
