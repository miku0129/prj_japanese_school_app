import { PrismaClient } from "@prisma/client";
import { SEEDS } from "./seed-data";

const prisma = new PrismaClient();
const seedData = SEEDS;

async function main() {
  console.log("Seeding data...");
  let id = 0;
  let category_id = 0;
  let choice_id = 0;
  let choices = [];

  for (let i = 0; i < seedData.length; i++) {
    if (seedData[i].choices[0]) {
      for (let k = 0; k < seedData[i].choices.length; k++) {
        choices[k] = {
          choice: {
            create: {
              id: choice_id,
              ...seedData[i].choices[k],
            },
          },
        };
        choice_id++;
      }
    } else {
      choices = [];
    }

    if (seedData[i].additionalQuestion) {
      await prisma.question.create({
        data: {
          id: id,
          character: seedData[i].character,
          categoryId: category_id,
          level: seedData[i].level,
          isIndex: seedData[i].isIndex,
          category: seedData[i].category,
          answer: seedData[i].answer,
          choices: {
            create: choices,
          },
          additionalQuestion: {
            create: seedData[i].additionalQuestion,
          },
        },
      });
    } else if (!seedData[i].additionalQuestion) {
      await prisma.question.create({
        data: {
          id: id,
          character: seedData[i].character,
          categoryId: category_id,
          level: seedData[i].level,
          isIndex: seedData[i].isIndex,
          category: seedData[i].category,
          answer: seedData[i].answer,
          choices: {
            create: choices,
          },
        },
      });
    }
    id++;
    category_id++;
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
