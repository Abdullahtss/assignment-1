"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const quotesData: Record<"inspiration" | "success" | "life", string[]> = {
  inspiration: [
    "Believe you can and you're halfway there.",
    "Your time is limited, don't waste it living someone else's life.",
    "Dream big and dare to fail."
  ],
  success: [
    "Success is not in what you have, but who you are.",
    "Don't be afraid to give up the good to go for the great.",
    "Success is walking from failure to failure with no loss of enthusiasm."
  ],
  life: [
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "In the end, we only regret the chances we didn't take."
  ]
};

export default function QuoteGenerator() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedQuotes = quotesData[topic.toLowerCase() as keyof typeof quotesData];
    setQuotes(selectedQuotes || []);
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-center">Quote Generator</h1>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          placeholder="Enter a topic like inspiration or success"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button type="submit">Get Quotes</Button>
      </form>
      <div className="space-y-4">
        {quotes.length > 0 ? (
          quotes.map((quote, index) => (
            <Card key={index}>
              <CardContent className="p-4 text-center">{quote}</CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500">No quotes found for this topic.</p>
        )}
      </div>
    </div>
  );
}
