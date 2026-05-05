const response = await fetch("/words5letters.txt");
const text = await response.text();

export const words: string[] = text
  .split("\n")
  .map(w => w.trim().toUpperCase());