/**
 * A social media platform stores posts.
 * Tasks:
 * 1. Find post that containing "typescript"!
 * 2. Find post that containing "nestjs"!
 * 3. Find the post with highest number of likes!
 * 4. Calculate the total of likes!
 */

const posts = [
  {
    author: "Andi",
    content: "Learning TypeScript #typescript #programming",
    hashtags: ["typescript", "programming"],
    likes: 120,
  },
  {
    author: "Budi",
    content: "My first NestJS project #nestjs #typescript",
    hashtags: ["nestjs", "typescript"],
    likes: 250,
  },
  {
    author: "Citra",
    content: "Frontend development #nextjs #react",
    hashtags: ["nextjs", "react"],
    likes: 180,
  },
  {
    author: "Deni",
    content: "Backend with NestJS #nestjs #backend",
    hashtags: ["nestjs", "backend"],
    likes: 300,
  },
];


const typescriptPosts = posts.filter((p) => {
  return p.hashtags.includes("typescript")
})


const nestJSPosts = posts.filter((post)=> {
  return post.hashtags.includes("nestjs")
})
//includes() digunakan karena ketika ingin memeriksa apakah sebuah kata kunci

const postWithHighestNumber = posts.sort((a, b)=> b.likes - a.likes)
const popularPost = postWithHighestNumber[0]

const totalOFlikes = posts.reduce((sum, p)=> sum + p.likes,0)

console.log(typescriptPosts)
console.log(nestJSPosts)
console.log(popularPost)
console.log(totalOFlikes)