import prisma from "../../../../prisma";
import ParticlesMenuBoard from "@/components/menu-boards/particles-menu-board.component";

export default async function Page() {
  const getQuestions = async () => {
    const questions = await prisma.particlesQuestion.findMany({
      include: {
        additionalQuestion: true,
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

  const params: ParticlesQuestion[] = props.questions;

  return <ParticlesMenuBoard params={params} />;
}
