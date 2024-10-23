import Fail from "@/components/fail/fail.component";
import Pass from "@/components/pass/pass.component";

interface Params {
  slug: string;
}

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export default function Page({
  // params,
  searchParams,
}: {
  // params: Params;
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
