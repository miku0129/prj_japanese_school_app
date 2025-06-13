import NavBoard from "@/components/nav-board/nav-board";

export default function RomajisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavBoard text="ことわざをまなぶ" />
      {children}
    </section>
  );
}
