//The Dobble Algorithm - www.101computing.net/the-dobble-algorithm/

export const calculateDobbles = (
    symbols: string[],
    /**
     * It has to be a prime number plus one
     */
    numberOfSymbolsOnCard = 3,
    shuffleSymbolsOnCard = true
): string[][] => {
    const cards: number[][] = [];

    // Work out the prime number
    const n = numberOfSymbolsOnCard - 1;

    // Total number of cards that can be generated following the Dobble rules
    const numberOfCards = n ** 2 + n + 1; // e.g. 7^2 + 7 + 1 = 57

    // Add first set of n+1 cards (e.g. 8 cards)
    for (let i = 0; i < n + 1; i++) {
        // Add new card with first symbol
        cards.push([1]);
        // Add n+1 symbols on the card (e.g. 8 symbols)
        for (let j = 0; j < n; j++) {
            cards[i].push((j + 1) + (i * n) + 1);
        }
    }

    // Add n sets of n cards
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // Append a new card with 1 symbol
            cards.push([i + 2]);
            // Add n symbols on the card (e.g. 7 symbols)
            for (let k = 0; k < n; k++) {
                const val = (n + 1 + n * k + (i * k + j) % n) + 1;
                cards[cards.length - 1].push(val);
            }
        }
    }

    // Shuffle symbols on each card
    if (shuffleSymbolsOnCard) {
        for (const card of cards) {
            card.sort(() => Math.random() - 0.5);
        }
    }

    // Output all cards
    return cards.map((card) => card.map((number) => symbols[number - 1]));
}