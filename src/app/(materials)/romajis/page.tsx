// import prisma from "../../../../prisma";
import RomajisMenuBoard from "@/components/menu-boards/romajis-menu-board.component copy";

export default async function Page() {
  //   const getQuestions = async () => {
  //     const questions = await prisma.question.findMany({
  //       include: {
  //         additionalQuestion: true,
  //         choices: {
  //           include: {
  //             choice: true,
  //           },
  //         },
  //       },
  //     });
  //     return {
  //       props: { questions },
  //     };
  //   };
  //   const { props } = await getQuestions();

  //   const params: Question[] = props.questions;

  const params: QuestionRomaji[] = [
    {
      id: 18,
      category: "romajis",
      categoryId: 1,
      isIndex: true,
      hiragana: "いぬ",
      answer: "inu",
    },
  ];

  return <RomajisMenuBoard params={params} />;
}
