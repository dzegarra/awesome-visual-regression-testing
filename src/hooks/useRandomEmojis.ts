import { useCallback, useState } from "react";
import { getRandomEmojis } from "../helpers/getRandomEmojis";

export const useRandomEmojis = (length: number) => {
    const [emojis, setEmojis] = useState<string[]>(getRandomEmojis(length));

    const randomizeEmojis = useCallback(() => {
        setEmojis(getRandomEmojis(length));
    }, []);

    return { emojis, randomizeEmojis, setEmojis, isValid: emojis.length === length };
}