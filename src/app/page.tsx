export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <span className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <p className="mb-2 tracking-[-.01em]">
            Venüs Kafe, sagalas.com.tr tarafından hazırlanıyor.
          </p>
          <p className="tracking-[-.01em]">
            Bizi tercih ettiğiniz için teşekkür ederiz. Çok yakında siteniz hazır olacak.
          </p>
        </span>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/menu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Menü Kontrol
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://sagalas.com.tr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yonetici Paneli
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://instagram.com/sagalas.com.tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          @sagalas.com.tr
        </a>
      </footer>
    </div>
  );
}
