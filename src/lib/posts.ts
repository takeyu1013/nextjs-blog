import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export type Post = {
  id: string,
  title: string
  date: string,
  content: string
};

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileNames => {
    const id = fileNames.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileNames);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const matterResult = matter(fileContents);
    console.log(matterResult);
    const data = matterResult.data;
    const title = data.title as string;
    const date = data.date as string;
    const content = matterResult.content as string;
    const post: Post = { id, title, date, content };
    return post;
  });

  return allPostsData.sort((a: Post, b: Post) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};