import prisma from "../../../../../../prisma";
import Fail from "@/components/fail/fail.component";
import Pass from "@/components/pass/pass.component";

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
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
  const questions = props.questions;

  const result = searchParams.state === "true" ? true : false;
  return (
    <div>
      {result && <Pass params={questions} />}
      {!result && <Fail />}
    </div>
  );
}
