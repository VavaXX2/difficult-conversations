"use client";

import { useState, useEffect } from "react";

//p = persona, t = text, R = report, M = manager

export default function Home() {
  const [replies, setReplies] = useState([
    { p: "R", t: "Hello Dan" },
    { p: "M", t: "Hello Mathew" },
  ]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    console.log("Hi!");
    const translatedReplies = replies.map(
      (reply: { p: string; t: string }, index: number) => {
        if (reply.p === "R") {
          return `Reporting EE: ${reply.t}`;
        }
        return `Manager: ${reply.t}`;
      }
    );
    console.log(translatedReplies);
  }, [replies]);

  function handleSubmit() {
    setReplies([...replies, { p: "M", t: input }]);
    setInput("");
  }

  useEffect(() => {
    console.log(replies);
  }, [replies]);

  return (
    <div className="container flex justify-center mx-auto mt-64">
      <div className="w-96 h-96 mr-36 bg-white border-2 border-primary rounded"></div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type your answer here"
          className="input input-bordered input-primary bg-white w-full max-w-xs"
          value={input}
          //@ts-ignore
          onInput={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
