import {oneOfThree, twoOfThree, wholeNumber} from "../configurations/fieldConfig";
//This thing rerender ALL puzzles (not one), I tried to fix that, but need more time for optimization

export function canvasRender(canvas: any, puzzle: string, x : number, y :number) {

    if (canvas != null && canvas.getContext) {

        var ctx = canvas.getContext('2d');
        ctx.clearRect(x, y, 60, 60);
        ctx.beginPath();
        ctx.strokeRect(x, y, 60, 60);
        switch (puzzle) {
            case "╻" :
                ctx.moveTo(oneOfThree + x, twoOfThree + y);
                ctx.lineTo(oneOfThree + x, wholeNumber + y);
                ctx.lineTo(twoOfThree + x, wholeNumber + y);
                ctx.lineTo(twoOfThree + x, twoOfThree + y);
                ctx.lineTo(oneOfThree + x, twoOfThree + y);
                break
            case "╸" :
                ctx.moveTo(x, oneOfThree + y);
                ctx.lineTo(oneOfThree + x, oneOfThree + y);
                ctx.lineTo(oneOfThree + x, twoOfThree + y);
                ctx.lineTo(x, twoOfThree + y);
                ctx.lineTo(x, oneOfThree + y);
                break
            case "╹" :
                ctx.moveTo(oneOfThree + x, y);
                ctx.lineTo(twoOfThree + x, y);
                ctx.lineTo(twoOfThree + x, oneOfThree + y);
                ctx.lineTo(oneOfThree + x, oneOfThree + y);
                ctx.lineTo(oneOfThree + x, y);
                break
            case "╺" :
                ctx.moveTo(twoOfThree + x, oneOfThree + y);
                ctx.lineTo(wholeNumber + x, oneOfThree + y);
                ctx.lineTo(wholeNumber + x, twoOfThree + y);
                ctx.lineTo(twoOfThree + x, twoOfThree + y);
                ctx.lineTo(twoOfThree + x, oneOfThree + y);
                break

            case "┗" :
                ctx.moveTo(oneOfThree + x, y);
                ctx.lineTo(oneOfThree + x, twoOfThree + y);
                ctx.lineTo(wholeNumber + x, twoOfThree + y);
                ctx.lineTo(wholeNumber + x, oneOfThree + y);
                ctx.lineTo(twoOfThree + x, oneOfThree + y);
                ctx.lineTo(twoOfThree + x, y);
                ctx.lineTo(oneOfThree + x, y);
                break
            case "┏" :
                ctx.moveTo(oneOfThree + x, oneOfThree + y);
                ctx.lineTo(oneOfThree + x, wholeNumber + y);
                ctx.lineTo(twoOfThree + x, wholeNumber + y);
                ctx.lineTo(twoOfThree + x, twoOfThree + y);
                ctx.lineTo(wholeNumber + x, twoOfThree + y);
                ctx.lineTo(wholeNumber + x, oneOfThree + y);
                ctx.lineTo(oneOfThree + x, oneOfThree + y);
                break
            case "┓" :
                ctx.moveTo(x, oneOfThree + y);
                ctx.lineTo(twoOfThree + x, oneOfThree + y);
                ctx.lineTo(twoOfThree + x, wholeNumber + y);
                ctx.lineTo(oneOfThree + x, wholeNumber + y);
                ctx.lineTo(oneOfThree + x, twoOfThree + y);
                ctx.lineTo(x, twoOfThree + y);
                ctx.lineTo(x, oneOfThree + y);
                break
            case "┛" :
                ctx.moveTo(x, oneOfThree + y);
                ctx.lineTo(oneOfThree + x, oneOfThree + y);
                ctx.lineTo(oneOfThree + x, y);
                ctx.lineTo(twoOfThree + x, y);
                ctx.lineTo(twoOfThree + x, twoOfThree + y);
                ctx.lineTo(x, twoOfThree + y);
                ctx.lineTo(x, oneOfThree + y);
                break

            case "┫" :
                ctx.moveTo(x, oneOfThree + y) ;
                ctx.lineTo(oneOfThree + x, oneOfThree + y);
                ctx.lineTo(oneOfThree + x, y);
                ctx.lineTo(twoOfThree + x, y);
                ctx.lineTo(twoOfThree + x, wholeNumber + y);
                ctx.lineTo(oneOfThree + x, wholeNumber + y);
                ctx.lineTo(oneOfThree + x, twoOfThree + y);
                ctx.lineTo(x, twoOfThree + y);
                ctx.lineTo(x, oneOfThree + y);
                break
            case "┻":
                ctx.moveTo(oneOfThree + x, y);
                ctx.lineTo(twoOfThree + x, y);
                ctx.lineTo(twoOfThree + x, oneOfThree + y);
                ctx.lineTo(wholeNumber + x, oneOfThree + y);
                ctx.lineTo(wholeNumber + x, twoOfThree + y);
                ctx.lineTo(x, twoOfThree + y);
                ctx.lineTo(x, oneOfThree + y);
                ctx.lineTo(oneOfThree + x, oneOfThree + y);
                ctx.lineTo(oneOfThree + x, y);
                break

            case "┣" :
                ctx.moveTo(wholeNumber + x, oneOfThree + y);
                ctx.lineTo(twoOfThree + x, oneOfThree + y);
                ctx.lineTo(twoOfThree + x, y);
                ctx.lineTo(oneOfThree + x, y);
                ctx.lineTo(oneOfThree + x, wholeNumber + y);
                ctx.lineTo(twoOfThree + x, wholeNumber + y);
                ctx.lineTo(twoOfThree + x, twoOfThree + y);
                ctx.lineTo(wholeNumber + x, twoOfThree + y);
                ctx.lineTo(wholeNumber + x, oneOfThree + y);
                break
            case "┳" :
                ctx.moveTo(oneOfThree + x, wholeNumber + y);
                ctx.lineTo(twoOfThree + x, wholeNumber + y);
                ctx.lineTo(twoOfThree + x, twoOfThree + y);
                ctx.lineTo(wholeNumber + x, twoOfThree + y);
                ctx.lineTo(wholeNumber + x, oneOfThree + y);
                ctx.lineTo(x, oneOfThree + y);
                ctx.lineTo(x, twoOfThree + y);
                ctx.lineTo(oneOfThree + x, twoOfThree + y);
                ctx.lineTo(oneOfThree + x, wholeNumber + y);
                break

            case "╋" :
                ctx.moveTo(oneOfThree + x, y);
                ctx.lineTo(oneOfThree + x, oneOfThree + y);
                ctx.lineTo(x, oneOfThree+ y);
                ctx.lineTo(x, twoOfThree+ y);
                ctx.lineTo(oneOfThree + x, twoOfThree+ y);
                ctx.lineTo(oneOfThree + x, wholeNumber+ y);
                ctx.lineTo(twoOfThree + x, wholeNumber+ y);
                ctx.lineTo(twoOfThree + x, twoOfThree+ y);
                ctx.lineTo(wholeNumber + x, twoOfThree+ y);
                ctx.lineTo(wholeNumber + x, oneOfThree+ y);
                ctx.lineTo(twoOfThree + x, oneOfThree+ y);
                ctx.lineTo(twoOfThree + x, y);
                ctx.lineTo(oneOfThree + x, y);
                break

            case "━" :
                ctx.moveTo(x, oneOfThree + y);
                ctx.lineTo(wholeNumber + x, oneOfThree + y);
                ctx.lineTo(wholeNumber + x, twoOfThree + y);
                ctx.lineTo(x, twoOfThree + y);
                ctx.lineTo(x, oneOfThree + y);
                break
            case "┃" :
                ctx.moveTo(oneOfThree + x, y);
                ctx.lineTo(oneOfThree + x, wholeNumber + y);
                ctx.lineTo(twoOfThree + x, wholeNumber + y);
                ctx.lineTo(twoOfThree + x, y);
                ctx.lineTo(oneOfThree + x, y);
                break
            default:
                console.log(puzzle)
        }
        //var randomColor = Math.floor(Math.random()*16777215).toString(16);
        ctx.fillStyle = `#fefefe`
        ctx.fill();
    }
}
