/*
  Warnings:

  - You are about to drop the column `createdAt` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `player1Score` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `player2Score` on the `History` table. All the data in the column will be lost.
  - Added the required column `newScore` to the `History` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player` to the `History` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "History" DROP COLUMN "createdAt",
DROP COLUMN "player1Score",
DROP COLUMN "player2Score",
ADD COLUMN     "newScore" INTEGER NOT NULL,
ADD COLUMN     "player" TEXT NOT NULL,
ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Match" ALTER COLUMN "score1" DROP DEFAULT,
ALTER COLUMN "score2" DROP DEFAULT;
