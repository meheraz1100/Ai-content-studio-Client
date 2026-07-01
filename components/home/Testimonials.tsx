const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    review:
      "This AI tool saves me hours every week. Highly recommended!",
  },
  {
    name: "David Lee",
    role: "Freelancer",
    review:
      "The content quality is surprisingly good and easy to customize.",
  },
  {
    name: "Emma Wilson",
    role: "Marketing Manager",
    review:
      "Our team uses it daily for blogs and social media captions.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          What Our Users Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border bg-white p-8 shadow-sm"
            >
              <p>{item.review}</p>

              <h3 className="mt-6 font-bold">
                {item.name}
              </h3>

              <span className="text-sm text-gray-500">
                {item.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}