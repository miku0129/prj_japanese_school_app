import prisma from "../../../../prisma";
import RomajisMenuBoard from "@/components/menu-boards/romajis-menu-board.component copy";

export default async function Page() {
  const getQuestions = async () => {
    const questions = await prisma.romajisQuestion.findMany({
      include: {
        options: {
          include: {
            option: true,
          },
        },
      },
    });
    return {
      props: { questions },
    };
  };
  const { props } = await getQuestions();

  const params: RomajisQuestion[] = props.questions;

  return <RomajisMenuBoard params={params} />;
}
