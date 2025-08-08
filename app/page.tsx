import FileSystem from "../components/filesystem";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 p-4">
      <div className="crt-frame min-h-screen">
        <main className="pb-40">
          <FileSystem />
        </main>
      </div>
    </div>
  );
}
