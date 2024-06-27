const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(__dirname, '..', 'src', 'components', 'blog', 'posts');
const outputFilePath = path.join(__dirname, '..', 'src', 'components', 'blog', 'postsData.json');

const getPostsData = () => {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join(postsDirectory, filename), 'utf-8');
    const { data: frontMatter, content } = matter(markdownWithMeta);

    return {
      slug,
      title: frontMatter.title,
      content,
    };
  });

  return posts;
};

const writePostsData = () => {
  const posts = getPostsData();
  fs.writeFileSync(outputFilePath, JSON.stringify(posts, null, 2));
};

writePostsData();
console.log('Blog data generated successfully');
