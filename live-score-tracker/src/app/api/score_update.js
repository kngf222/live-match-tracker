// src/app/api/score_update.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
let scores = { player1: 0, player2: 0 };

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { player } = req.body;
    if (player === 1) {
      scores.player1 += 1;
    } else if (player === 2) {
      scores.player2 += 1;
    }
    res.status(200).json({ score1: scores.player1, score2: scores.player2 });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
