export default function Footer() {
  return (
    <footer className="border-t border-brand-bg py-10 bg-brand-blue">
      <div className="container-tight flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand-lime/15 ring-1 ring-brand-lime/40">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="opacity-90"
            >
              <path fill="currentColor" d="M4 12h16M12 4v16" />
            </svg>
          </span>
          <span className="font-mono font-semibold">Reach Capital</span>
        </div>
        <div className="text-sm text-white">
          © {new Date().getFullYear()} Reach Capital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
