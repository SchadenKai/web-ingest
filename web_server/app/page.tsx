import { Scraper } from "@/components/scraper";
import { GITHUB_URL } from "@/constants/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <header className="h-16 flex items-center justify-center px-11 w-full rounded-md border-b-2 border-gray-500">
        <div className="flex justify-between container max-w-screen-lg w-full">
          <h1 className="flex items-center justify-center gap-3 text-2xl font-bold">
            <Image src="/logov2.svg" alt="Logo" width={34} height={32} />
            <span>
              Web<span className="text-orange-500">Ingest</span>
            </span>
          </h1>
          <div className="flex items-center gap-4">
            <a
              href={GITHUB_URL}
              className="flex gap-2 text-sm hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.svg"
                alt="GitHub Logo"
                width={14}
                height={14}
              />
              GitHub
            </a>
          </div>
        </div>
      </header>
      <main className="container py-6 max-w-full flex flex-col items-center">
        <Scraper />
      </main>
    </div>
  );
}
