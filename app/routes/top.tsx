import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { Fragment } from "react";
import { TypographyH1, TypographyH2 } from "~/components/Typography";
import { Button } from "~/components/ui/button";
import { getArticle, getTopStories } from "~/utils/hacker-news.server";

export async function loader() {
  const topIds = await getTopStories();
  const itemCount = 20;
  const slicedTopIds = topIds.slice(0, itemCount);

  const articles = await Promise.all(slicedTopIds.map((id) => getArticle(id)));

  const filteredArticles = articles.map((article) => ({
    id: article.id,
    title: article.title,
  }));

  return filteredArticles;
}

export default function Top() {
  const articles = useLoaderData<typeof loader>();

  return (
    <Fragment>
      <header className="p-4 border-b-2">
        <TypographyH1>Hacker News Viewer</TypographyH1>
      </header>
      <div className="flex px-4 py-6">
        <aside>
          <TypographyH2 className="border-b-2">Top 20</TypographyH2>
          <nav>
            <ul>
              {articles.map((article) => (
                <li key={article.id}>
                  <Button variant="link">
                    <Link to={`/top/${article.id}`}>{article.title}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
    </Fragment>
  );
}
