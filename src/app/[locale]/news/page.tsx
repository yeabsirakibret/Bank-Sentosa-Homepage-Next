'use client'

import { useEffect, useState } from 'react'

export default function NewsPage() {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => setNews(data))
  }, [])

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Latest News</h1>
      <ul className="mt-4 space-y-2">
        {news.map((item: any) => (
          <li key={item.id} className="border p-4 rounded-lg shadow">
            <strong>{item.title}</strong>
            <p className="text-sm text-gray-600">{item.date}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
