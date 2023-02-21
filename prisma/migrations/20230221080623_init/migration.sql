/*
  Warnings:

  - You are about to drop the column `picture` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `post` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `authorDp` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "picture",
DROP COLUMN "post",
ADD COLUMN     "authorDp" TEXT NOT NULL,
ADD COLUMN     "message" TEXT NOT NULL;
