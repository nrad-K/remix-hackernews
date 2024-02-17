export async function getTopStories(): Promise<number[]> {
  return fetch("https://hacker-news.firebaseio.com/v0/topstories.json").then(
    (res) => res.json()
  );
}

interface ArticleItem {
  id: number;
  by: string;
  text: string;
  descendants: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export async function getArticle(id: number): Promise<ArticleItem> {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
    (res) => res.json()
  );
}
