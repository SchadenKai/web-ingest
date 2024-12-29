import { Scraper } from "@/components/scraper";
import { GITHUB_URL } from "@/constants/constants";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <header className="h-14 flex items-center justify-between px-11 w-full border-b">
        <h1 className="text-xl font-semibold">
          Web<span className="text-orange-500">Scraper</span>
        </h1>
        <div className="flex items-center gap-4">
          <a
            href={GITHUB_URL}
            className="flex gap-2 text-sm text-muted-foreground hover:text-foreground"
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
      </header>
      <main className="container py-6 max-w-full flex flex-col items-center">
        <Scraper />
      </main>
    </div>
  );
}
