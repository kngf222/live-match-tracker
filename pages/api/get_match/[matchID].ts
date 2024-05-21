import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { matchId } = req.query;

  console.log(`Fetching match data for matchId: ${matchId}`);

  try {
    if (!matchId) {
      console.error('No matchId provided in the request');
      return res.status(400).json({ error: 'matchId is required' });
    }

    const match = await prisma.match.findUnique({
      where: { id: parseInt(matchId as string, 10) },
      include: { histories: true },
    });

    if (!match) {
      console.error(`No match found for matchId: ${matchId}`);
      return res.status(404).json({ error: 'Match not found' });
    }

    console.log(`Match data retrieved successfully for matchId: ${matchId}`);
    res.status(200).json(match);
  } catch (error) {
    console.error('Error fetching match data:', error);
    res.status(500).json({ error: 'Failed to fetch match' });
  }
}
