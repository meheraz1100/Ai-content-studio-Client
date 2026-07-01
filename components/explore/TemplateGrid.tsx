import TemplateCard from "@/components/common/TemplateCard";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  templates: any[];
}

export default function TemplateGrid({
  templates,
}: Props) {
  return (
    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          {...template}
        />
      ))}
    </div>
  );
}