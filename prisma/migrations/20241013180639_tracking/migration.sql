-- CreateTable
CREATE TABLE "tracking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "stripe_id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0
);
