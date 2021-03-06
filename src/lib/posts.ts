import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

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

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
};

export const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHTML = processedContent.toString();
  return {
    id,
    contentHTML,
    ...(matterResult.data as { date: string, title: string })
  };
};