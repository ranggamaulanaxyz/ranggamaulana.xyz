import { MessageSquareText, Share2 } from "lucide-react";
import { Link } from "react-router";
import { string_to_date } from "~/util";

export default function BlogPostRead() {
  return (
    <div className="container mx-auto grid min-h-screen grid-cols-1 gap-2 p-4 md:grid-cols-[1fr_240px] xl:grid-cols-[300px_1fr_300px]">
      <aside className="hidden xl:block">
        <div className="sticky top-18">test</div>
      </aside>
      <main className="min-h-screen">
        <article className="prose lg:prose-xl">
          <header className="not-prose">
            <h1 className="mb-1 text-2xl leading-tight text-slate-900 lg:text-5xl">
              Welcome to my blog, Lorem Ipsum Dolor sit Amet and Something
            </h1>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-1 text-sm text-gray-700">
                <span>By</span> <Link to="#" className="font-semibold">Rangga Maulana</Link> <span className="text-gray-500"> &#8226; </span> <time dateTime="2026-01-01">{string_to_date("2026-01-01")}</time>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-gray-200 text-gray-500 p-2 rounded-full hover:bg-gray-300 hover:cursor-pointer">
                  <Share2 />
                </button>
                <a href="#comments" className="bg-gray-200 text-gray-500 p-2 rounded-full hover:bg-gray-300 hover:cursor-pointer">
                  <MessageSquareText />
                </a>
              </div>
            </div>
          </header>
          <section>
            {" "}
            <h2>Introduction</h2>{" "}
            <p>
              {" "}
              <strong>Semantic HTML</strong> helps browsers and developers
              understand the structure of a document. Instead of using generic
              elements like <code>&lt;div&gt;</code>, semantic elements describe
              their purpose clearly.{" "}
            </p>{" "}
            <p>
              {" "}
              For example, <em>articles</em>, <mark>important highlights</mark>,
              and <small>side notes</small> can be expressed directly in
              HTML.{" "}
            </p>{" "}
            <p>
              {" "}
              The abbreviation{" "}
              <abbr title="HyperText Markup Language">HTML</abbr> is the
              foundation of the web.{" "}
            </p>{" "}
          </section>{" "}
          <section>
            {" "}
            <h2>Inline Text Examples</h2>{" "}
            <p>
              {" "}
              You can use <strong>strong importance</strong> or{" "}
              <em>emphasis</em>. Sometimes text is <del>removed</del> and{" "}
              <ins>inserted</ins>.{" "}
            </p>{" "}
            <p>
              {" "}
              Mathematical notation may include H<sub>2</sub>O or E = mc{" "}
              <sup>2</sup>.{" "}
            </p>{" "}
            <p>
              {" "}
              Variables like <var>x</var> or keyboard input such as{" "}
              <kbd>Ctrl</kbd> + <kbd>S</kbd>.{" "}
            </p>{" "}
            <p>
              {" "}
              Program output might look like{" "}
              <samp>Server started successfully</samp>.{" "}
            </p>{" "}
          </section>{" "}
          <section>
            {" "}
            <h2>Quotations</h2>{" "}
            <p>
              {" "}
              Short inline quote:{" "}
              <q cite="https://developer.mozilla.org">
                {" "}
                Semantic HTML introduces meaning to the web page.{" "}
              </q>{" "}
            </p>{" "}
            <blockquote cite="https://developer.mozilla.org">
              {" "}
              <p>
                {" "}
                Semantic HTML elements clearly describe their meaning to both
                the browser and the developer.{" "}
              </p>{" "}
              <cite>MDN Web Docs</cite>{" "}
            </blockquote>{" "}
          </section>{" "}
          <section>
            {" "}
            <h2>Code Example</h2>{" "}
            <pre>
              {" "}
              <code>{`function greet(name) { console.log(\`Hello, \${name}!\`); } greet("Developer");`}</code>{" "}
            </pre>{" "}
          </section>{" "}
          <section>
            {" "}
            <h2>Lists</h2> <h3>Unordered List</h3>{" "}
            <ul>
              {" "}
              <li>Semantic structure</li> <li>Accessibility improvements</li>{" "}
              <li>Better SEO understanding</li>{" "}
            </ul>{" "}
            <h3>Ordered List</h3>{" "}
            <ol>
              {" "}
              <li>Write semantic HTML</li> <li>Add structured metadata</li>{" "}
              <li>Style with CSS or Tailwind</li>{" "}
            </ol>{" "}
            <h3>Description List</h3>{" "}
            <dl>
              {" "}
              <dt>HTML</dt> <dd>The standard markup language for web pages.</dd>{" "}
              <dt>CSS</dt> <dd>Used to style HTML documents.</dd>{" "}
              <dt>JavaScript</dt>{" "}
              <dd>Adds interactivity to web applications.</dd>{" "}
            </dl>{" "}
          </section>{" "}
          <section>
            {" "}
            <h2>Address</h2>{" "}
            <address>
              {" "}
              Written by John Developer <br /> Email: john@example.com <br />{" "}
              Website: example.com{" "}
            </address>{" "}
          </section>
          <section id="comments">
            <h2>Comments</h2>
            <form>
              <fieldset>
                <legend>
                  Leave a comment
                </legend>
              </fieldset>
              <p>
                <label htmlFor="name" className="block">Name</label>
                <input name="name" type="text" required />
              </p>
              <p>
                <label htmlFor="comment" className="block">Comment</label>
                <textarea name="comment" rows={4} required></textarea>
              </p>
            </form>
            <article>
              <div>
                <img src="https://picsum.photos/36/36" alt="Avatar" />
              </div>
              <div>
                <header>
                  <address>Rangga Maulana</address>
                  <time dateTime="2026-01-01">{string_to_date("2026-01-01")}</time>
                </header>
                <section>
                  My first comment
                </section>
                <section>
                  <div>
                    Balas
                  </div>
                  <article>
                    <div>
                      <img src="https://picsum.photos/36/36" alt="Avatar" />
                    </div>
                    <div>
                      <header>
                        <address>Maharani Devi</address>
                        <time dateTime="2026-01-01">{string_to_date("2026-01-01")}</time>
                      </header>
                      <section>
                        My first reply
                      </section>
                    </div>
                  </article>
                </section>
              </div>
            </article>
          </section>
          <footer></footer>
        </article>
      </main>
      <aside>
        <div className="sticky top-18">
          <img
            src="https://picsum.photos/400/300"
            alt="test"
            className="rounded"
          />
        </div>
      </aside>
    </div>
  );
}
