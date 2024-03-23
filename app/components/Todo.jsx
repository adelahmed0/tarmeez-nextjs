"use client";

import { useEffect, useState } from "react";

export default function Todo() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  // https://jsonplaceholder.typicode.com/todos/1
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  !isLoading && console.log(data);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;
  return (
    <div>
      <h2>{data.title}</h2>
    </div>
  );
}
