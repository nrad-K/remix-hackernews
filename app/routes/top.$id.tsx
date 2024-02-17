import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import {
  TypographyH3,
  TypographyH4,
  TypographyLarge,
  TypographyP,
} from "~/components/Typography";
import { Button } from "~/components/ui/button";
import { getArticle } from "~/utils/hacker-news.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;

  const article = await getArticle(Number(id));

  const comments = await Promise.all(
    article.kids.map((kidsItemId) => getArticle(kidsItemId))
  );

  return json({
    article,
    comments,
  });
}

export default function TopArticleById() {
  const loaderData = useLoaderData<typeof loader>();
  const { article, comments } = loaderData;

  return (
    <article className="px-6">
      <TypographyH3>{article.title}</TypographyH3>
      <TypographyP>
        by {article.by} on {new Date(article.time * 1000).toLocaleString()}
      </TypographyP>
      <Button variant="link">
        <Link to={article.url}>{article.url}</Link>
      </Button>

      <TypographyH4>Comments</TypographyH4>
      <div className="overflow-y size-fit">
        {comments.map((comment) => (
          <article key={comment.id} className="overflow-y p-2">
            <TypographyLarge>by: {comment.by}</TypographyLarge>
            <TypographyP>{comment.text}</TypographyP>
            <TypographyP>
              {new Date(comment.time * 1000).toLocaleString()}
            </TypographyP>
            <hr />
          </article>
        ))}
      </div>
    </article>
  );
}
