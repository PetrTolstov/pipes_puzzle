import {oneOfThree, twoOfThree, wholeNumber} from "../configurations/fieldConfig";
//This thing rerender ALL puzzles (not one), I tried to fix that, but need more time for optimization

export function canvasRender(canvas: any, puzzle: string) {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        switch (puzzle) {
            case "╻" :
                ctx.moveTo(oneOfThree, twoOfThree);
                ctx.lineTo(oneOfThree, wholeNumber);
                ctx.lineTo(twoOfThree, wholeNumber);
                ctx.lineTo(twoOfThree, twoOfThree);
                ctx.lineTo(oneOfThree, twoOfThree);
                break
            case "╸" :
                ctx.moveTo(0, oneOfThree);
                ctx.lineTo(oneOfThree, oneOfThree);
                ctx.lineTo(oneOfThree, twoOfThree);
                ctx.lineTo(0, twoOfThree);
                ctx.lineTo(0, oneOfThree);
                break
            case "╹" :
                ctx.moveTo(oneOfThree, 0);
                ctx.lineTo(twoOfThree, 0);
                ctx.lineTo(twoOfThree, oneOfThree);
                ctx.lineTo(oneOfThree, oneOfThree);
                ctx.lineTo(oneOfThree, 0);
                break
            case "╺" :
                ctx.moveTo(twoOfThree, oneOfThree);
                ctx.lineTo(wholeNumber, oneOfThree);
                ctx.lineTo(wholeNumber, twoOfThree);
                ctx.lineTo(twoOfThree, twoOfThree);
                ctx.lineTo(twoOfThree, oneOfThree);
                break

            case "┗" :
                ctx.moveTo(oneOfThree, 0);
                ctx.lineTo(oneOfThree, twoOfThree);
                ctx.lineTo(wholeNumber, twoOfThree);
                ctx.lineTo(wholeNumber, oneOfThree);
                ctx.lineTo(twoOfThree, oneOfThree);
                ctx.lineTo(twoOfThree, 0);
                ctx.lineTo(oneOfThree, 0);
                break
            case "┏" :
                ctx.moveTo(oneOfThree, oneOfThree);
                ctx.lineTo(oneOfThree, wholeNumber);
                ctx.lineTo(twoOfThree, wholeNumber);
                ctx.lineTo(twoOfThree, twoOfThree);
                ctx.lineTo(wholeNumber, twoOfThree);
                ctx.lineTo(wholeNumber, oneOfThree);
                ctx.lineTo(oneOfThree, oneOfThree);
                break
            case "┓" :
                ctx.moveTo(0, oneOfThree);
                ctx.lineTo(twoOfThree, oneOfThree);
                ctx.lineTo(twoOfThree, wholeNumber);
                ctx.lineTo(oneOfThree, wholeNumber);
                ctx.lineTo(oneOfThree, twoOfThree);
                ctx.lineTo(0, twoOfThree);
                ctx.lineTo(0, oneOfThree);
                break
            case "┛" :
                ctx.moveTo(0, oneOfThree);
                ctx.lineTo(oneOfThree, oneOfThree);
                ctx.lineTo(oneOfThree, 0);
                ctx.lineTo(twoOfThree, 0);
                ctx.lineTo(twoOfThree, twoOfThree);
                ctx.lineTo(0, twoOfThree);
                ctx.lineTo(0, oneOfThree);
                break

            case "┫" :
                ctx.moveTo(0, oneOfThree);
                ctx.lineTo(oneOfThree, oneOfThree);
                ctx.lineTo(oneOfThree, 0);
                ctx.lineTo(twoOfThree, 0);
                ctx.lineTo(twoOfThree, wholeNumber);
                ctx.lineTo(oneOfThree, wholeNumber);
                ctx.lineTo(oneOfThree, twoOfThree);
                ctx.lineTo(0, twoOfThree);
                ctx.lineTo(0, oneOfThree);
                break
            case "┻":
                ctx.moveTo(oneOfThree, 0);
                ctx.lineTo(twoOfThree, 0);
                ctx.lineTo(twoOfThree, oneOfThree);
                ctx.lineTo(wholeNumber, oneOfThree);
                ctx.lineTo(wholeNumber, twoOfThree);
                ctx.lineTo(0, twoOfThree);
                ctx.lineTo(0, oneOfThree);
                ctx.lineTo(oneOfThree, oneOfThree);
                ctx.lineTo(oneOfThree, 0);
                break

            case "┣" :
                ctx.moveTo(wholeNumber, oneOfThree);
                ctx.lineTo(twoOfThree, oneOfThree);
                ctx.lineTo(twoOfThree, 0);
                ctx.lineTo(oneOfThree, 0);
                ctx.lineTo(oneOfThree, wholeNumber);
                ctx.lineTo(twoOfThree, wholeNumber);
                ctx.lineTo(twoOfThree, twoOfThree);
                ctx.lineTo(wholeNumber, twoOfThree);
                ctx.lineTo(wholeNumber, oneOfThree);
                break
            case "┳" :
                ctx.moveTo(oneOfThree, wholeNumber);
                ctx.lineTo(twoOfThree, wholeNumber);
                ctx.lineTo(twoOfThree, twoOfThree);
                ctx.lineTo(wholeNumber, twoOfThree);
                ctx.lineTo(wholeNumber, oneOfThree);
                ctx.lineTo(0, oneOfThree);
                ctx.lineTo(0, twoOfThree);
                ctx.lineTo(oneOfThree, twoOfThree);
                ctx.lineTo(oneOfThree, wholeNumber);
                break

            case "╋" :
                ctx.moveTo(oneOfThree, 0);
                ctx.lineTo(oneOfThree, oneOfThree);
                ctx.lineTo(0, oneOfThree);
                ctx.lineTo(0, twoOfThree);
                ctx.lineTo(oneOfThree, twoOfThree);
                ctx.lineTo(oneOfThree, wholeNumber);
                ctx.lineTo(twoOfThree, wholeNumber);
                ctx.lineTo(twoOfThree, twoOfThree);
                ctx.lineTo(wholeNumber, twoOfThree);
                ctx.lineTo(wholeNumber, oneOfThree);
                ctx.lineTo(twoOfThree, oneOfThree);
                ctx.lineTo(twoOfThree, 0);
                ctx.lineTo(oneOfThree, 0);
                break

            case "━" :
                ctx.moveTo(0, oneOfThree);
                ctx.lineTo(wholeNumber, oneOfThree);
                ctx.lineTo(wholeNumber, twoOfThree);
                ctx.lineTo(0, twoOfThree);
                ctx.lineTo(0, oneOfThree);
                break
            case "┃" :
                ctx.moveTo(oneOfThree, 0);
                ctx.lineTo(oneOfThree, wholeNumber);
                ctx.lineTo(twoOfThree, wholeNumber);
                ctx.lineTo(twoOfThree, 0);
                ctx.lineTo(oneOfThree, 0);
                break
        }
        //var randomColor = Math.floor(Math.random()*16777215).toString(16);
        ctx.fillStyle = `#fefefe`
        ctx.fill();
    }
}
