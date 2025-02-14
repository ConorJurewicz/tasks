/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    return !numbers.length ? [] : [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled: number[] = numbers.map((num) => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removeDollar = (num: string): string => {
        return num.charAt(0) === "$" ? num.slice(1) : num;
    };
    return amounts.map((num: string): number =>
        isNaN(parseInt(removeDollar(num))) ? 0 : parseInt(removeDollar(num))
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQ = messages.filter((str: string) => !str.endsWith("?"));
    return noQ.map((str: string): string =>
        str[str.length - 1] === "!" ? str.toUpperCase() : str
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let counter = 0;
    words.forEach((str) => (str.length < 4 ? counter++ : undefined));
    return counter;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const allowedColors: string[] = ["red", "blue", "green"];
    return colors.length < 1
        ? true
        : colors.every((color: string) => allowedColors.includes(color));
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((sum_1: number, num: number) => sum_1 + num, 0);
    const join = addends.length === 0 ? "0" : addends.join("+");
    return `${sum}=${join}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum = 0;
    let arr: number[] = [...values];
    const negIndex = values.findIndex((num: number): boolean => num < 0);
    if (negIndex !== -1) {
        sum = values.slice(0, negIndex).reduce((sum_1, num) => sum_1 + num, 0);
        arr.splice(negIndex + 1, 0, sum);
    } else {
        sum = values.reduce((sum, num) => sum + num, 0);
        arr = [...values, sum];
    }
    return arr;
}
