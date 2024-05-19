// src/app/api/start_match.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { player1, player2 } = req.body;
    await prisma.user.createMany({
      data: [
        { email: `${player1}@example.com`, name: player1 },
        { email: `${player2}@example.com`, name: player2 },
      ],
    });
    res.status(200).json({ message: 'Match started' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
