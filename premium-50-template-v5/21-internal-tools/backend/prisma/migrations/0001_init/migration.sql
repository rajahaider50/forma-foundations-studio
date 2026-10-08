CREATE TABLE "User" ("id" TEXT NOT NULL,"email" TEXT NOT NULL,"name" TEXT NOT NULL,"role" TEXT NOT NULL DEFAULT 'user',"createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,"updatedAt" TIMESTAMP(3) NOT NULL,CONSTRAINT "User_pkey" PRIMARY KEY ("id"));
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "Record" ("id" TEXT NOT NULL,"title" TEXT NOT NULL,"status" TEXT NOT NULL DEFAULT 'active',"metadata" JSONB NOT NULL,"userId" TEXT NOT NULL,"createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,"updatedAt" TIMESTAMP(3) NOT NULL,CONSTRAINT "Record_pkey" PRIMARY KEY ("id"));
CREATE INDEX "Record_status_idx" ON "Record"("status");
CREATE TABLE "AuditLog" ("id" TEXT NOT NULL,"actorId" TEXT NOT NULL,"action" TEXT NOT NULL,"resource" TEXT NOT NULL,"resourceId" TEXT,"metadata" JSONB,"createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id"));
CREATE INDEX "AuditLog_actorId_createdAt_idx" ON "AuditLog"("actorId","createdAt");
ALTER TABLE "Record" ADD CONSTRAINT "Record_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
