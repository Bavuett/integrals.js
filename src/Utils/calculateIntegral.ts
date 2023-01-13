import {evaluate} from 'mathjs';

// This piece of code fucking sucks but it I have to be fast and it works so who cares.
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

    let isError: boolean = false;

    middlePoints.forEach((point) => {
        try {
            const funcResult: number = evaluate(mathFunc, {x: point});
            result += funcResult * delta;
        } catch (e) {
            isError = true;
            console.log(e);
        }
    });

    if (isError) {
        alert('La tua funzione non è valida.');
        return null;
    }

    result = parseFloat(result.toFixed(2));
    return result;
}

export default calculateIntegral;