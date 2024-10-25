import Fail from "@/components/fail/fail.component";
import Pass from "@/components/pass/pass.component";

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export default function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const result = searchParams.params === "true" ? true : false;
  return (
    <div>
      {result && <Pass />}
      {!result && <Fail />}
    </div>
  );
}
