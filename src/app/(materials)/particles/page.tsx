import prisma from "../../../../prisma";
import MenuBoard from "@/components/menu-board/menu-board.component";

export default async function Page() {
  const getQuestions = async () => {
    const questions = await prisma.question.findMany({
      include: {
        additionalQuestion: true,
        choices: {
          include: {
            choice: true,
          },
        },
      },
    });
    return {
      props: { questions },
    };
  };
  const { props } = await getQuestions();

  const params: Question[] = props.questions;

  return <MenuBoard params={params} />;
}
