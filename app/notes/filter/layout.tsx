export default function NotesLayout({
  children,
  filters,
  test,
}: Readonly<{
  children: React.ReactNode;
  filters: React.ReactNode;
  test: React.ReactNode;
}>) {
  return (
    <section style={{ display: "flex", gap: "20px" }}>
      {filters}
      <hr />
      {children}
      <hr />
      {test}
    </section>
  );
}
