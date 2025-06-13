// import prisma from "../../../../prisma";
import ProverbsMenuBoard from "@/components/menu-board/proverbs-menu-board.component";

export default async function Page() {
  // const getQuestions = async () => {
  //   const questions = await prisma.romajisQuestion.findMany({
  //     include: {
  //       options: {
  //         include: {
  //           option: true,
  //         },
  //       },
  //     },
  //   });
  //   return {
  //     props: { questions },
  //   };
  // };
  // const { props } = await getQuestions();

  // const params: RomajisQuestion[] = props.questions;

  const params: ProverbsQuestion[] = [
    {
      id: 0,
      category: "proverb",
      categoryId: 0,
      group: "group_1",
      groupExp: "group 1",
      isIndex: true,
      question: ["ちりもつもれば", "となる"],
      answer: "山",
      proverb: "ちりもつもれば山となる",
      meaning:
        "ほんの小さなものでも、つもりつもれば大きなものになるということ。",
    },
  ];

  return <ProverbsMenuBoard params={params} />;
}
