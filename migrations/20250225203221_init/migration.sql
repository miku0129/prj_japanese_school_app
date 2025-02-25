-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "level" TEXT NOT NULL,
    "isIndex" BOOLEAN NOT NULL DEFAULT false,
    "character" TEXT,
    "answer" TEXT,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Additionalquestion" (
    "id" SERIAL NOT NULL,
    "phrase_front" TEXT,
    "phrase_back" TEXT,
    "sound_resource" TEXT,

    CONSTRAINT "Additionalquestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Choice" (
    "id" SERIAL NOT NULL,
    "character" TEXT NOT NULL,
    "en" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "styleHeight" TEXT,
    "styleWidth" TEXT,

    CONSTRAINT "Choice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChoicesOnQuestions" (
    "questionId" INTEGER NOT NULL,
    "choiceId" INTEGER NOT NULL,

    CONSTRAINT "ChoicesOnQuestions_pkey" PRIMARY KEY ("questionId","choiceId")
);

-- AddForeignKey
ALTER TABLE "Additionalquestion" ADD CONSTRAINT "Additionalquestion_id_fkey" FOREIGN KEY ("id") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChoicesOnQuestions" ADD CONSTRAINT "ChoicesOnQuestions_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChoicesOnQuestions" ADD CONSTRAINT "ChoicesOnQuestions_choiceId_fkey" FOREIGN KEY ("choiceId") REFERENCES "Choice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
