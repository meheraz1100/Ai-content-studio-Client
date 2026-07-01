import Link from "next/link";
import Image from "next/image";

interface TemplateCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  category: string;
}

export default function TemplateCard({
  id,
  title,
  description,
  image,
  rating,
  category,
}: TemplateCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-700">
          {category}
        </span>

        <h3 className="mt-4 text-xl font-bold">
          {title}
        </h3>

        <p className="mt-3 text-gray-600">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span>⭐ {rating}</span>

          <Link
            href={`/template/${id}`}
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}