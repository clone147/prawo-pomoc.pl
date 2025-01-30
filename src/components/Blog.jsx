import React from 'react';

const posts = [
  {
    title: "Jak uzyskać odszkodowanie po wypadku?",
    excerpt: "Poznaj kroki, które należy podjąć, aby skutecznie uzyskać odszkodowanie po wypadku...",
    date: "2023-07-15"
  },
  {
    title: "Sprawy spadkowe - co warto wiedzieć?",
    excerpt: "Wyjaśniamy najważniejsze aspekty prawa spadkowego i procesu dziedziczenia...",
    date: "2023-07-10"
  },
  {
    title: "Kredyty frankowe - najnowsze orzecznictwo",
    excerpt: "Aktualne informacje na temat spraw związanych z kredytami frankowymi...",
    date: "2023-07-05"
  }
];

export default function Blog() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Aktualności</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="text-sm text-gray-500">{post.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
