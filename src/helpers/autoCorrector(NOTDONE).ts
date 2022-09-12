//THIS IS GROUNDWORKS WHICH I WANTED TO USE
//For most part it is a code for checker, that mark solved aries
//Also here is simple autocorrector based on BrutForce


// @ts-ignore
const manualRotation = {
    "╻" : "╸",
    "╸" : "╹",
    "╹" : "╺",
    "╺" : "╻",

    "┗" : "┏",
    "┏" : "┓",
    "┓" : "┛",
    "┛" : "┗",

    "┫" : "┻",
    "┻" : "┣",
    "┣" : "┳",
    "┳" : "┫",

    "╋" : "╋",

    "━" : "┃",
    "┃" : "━"
}
let setOfCheckedCoords = new Set();
let rotationMap = [
    [4,4,4,4,4,4,4,4],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
]

function checkMap(position : string){
    if (!setOfCheckedCoords.has(position)){
        setOfCheckedCoords.add(position)
        const [y, x] = position.split("-")

        const element = document.getElementById(position)!.textContent
        document.getElementById(position)!.style.color = "green"
        // @ts-ignore
        const elementConfig = puzzlesConfig[element]

        for(let direction of elementConfig.connectsDirections){
            let [nx, ny]  = [parseInt(x),parseInt(y)]
            switch (direction){
                case 'down':
                    ny -= 1
                    break
                case 'up':
                    ny += 1
                    break
                case 'left':
                    nx += 1
                    break
                case 'right':
                    nx -= 1
                    break
            }

            if (nx >= 0 && ny >= 0){
                let nextElement = document.getElementById(`${ny}-${nx}`)!.textContent

                // @ts-ignore
                let nextElementConfig = puzzlesConfig[nextElement]
                // @ts-ignore
                //console.log(nextElementConfig.connectsDirections.indexOf(reverseDirection(direction)))
                // console.log(nextElement)
                //console.log(reverseDirection(direction))
                // console.log(nextElementConfig.connectsDirections)
                // @ts-ignore
                if (nextElementConfig.connectsDirections.indexOf(reverseDirection(direction)) >= 0){
                    checkMap(`${ny}-${nx}`)
                }
            }
        }

    }
}

function coordForNextRotation(){
    for (let y = 0; y < rotationMap.length; y++){
        for (let x = 0; x < rotationMap[y].length; x++){
            if(rotationMap[y][x] < 4){
                if( x-1 >= 0){
                    rotationMap[y][x-1] = 0
                } else if( y-1 >= 0){
                    rotationMap[y-1][rotationMap[y].length - 1] = 0
                }
                rotationMap[y][x] += 1

                rotationMap.forEach((item) => {
                    console.log(item)
                })

                console.log(`coord ${x} ${y}`)
                return [x, y]
            }

        }
    }
    alert("hui")
}


function reverseDirection(d : string){
    if (d == 'up'){
        return 'down'
    } else if(d == 'down'){
        return 'up'
    } else if(d == 'right'){
        return 'left'
    } else if(d == 'left'){
        return 'right'
    }
}

/*
let boolean = true

console.log(exampleMap.length)
if(boolean){
    exampleMap = map
    setExampleMapS(map)
}

console.log(exampleMap)
boolean = false


const [exampleMapS, setExampleMapS] =  useState([[""]]);
let exampleMap = [[""]]


document.getElementById('checkMap')?.addEventListener('click', () => {

    //console.log(currentMap != previosMap)
    if(setOfCheckedCoords.size < 64 && currentMap != previosMap){ //
        setOfCheckedCoords.clear()


        let mapLikeArray = Array.prototype.slice.call(mapLikeHTMLCollection);
        mapLikeArray.forEach((item) => {
            item.style.color = "white"
        })
        checkMap('0-0')


        socket.send(`rotate ${coordForNextRotation()}`)
        socket.send('map')
        //console.log(setOfCheckedCoords)

        setPreviosMap(currentMap)
        console.log(currentMap)
        console.log(setOfCheckedCoords.size)
    }
})
*/
