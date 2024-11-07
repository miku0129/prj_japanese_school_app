import { PrismaClient } from "@prisma/client";
import { SEEDS } from "./seed-data";

const prisma = new PrismaClient();
const seedData = SEEDS;

async function main() {
  console.log("Seeding data...");
  for (let i = 0; i < seedData.length; i++) {
    if (seedData[i].additionalQuestion) {
      await prisma.question.create({
        data: {
          id: seedData[i].id,
          character: seedData[i].character,
          categoryId: seedData[i].categoryId,
          level: seedData[i].level,
          isIndex: seedData[i].isIndex,
          category: seedData[i].category,
          choices: {
            create: seedData[i].choices,
          },
          additionalQuestion: {
            create: seedData[i].additionalQuestion,
          },
        },
      });
    } else if (!seedData[i].additionalQuestion) {
      await prisma.question.create({
        data: {
          id: seedData[i].id,
          character: seedData[i].character,
          categoryId: seedData[i].categoryId,
          level: seedData[i].level,
          isIndex: seedData[i].isIndex,
          category: seedData[i].category,
          choices: {
            create: seedData[i].choices,
          },
        },
      });
    }
  }
  console.log("Data seeding complete.");
}

main()
  .catch((err) => {
    console.error("Error seeding data:", err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
