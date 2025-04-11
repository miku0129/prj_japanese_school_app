export default function RomajisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="text-center pt-5">
        <p className="text-2xl text-blue-300">コンピュータのローマ字をまなぶ</p>
      </div>

      {children}
    </section>
  );
}
