import FileSystem from "../components/filesystem";
import Header from "../components/shared/header";

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <div className="tv-frame">
        <div className="tv-screen min-h-screen">
          <Header />
          <main className="pb-40">
            <FileSystem />
          </main>
        </div>
      </div>
    </div>
  );
}
