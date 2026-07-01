import { Upload, Sparkles, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Enter Prompt",
    desc: "Describe what you want AI to generate.",
  },
  {
    icon: Sparkles,
    title: "AI Processing",
    desc: "Our AI instantly creates quality content.",
  },
  {
    icon: Download,
    title: "Copy & Use",
    desc: "Copy the result and use it anywhere.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold">
          How It Works
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.title}
            className="rounded-xl border p-8 text-center"
          >
            <step.icon className="mx-auto mb-5 h-12 w-12 text-blue-600" />

            <h3 className="text-xl font-semibold">
              {step.title}
            </h3>

            <p className="mt-3 text-gray-600">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}