"use client";

import { useState, useEffect } from "react";

//p = persona, t = text, R = report, M = manager

export default function Home() {
  const [replies, setReplies] = useState([
    { p: "R", t: "Hello Dan" },
    { p: "M", t: "Hello Mathew" },
  ]);
  const [input, setInput] = useState<string>("");

  const translatedReplies = (): string[] => {
    let arr: string[] = [];
    replies.map((reply: { p: string; t: string }) => {
      if (reply.p === "R") {
        arr.push(`Reporting EE: ${reply.t}`);
      } else {
        arr.push(`Manager: ${reply.t}`);
      }
    });
    return arr;
  };

  function handleSubmit() {
    setReplies([...replies, { p: "M", t: input }]);
    setInput("");
  }

  useEffect(() => {
    console.log(replies);
    console.log(translatedReplies());
  }, [replies]);

  return (
    <div className="container flex justify-center mx-auto mt-64">
      <div className="w-96 h-96 mr-36 bg-white border-2 border-primary rounded">
        {translatedReplies().map((reply: string, index: number) => {
          return (
            <p key={index} className="text-black">
              {reply}
            </p>
          );
        })}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type your answer here"
          className="input input-bordered input-primary bg-white w-full max-w-xs text-black"
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
