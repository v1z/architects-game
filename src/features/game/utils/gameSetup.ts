export const gameSetup  = (nftNumbers: number[], totalCards: number): Map<number, number> => {
  if (totalCards % 2 !== 0) {
    throw new Error(`Invalid input: totalCards (${totalCards}) must be even.`);
  }

  const totalPairsNeeded = totalCards / 2;

  // Ensure there are enough NFTs to create pairs
  if (nftNumbers.length * 2 < totalCards) {
    throw new Error(`Not enough unique NFTs to create ${totalCards} cards.`);
  }

  // Maintain a count of NFT appearances
  const nftCountMap = new Map<number, number>();
  const selectedNFTs: number[] = [];

  while (selectedNFTs.length < totalPairsNeeded) {
    const randomIndex = Math.floor(Math.random() * nftNumbers.length);
    const nft = nftNumbers[randomIndex];
    const count = nftCountMap.get(nft) || 0;

    // Allow each NFT to appear only twice
    if (count < 1) {
      selectedNFTs.push(nft);
      nftCountMap.set(nft, count + 1);
    }
  }

  // Duplicate and shuffle the deck
  const deck = [...selectedNFTs, ...selectedNFTs].sort(() => Math.random() - 0.5);

  // Map the deck to card indexes
  return new Map(deck.map((nft, index) => [index, nft]));
}
