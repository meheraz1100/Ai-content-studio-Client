import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-5 inline-flex rounded-xl bg-blue-100 p-3">
        <Icon className="h-7 w-7 text-blue-600" />
      </div>

      <h3 className="mb-3 text-xl font-semibold">{title}</h3>

      <p className="text-gray-600">{description}</p>
    </div>
  );
}