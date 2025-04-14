import { PrismaClient } from "@prisma/client";
import { PARTICLES_SEED_DATA } from "./particles-seed-data";
import { ROMAJIS_SEED_DATA } from "./romajis-seed-data";

const prisma = new PrismaClient();

async function main() {
  (async function () {
    console.log("Seeding PARTICLES_SEED_DATA...");
    
    const seedData = PARTICLES_SEED_DATA;
    let id = 0;
    let category_id = 0;
    let option_id = 0;
    let options = [];

    for (let i = 0; i < seedData.length; i++) {
      if (seedData[i].options[0]) {
        for (let k = 0; k < seedData[i].options.length; k++) {
          options[k] = {
            option: {
              create: {
                id: option_id,
                ...seedData[i].options[k],
              },
            },
          };
          option_id++;
        }
      } else {
        options = [];
      }

      if (seedData[i].additionalQuestion) {
        await prisma.particlesQuestion.create({
          data: {
            id: id,
            category: seedData[i].category,
            categoryId: category_id,
            group: seedData[i].group,
            isIndex: seedData[i].isIndex,
            options: {
              create: options,
            },
            additionalQuestion: {
              create: seedData[i].additionalQuestion,
            },
            character: seedData[i].character,
            answer: seedData[i].answer,
          },
        });
      } else if (!seedData[i].additionalQuestion) {
        await prisma.particlesQuestion.create({
          data: {
            id: id,
            category: seedData[i].category,
            categoryId: category_id,
            group: seedData[i].group,
            isIndex: seedData[i].isIndex,
            options: {
              create: options,
            },
            character: seedData[i].character,
            answer: seedData[i].answer,
          },
        });
      }
      id++;
      category_id++;
    }
    console.log("PARTICLES_SEED_DATA seeding complete.");
  })();

  (async function () {
    console.log("Seeding ROMAJIS_SEED_DATA...");
    const seedData = ROMAJIS_SEED_DATA;
    let category_id = 0;

    for (let i = 0; i < seedData.length; i++) {
      let options = [];
      if (seedData[i].options[0]) {
        for (let k = 0; k < seedData[i].options.length; k++) {
          options[k] = {
            option: {
              create: {
                ...seedData[i].options[k],
              },
            },
          };
        }
      } else {
        options = [];
      }

      await prisma.romajisQuestion.create({
        data: {
          category: seedData[i].category,
          categoryId: category_id,
          group: seedData[i].group,
          groupExp: seedData[i].groupExp,
          isIndex: seedData[i].isIndex,
          hiragana: seedData[i].hiragana,
          options: {
            create: options,
          },
        },
      });
      category_id++;
    }
    console.log("ROMAJIS_SEED_DATA seeding complete.");
  })();
}

main()
  .catch((err) => {
    console.error("Error seeding data:", err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
