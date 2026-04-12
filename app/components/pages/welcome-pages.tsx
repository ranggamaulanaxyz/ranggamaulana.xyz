import { Link } from "react-router";

export function WelcomePage() {
  return (
    <main className="min-h-screen">
      <section
        className="relative bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-white via-transparent/99 to-white"></div>
        <div className="relative container lg:flex lg:flex-row-reverse lg:justify-between xl:mx-auto 2xl:items-center">
          <div className="hidden p-4 lg:flex lg:items-start">
            <img
              src="/picture.jpeg"
              alt="Rangga Maulana"
              className="rounded lg:w-4xl xl:w-xl 2xl:w-sm"
            />
          </div>
          <div className="max-w-4xl p-4">
            <h1 className="mb-2 text-3xl leading-tight tracking-tight text-gray-900 uppercase md:text-5xl lg:text-4xl xl:text-5xl 2xl:mb-4">
              <span className="font-extrabold">Software Engineer </span>
              <span>specializing in </span>
              <span className="font-extrabold">Odoo </span>
              <span>&amp; </span>
              <span className="font-extrabold">Modern Web Application</span>
            </h1>
            <p className="mb-2 leading-tight tracking-wider text-gray-800 md:text-xl lg:text-lg 2xl:mb-3">
              <strong>6+ years experience</strong> <span>building </span>
              <span>ERP systems with</span> <strong>Odoo </strong>
              <span>at PT Tigernix Solution Indonesia, </span>
              <span>and developing scalable web applications using </span>
              <strong>React, Next.js, </strong>
              <span>and </span>
              <strong>FastAPI.</strong>
            </p>
            <p className="mb-4 leading-tight tracking-wider text-gray-600 md:text-xl lg:text-lg 2xl:mb-6">
              I help businesses design, build, and deploy custom software
              solutions — from ERP systems to full-stack web applications and
              cloud infrastructure.
            </p>
            <div className="flex flex-col gap-2 md:flex-row md:text-xl lg:text-lg">
              <Link
                to="/work"
                title="View My Work"
                className="flext w-full items-center justify-center rounded border border-gray-900 bg-gray-900 p-2 text-center font-bold text-white uppercase md:w-auto md:p-4 md:text-nowrap lg:p-2"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                title="Get in Touch"
                className="flext w-full items-center justify-center rounded border border-gray-300 p-2 text-center font-bold uppercase md:w-auto md:p-4 md:text-nowrap lg:p-2"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        
      </section>
    </main>
  );
}
