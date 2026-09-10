import { Container } from "@/components/layout/container";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="py-20">
          <h1 className="text-4xl font-semibold">
            Arcflow
          </h1>

          <p className="mt-4 text-zinc-400">
            Automate the work between your tools.
          </p>
        </div>
      </Container>
    </main>
  );
}