import Link from "next/link";

export default function Blog() {
    const blogs = [
      {
        id: 1,
        title: "Blog 1",
        content: "This is blog 1",
      },
      {
        id: 2,
        title: "Blog 2",
        content: "This is blog 2",
      },
      {
        id: 3,
        title: "Blog 3",
        content: "This is blog 3",
      },
    ]
    return (
      <div>
        {blogs.map((blog) => (
          <div className="m-3" key={blog.id}>
            <h1><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></h1>
          </div>
        ))}
      </div>
    );
  }
  