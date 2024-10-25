import WoBeguinnerSect from "../components/wo-beguinner/wo-beguinner-sect.component";
import { DATA } from "../data";

export default function Page({ params }: { params: { id: string } }) {
  const data = DATA.find((item) => {
    const id: string = String(item.id);
    return id === params.id;
  });
  if (data) {
    return <div>{<WoBeguinnerSect params={data} />}</div>;
  }
}