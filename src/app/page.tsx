import prisma from "@/lib/prisma";
// import MenuBoard from "@/components/menu-board/menu-board.component";
// import { DATA } from "./(materials)/particles/data";

import TestComponent from "@/components/test.component";

export default async function Page() {
  const getQuestions = async () => {
    const questions = await prisma.question.findMany({
      include: {
        additionalQuestion: true,
        choices: {
          include: {
            choice: true
          }
        }
      },
    });
    return {
      props: { questions },
    };
  };
  const { props } = await getQuestions();

  // const data_source = DATA;
  // if (data_source) {
  //   return <MenuBoard params={data_source} />;
  // }
  if (props.questions) {
    return <TestComponent params={props.questions} />;
  }
}
