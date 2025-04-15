import NavBoard from "@/components/nav-board/nav-board";

export default function RomajisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex justify-center gap-5 text-center pt-5 items-center">
        <p className="text-lg text-blue-300">コンピュータのローマ字をまなぶ</p>
        <NavBoard />
      </div>

      {children}
    </section>
  );
}
