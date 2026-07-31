import JanmashtamiCanvas from "@/components/JanmashtamiCanvas";

export default function Home() {
  return (
    <main className="relative" style={{ background: "#050208" }}>
      {/* The entire experience: fixed canvas + scroll-driven overlays */}
      <JanmashtamiCanvas />
    </main>
  );
}
