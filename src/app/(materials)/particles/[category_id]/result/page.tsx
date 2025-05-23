import prisma from "../../../../../../prisma";
import TestFailed from "@/components/test-failed/test-failed.component";
import TestPassed from "@/components/test-passed/particles-test-passed.component";

type Params = Promise<SearchParams>

export default async function Page({
  searchParams,
}: {
  searchParams: Params;
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

  const { state } = await searchParams;
  const result = state === "true" ? true : false;

  return (
    <div>
      {result && <TestPassed params={questions} />}
      {!result && <TestFailed />}
    </div>
  );
}
