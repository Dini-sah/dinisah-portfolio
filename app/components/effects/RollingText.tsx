"use client";

import { useEffect, useState } from "react";

type RollingTextProps = {
  className?: string;
  cursorClassName?: string;
  deleteSpeed?: number;
  holdDelay?: number;
  messages: string[];
  typeSpeed?: number;
};

export default function RollingText({
  className = "",
  cursorClassName = "",
  deleteSpeed = 42,
  holdDelay = 1200,
  messages,
  typeSpeed = 68,
}: RollingTextProps) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (messages.length === 0) return;

    const currentMessage = messages[messageIndex];
    const isComplete = visibleLength === currentMessage.length;
    const isEmpty = visibleLength === 0;
    const delay = isComplete && !isDeleting ? holdDelay : isDeleting ? deleteSpeed : typeSpeed;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setMessageIndex((index) => (index + 1) % messages.length);
        return;
      }

      setVisibleLength((length) => length + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleteSpeed, holdDelay, isDeleting, messageIndex, messages, typeSpeed, visibleLength]);

  if (messages.length === 0) return null;

  return (
    <span className={className}>
      {messages[messageIndex].slice(0, visibleLength)}
      <span className={cursorClassName} />
    </span>
  );
}
