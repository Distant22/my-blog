import Link from "next/link";
import Script from "next/script";

const posts = [
  {
    id: 1,
    title: "我的第一篇文章",
    summary: "這是一個簡單的部落格文章摘要...",
    date: "2025-05-25",
  },
  {
    id: 2,
    title: "探索 Next.js 的世界",
    summary: "Next.js 是一個 React 的框架，提供了伺服端渲染與靜態網站產生...",
    date: "2025-05-24",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-gray-900 p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <Script
          src="http://localhost:3000/embed.js"
          data-project-id="22ba7799-c458-401d-b41e-1ddea59409fd"
          strategy="afterInteractive"
        />
        <h1 className="text-5xl font-extrabold mb-12 text-center text-sky-700 drop-shadow-sm">
          我的部落格
        </h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border border-gray-200 rounded-2xl p-6 bg-white shadow-md hover:shadow-lg transition duration-200 hover:scale-[1.01]"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-sky-800">
                <Link href={`/posts/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500 mb-3">{post.date}</p>
              <p className="text-gray-700 leading-relaxed">{post.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
