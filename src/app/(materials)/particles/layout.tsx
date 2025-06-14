import NavBoard from "@/components/nav-board/nav-board";

export default function ParticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavBoard text="は、を、へをまなぶ" />
      <div className="h-svh">{children}</div>
    </section>
  );
}
