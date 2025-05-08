import prisma from "../../../../../../prisma";
import RomajisTestPassed from "@/components/test-passed/romajis-test-passed.component";
import TestFailed from "@/components/test-failed/test-failed.component";

type Params = Promise<SearchParams>

export default async function Page({
  searchParams,
}: {
  searchParams: Params;
}) {
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
  const questions = props.questions;

  const { state } = await searchParams;
  const result = state === "true" ? true : false;
  
  return (
    <div>
      {result && <RomajisTestPassed params={questions} />}
      {!result && <TestFailed />}
    </div>
  );
}
