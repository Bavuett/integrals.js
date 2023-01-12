import {evaluate} from 'mathjs';

function calculateIntegral(mathFunc: string, rects: number, low: number, up: number) {
    let result: number = 0;

    const delta: number = (up - low) / rects;

    const middlePoints: number[] = [];

    let lowCopy: number = low;

    while (lowCopy < up) {
        const middlePoint: number = lowCopy + (delta / 2);
        middlePoints.push(middlePoint);

        lowCopy += delta;
        console.log(middlePoints);
    }

    middlePoints.forEach((point) => {
        const funcResult: number = evaluate(mathFunc, {x: point});
        result += funcResult * delta;
    });

    result = parseFloat(result.toFixed(2));
    return result;
}

export default calculateIntegral;