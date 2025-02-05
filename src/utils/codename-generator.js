const adjectives = ['Silent', 'Shadow', 'Phantom', 'Crystal', 'Midnight', 'Golden'];
const nouns = ['Nightingale', 'Kraken', 'Phoenix', 'Dragon', 'Eagle', 'Wolf'];

export const generateCodename = () => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `The ${adjective} ${noun}`;
};