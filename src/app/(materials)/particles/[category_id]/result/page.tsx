import prisma from "../../../../../../prisma";
import TestFailed from "@/components/test-failed/test-failed.component";
import TestPassed from "@/components/test-passed/test-passed.component";

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
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
  const questions = props.questions;

  const result = searchParams.state === "true" ? true : false;
  return (
    <div>
      {result && <TestPassed params={questions} />}
      {!result && <TestFailed />}
    </div>
  );
}
