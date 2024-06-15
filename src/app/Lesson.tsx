"use client";

import { useState } from "react";

type LessonProps = {
  title: string;
  shortSummary?: string;
};

type LikeState = "unset" | "like" | "dislike";

export function Lesson({ title, shortSummary }: LessonProps) {
  const [likeState, setLikeState] = useState<LikeState>("unset");
  return (
    <div>
      <h2>{title}</h2>
      {shortSummary && <p>{shortSummary}</p>}
      <button type="button">{likeState === 'unset' ? 'like' : likeState}</button>
    </div>
  );
}
