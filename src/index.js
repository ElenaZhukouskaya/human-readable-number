module.exports = function toReadable(number) {
    const digital = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) {
        return "zero";
    }
    if (number > 0 && number < 20) {
        return digital[number];
    }
    if (number >= 20 && number < 100) {
        return number % 10 === 0
            ? dozens[number / 10]
            : dozens[Math.trunc(number / 10)] + " " + digital[number % 10];
    }

    if (number >= 100 && number < 1000) {
        return number % 100 === 0
            ? digital[number / 100] + " hundred"
            : digital[Math.trunc(number / 100)] +
                  " hundred " +
                  toReadable(number - Math.trunc(number / 100) * 100);
    }
};
