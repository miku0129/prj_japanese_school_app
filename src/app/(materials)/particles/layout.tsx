import NavBoard from "@/components/nav-board/nav-board";

export default function ParticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex justify-center gap-5 text-center pt-5 items-center">
        <p className="text-2xl text-blue-300">は、を、へをまなぶ</p>
        <NavBoard />
      </div>

      <div className="h-svh py-8">{children}</div>
    </section>
  );
}
