import MenuBoard from "@/components/menu-board/menu-board.component";
import { DATA } from "./(materials)/particles/data";

export default function Page() {
  const data_source = DATA; 
  if (data_source) {
    return <MenuBoard params={data_source} />;
  }
}