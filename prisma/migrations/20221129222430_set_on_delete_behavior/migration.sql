-- DropForeignKey
ALTER TABLE "Teacher" DROP CONSTRAINT "Teacher_subjectId_fkey";

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
