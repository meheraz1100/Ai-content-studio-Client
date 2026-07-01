import {
  WandSparkles,
  FileText,
  Bot,
  Brain,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: WandSparkles,
    title: "AI Content",
    description:
      "Generate high-quality content in seconds using AI.",
  },
  {
    icon: FileText,
    title: "Summarizer",
    description:
      "Turn long articles into short readable summaries.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description:
      "Get instant help from your personal AI assistant.",
  },
  {
    icon: Brain,
    title: "Smart Suggestions",
    description:
      "Receive intelligent recommendations based on your prompts.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold">
          Powerful AI Features
        </h2>

        <p className="mt-4 text-gray-600">
          Everything you need to create better content faster.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
          />
        ))}
      </div>
    </section>
  );
}