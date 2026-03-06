import { data, Link } from "react-router";
import type { Route } from "./+types/list";
import { string_to_date } from "~/util";
import { api } from "libraries/api";

export async function loader({ request }: Route.LoaderArgs) {
  const results = await api<DataList<Post>>("/blog/post/list");
  return data({
    posts: results?.items,
  });
}

export default function BlogList({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <main className="container mx-auto min-h-screen">
      {!posts && (
        <div className="text-center p-4 text-gray-500">No posts have been created yet. Check back later.</div>
      )}
      {posts && (
        <section
          className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          aria-label="Blog Posts"
        >
          {posts?.map((post) => {
            return (
              <article className="" key={post.public_id}>
                <div className="group relative mb-2 overflow-hidden rounded-xl bg-gray-900 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <Link to="/blog/my-first-blog">
                    <img
                      src={post.thumbnail_url}
                      alt={post.title}
                      className="aspect-4/3 w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-75 group-hover:saturate-150"
                    />
                    {/* Subtle Vignette Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                  </Link>

                  {/* Floating Glass Categories */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                    {post.categories.map((category) => (
                      <Link
                        to={`/blog/category/${category.public_id}`}
                        className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium tracking-wider text-white uppercase backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
                        key={category.public_id}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <header>
                  <h2 className="mb-1 text-xl leading-snug font-semibold tracking-wide">
                    <Link to="/">{post.title}</Link>
                  </h2>
                  <div className="flex items-center gap-1 text-xs text-gray-700">
                    <time dateTime={post.updated_at}>
                      {string_to_date(post.updated_at)}
                    </time>
                    <span className="text-gray-500"> &#8226; </span>
                    <span>By</span>
                    <Link to="#" className="font-semibold">
                      Rangga Maulana
                    </Link>
                  </div>
                </header>
              </article>
            );
          })}
        </section>
      )}
    </main>
  );
}
