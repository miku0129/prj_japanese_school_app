import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seedData = [
  {
    id: 12,
    character: "wo",
    categoryId: 12,
    level: "beginner",
    isIndex: false,
    category: "particles",
    choices: [
      {
        choiceId: 1,
      },
      {
        choiceId: 2,
      },
    ],
    additionalQuestion: {
      // phrase_front: "てすと、前",
      // phrase_back: "てすと、後",
    },
  },
];

async function main() {
  console.log("Seeding data...");
  for (let i = 0; i < seedData.length; i++) {
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
  }

  // 初期データを追加する他の処理...

  console.log("Data seeding complete.");
}

main()
  .catch((err) => {
    console.error("Error seeding data:", err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
