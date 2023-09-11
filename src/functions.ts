/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    return (temperature - 32) * (5 / 9);
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let SUM: number = 0;
    if (first > 0) {
        SUM += first;
    }
    if (second > 0) {
        SUM += second;
    }
    if (third > 0) {
        SUM += third;
    }
    return SUM;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    return message.toUpperCase() + "!";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    let t_or_f: boolean = false;
    const lastIndex: number = message.length - 1;
    message[lastIndex] == "?" ? (t_or_f = true) : (t_or_f = false);
    return t_or_f;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word.toLowerCase() != "no" && word.toLowerCase() != "yes") {
        return null;
    }
    let t_or_f: boolean = false;
    word.toLowerCase() == "yes" ? (t_or_f = true) : (t_or_f = false);
    return t_or_f;
}
