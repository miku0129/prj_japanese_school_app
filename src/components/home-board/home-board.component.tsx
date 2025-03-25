import HomeBtn from "@/components/home-btn/home-btn.component";

export default async function HomeBoard() {
  const indexes: HomeIndex[] = [
    {
      en: "particles",
      jp: "助詞",
      sample: "は、を、へ",
    },
  ];
  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        {indexes.map((index: HomeIndex, _idx: number) => {
          return (
            <div key={_idx}>
              <HomeBtn params={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
