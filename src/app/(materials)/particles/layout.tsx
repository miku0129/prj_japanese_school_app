export default function ParticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="text-center pt-5">
        <p className="text-2xl text-blue-300">は、を、へをまなぶ</p>
      </div>
      <div className="h-screen">
        {children}
      </div>
    </section>
  );
}
