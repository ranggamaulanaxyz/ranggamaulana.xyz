import { useState } from "react";
import { type MultiValue } from "react-select";
import CreatableSelect from "react-select/creatable";
import RichEditor from "~/components/blog/editor/rich-editor";
import TitleEditor from "~/components/blog/editor/title-editor";
import { BlogMain, BlogSidebar, BlogWrapper } from "~/components/blog/layout";
import { BlogWidget, BlogWidgetContent } from "~/components/blog/widget";
import ImageDropZone from "~/components/react-dropzone/dropzone";
import type { Route } from "./+types/create";
import { data } from "react-router";
import { sessionStorage } from "libraries/session.server";

export async function loader({ request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie")
  const session = sessionStorage.getSession(cookieHeader);
  return data({})
}

type Option = {
  value: string;
  label: string;
};

export default function BlogCreate() {
  const categoriesOptions: Option[] = [
    { value: "1", label: "Satu" },
    { value: "2", label: "Dua" },
  ];
  const [selectedCategories, setSelectedCategories] = useState<
    MultiValue<Option>
  >([]);
  const [inputValue, setInputValue] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleChangeCategories = (value: Option | null) => {};
  return (
    <BlogWrapper>
      <BlogSidebar>
        <BlogWidget>
          <BlogWidgetContent>
            <ImageDropZone />
          </BlogWidgetContent>
          <BlogWidgetContent>
            <div className="mb-3">
              <label htmlFor="Excert" className="block">
                Excerpt
              </label>
              <textarea
                placeholder="Excerpt"
                className="w-full border"
              ></textarea>
            </div>
          </BlogWidgetContent>
        </BlogWidget>
      </BlogSidebar>
      <BlogMain>
        <header className="not-prose">
          <div className="mb-1 text-2xl leading-tight text-slate-900 lg:text-5xl">
            <TitleEditor />
          </div>
        </header>
        <RichEditor />
      </BlogMain>
      <BlogSidebar>
        <BlogWidget>
          <BlogWidgetContent>
            <div className="mb-3">
              <label htmlFor="categories">Categories</label>
              <CreatableSelect
                id="categories"
                name="categories"
                isMulti
                options={categoriesOptions}
                value={selectedCategories}
                onChange={(opts) => setSelectedCategories(opts)}
                inputValue={inputValue}
                onInputChange={(val) => setInputValue(val)}
                onMenuOpen={() => setMenuIsOpen(true)}
                onMenuClose={() => setMenuIsOpen(false)}
                menuIsOpen={menuIsOpen}
                instanceId="blog-select"
                inputId="blog-select-input"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tags">Tags</label>
              <CreatableSelect
                id="tags"
                name="tags"
                isMulti
                options={categoriesOptions}
                value={selectedCategories}
                onChange={(opts) => setSelectedCategories(opts)}
                inputValue={inputValue}
                onInputChange={(val) => setInputValue(val)}
                onMenuOpen={() => setMenuIsOpen(true)}
                onMenuClose={() => setMenuIsOpen(false)}
                menuIsOpen={menuIsOpen}
                instanceId="blog-select"
                inputId="blog-select-input"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tags">Slug</label>
              <input type="text" />
            </div>
          </BlogWidgetContent>
        </BlogWidget>
      </BlogSidebar>
    </BlogWrapper>
  );
}
