const blogs = [
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    title: "How AI is Changing Content Creation",
    description:
      "Discover how artificial intelligence is transforming the way creators write content.",
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    title: "10 Tips for Better Blogging",
    description:
      "Simple but powerful techniques to improve your blog writing skills.",
  },
  {
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
    title: "Best AI Writing Tools in 2026",
    description:
      "Compare the top AI writing assistants for productivity and creativity.",
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    title: "SEO Writing Guide",
    description:
      "Learn how to optimize your articles for search engines using AI.",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    title: "Future of Artificial Intelligence",
    description:
      "Explore upcoming AI trends that will shape the next decade.",
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    title: "Content Marketing Strategies",
    description:
      "Effective content marketing strategies to grow your audience.",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto py-20 px-6">

      <h1 className="text-4xl font-bold text-center mb-14">
        Latest Blogs
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {blogs.map((blog) => (

          <div
            key={blog.title}
            className="bg-white rounded-xl shadow overflow-hidden hover:shadow-xl transition"
          >

            <img
              src={blog.image}
              alt={blog.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="font-bold text-xl mb-3">
                {blog.title}
              </h2>

              <p className="text-gray-600 mb-5">
                {blog.description}
              </p>

              <button className="text-blue-600 font-semibold">
                Read More →
              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}