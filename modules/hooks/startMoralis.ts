import Moralis from "moralis";

const MORALIS_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjE5MDdlYTdhLTlkM2YtNGE3NS1iYTU3LTEwZmRmOWZjOGE2MSIsIm9yZ0lkIjoiMzYxNzg2IiwidXNlcklkIjoiMzcxODI0IiwidHlwZUlkIjoiOWI5YWQ1MmQtNjA5Mi00ZTE1LTg2M2EtYjFlNmQ3NTM2ZjQ4IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTc4ODEzOTMsImV4cCI6NDg1MzY0MTM5M30.aJAWW-fnxyLGLC2-GzVhhK64qsB2BXa6ORjy5GA-9hA";

export const startMoralis = async () => {
  try {
    await Moralis.start({
      apiKey: MORALIS_KEY,
    });
  } catch (err) {
    console.log(err);
  }
};
