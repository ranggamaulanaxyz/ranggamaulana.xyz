import { Building2, Cable, Globe, Server } from "lucide-react";
import type React from "react";
import { Link } from "react-router";

function Card({
  title,
  children,
  icon: Icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded border border-gray-200">
      <div className="p-4">
        <span className="inline-block rounded bg-gray-200 p-1 text-gray-700">
          <Icon />
        </span>
        <h3 className="text-lg">{title}</h3>
        <p className="text-sm text-gray-700">{children}</p>
      </div>
    </div>
  );
}

export function WelcomePage() {
  return (
    <main className="min-h-screen">
      <section
        className="relative bg-right bg-no-repeat py-8"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-white via-transparent/99 to-white"></div>
        <div className="relative container mx-auto lg:flex lg:flex-row-reverse lg:justify-between 2xl:items-center">
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
      <section className="container mx-auto py-8">
        <div className="p-4">
          <h2 className="mb-3 text-xl font-extrabold uppercase md:text-2xl">
            What I can Help You Build
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card title="ERP Development" icon={Building2}>
              Custom modules and app (Odoo or ERPNext), Business Process
              Automation, Accounting & operations systems.
            </Card>
            <Card title="Fullstack Web Development" icon={Globe}>
              React / React Router v7 / Next.js applications, Admin dashboards,
              Company profile systems.
            </Card>
            <Card title="Backend & API Development" icon={Cable}>
              FastAPI REST API, Authentication systems, Database design.
            </Card>
            <Card title="Infrastructure & Deployment" icon={Server}>
              VPS setup & maintenance, Cloud hosting configuration, Docker &
              deployment pipelines.
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
