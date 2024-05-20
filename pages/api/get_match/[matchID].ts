// pages/api/get_match/[matchId].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { matchId } = req.query;
  console.log('Received request for matchId:', matchId);

  try {
    const match = await prisma.match.findUnique({
      where: { id: Number(matchId) },
      include: { histories: true },
    });

    if (!match) {
      console.log('Match not found for matchId:', matchId);
      return res.status(404).json({ error: 'Match not found' });
    }

    console.log('Match found:', match);
    res.status(200).json(match);
  } catch (error) {
    console.error('Error fetching match:', error);
    res.status(500).json({ error: 'Failed to fetch match' });
  }
}
