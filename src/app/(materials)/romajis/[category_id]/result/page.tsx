// import prisma from "../../../../../../prisma";
import { romajiQuestions } from "../../romaji-questions";
import RomajisTestPassed from "@/components/test-passed/romajis-test-passed.component";
import TestFailed from "@/components/test-failed/test-failed.component";

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
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
  //   const questions = props.questions;

  const questions = romajiQuestions;

  const result = searchParams.state === "true" ? true : false;
  return (
    <div>
      {result && <RomajisTestPassed params={questions} />}
      {!result && <TestFailed />}
    </div>
  );
}
