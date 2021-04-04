import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileNames => {
    const id = fileNames.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileNames);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data
    };
  });

  type Data = {
    id: string,
    date?: Date
  };

  return allPostsData.sort((a: Data, b: Data) => {
    // HACK: 型安全にaとbをソートできる様にすべき
    if (!(a.date && b.date)) {
      return 1;
    }
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};