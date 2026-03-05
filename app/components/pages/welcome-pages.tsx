

export function WelcomePage() {
  return (
    <main className="min-h-screen md:flex md:items-center md:justify-center">
      <section className="px-4 py-2">
        <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-2 sm:gap-2 md:grid-cols-3 md:grid-rows-1 md:gap-4">
          <div className="row-span-2 md:col-start-2 md:row-start-1 md:py-2">
            <img
              src="/picture.jpeg"
              alt="Profile Picture"
              className="w-full rounded-lg min-w-24 md:max-w-92"
            />
          </div>
          <div className="md:relative md:col-span-1 md:col-start-1 md:row-start-1 px-2">
            <h1 className="md:absolute md:top-0 md:right-0">
              <span className="block text-lg leading-tight tracking-wide text-gray-500 md:text-xl">
                Hello, I’m
              </span>
              <span className="font-audiowide inline-block bg-linear-to-r from-gray-600 to-gray-400 bg-clip-text text-2xl sm:text-3xl font-extrabold text-transparent md:text-4xl lg:text-5xl xl:text-6xl">
                RANGGA MAULANA
              </span>
            </h1>
          </div>
          <div className="col-start-2 row-start-2 md:relative md:col-start-3 md:row-start-1 px-2">
            <div className="md:absolute md:bottom-0 md:left-0">
              <h2 className="text-sm sm:text-base leading-tight font-semibold text-gray-500 md:text-2xl">
                I craft websites and business systems that{" "}
                <span className="font-bold text-gray-900">just work.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
