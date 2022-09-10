import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
const socket = new WebSocket("wss://hometask.eg1236.com/game-pipes/"
);
let mapLikeHTMLCollection : HTMLCollection
let setOfCheckedCoords = new Set();
let rotationMap = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
]

let boolean = true

type Props = {
    thisMap : string[][]
}
function TableMap({thisMap} : Props){
    let mapHtml = <table id={'tableMap'}>
        <tbody>
        {thisMap.map(
            (item, index) => <tr>{item.map(
                (element, i) => <td id={`${index}-${i}`} className={"mapElement"}>{element}</td>
            )}</tr>)
        }
        </tbody>
    </table>
    return mapHtml
}


const right = "right"
const left = "left"
const down = "down"
const up = "up"

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

const puzzlesConfig = {
    "╻": {
        connectsDirections: [up],
        isAHalf: true
    },
    "╹": {
        connectsDirections: [down],
        isAHalf: true
    },
    "╺": {
        connectsDirections: [left],
        isAHalf: true
    },
    "╸": {
        connectsDirections: [right],
        isAHalf: true
    },


    "┗": {
        connectsDirections: [down, left],
        isAHalf: false
    },
    "┏": {
        connectsDirections: [up, left],
        isAHalf: false
    },
    "┓": {
        connectsDirections: [up, right],
        isAHalf: false
    },
    "┛": {
        connectsDirections: [right, down],
        isAHalf: false
    },


    "┫": {
        connectsDirections: [down, up, right],
        isAHalf: false
    },
    "┻": {
        connectsDirections: [down, left, right],
        isAHalf: false
    },
    "┣": {
        connectsDirections: [down, up, left],
        isAHalf: false
    },
    "┳": {
        connectsDirections: [up, right, left],
        isAHalf: false
    },

    "╋": {
        connectsDirections: [up, down, right, left],
        isAHalf: false
    },

    "━": {
        connectsDirections: [right, left],
        isAHalf: false
    },

    "┃": {
        connectsDirections: [up, down],
        isAHalf: false
    },
}

function reverseDirection(d : string){
    if (d == up){
        return down
    } else if(d == down){
        return up
    } else if(d == right){
        return left
    } else if(d == left){
        return right
    }
}

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
                case down:
                    ny -= 1
                    break
                case up:
                    ny += 1
                    break
                case left:
                    nx += 1
                    break
                case right:
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
            console.log(x)
            if(rotationMap[y][x] < 4){
                if( x-1 >= 0){
                    rotationMap[y][x-1] = 0
                } else if( y-1 >= 0){
                    rotationMap[y-1][-1] = 0
                }
                rotationMap[y][x] += 1

                console.log(rotationMap)

                return [x, y]
            }
        }
    }
}

function App() {
  const [currentMap, setCurrentMap] =  useState([[""]]);
  const [previosMap, setPreviosMap] =  useState([[""]]);
  const [exampleMap, setExampleMap] =  useState([[""]]);



    useEffect(() => {
        socket.onmessage = (message) => {
            console.log(message.data)

            if(message.data[0] == "v"){
                alert(message.data)
            }
            if(message.data[0] == "m"){

                let map = message.data.split("\n").slice(1,-1)
                //let map = "┏━╸┏╸╻┏╸\n┣╸╺╋┳┛┃╻\n┗┓┏┛┃╻┃┃\n╻┣┫╻╹┃┣┛\n┃╹┣┫╻┣┻╸\n┗┓┃┗┻┫╻╻\n┏┫┣┓┏╋┛┃\n╹┗┛╹╹┗━┛".split("\n")
                map.forEach((item:string) => item.split(''))
                map = map.map(function(item : string) { return item.split("") });
                console.log(exampleMap.length)
                if(boolean){
                    console.log(exampleMap)
                    setExampleMap(map)

                }

                boolean = false

                console.log(map)
                setCurrentMap(map)

            }

        };



      socket.onopen = (event) => {
          socket.send("new 1")
          socket.send("map")
          window.addEventListener('load', function () {
              //console.log('loaded')
              mapLikeHTMLCollection = document.getElementById('tableMap')!.getElementsByClassName('mapElement')
             // console.log(mapLikeHTMLCollection)

              document.getElementById('verify')?.addEventListener('click', () => {
                  socket.send('verify')
              })

              document.getElementById('checkMap')?.addEventListener('click', () => {

                  let id = setInterval(() => {

                      //console.log(currentMap != previosMap)
                      if(setOfCheckedCoords.size < 64 ){ // && currentMap != previosMap
                          setOfCheckedCoords.clear()


                          let mapLikeArray = Array.prototype.slice.call(mapLikeHTMLCollection);
                          mapLikeArray.forEach((item) => {
                              item.style.color = "white"
                          })
                          checkMap('0-0')

                          // @ts-ignore
                          let [xc, yc] = coordForNextRotation()
                          let cMap = exampleMap
                          // @ts-ignore
                          cMap[yc][xc] = manualRotation[cMap[yc][xc]]
                          setExampleMap(cMap)

                          //socket.send(`rotate ${coordForNextRotation()}`)
                          //socket.send('map')
                          //console.log(setOfCheckedCoords)

                          //setPreviosMap(currentMap)
                          console.log(currentMap)
                          console.log(setOfCheckedCoords.size)
                      }else if(setOfCheckedCoords.size >= 64 ){
                          clearInterval(id)
                      }

                  }, 1)





              })

              for(let i = 0; i < mapLikeHTMLCollection.length; i++) {
                  mapLikeHTMLCollection.item(i)?.addEventListener('click',  () => {
                        const str : string = mapLikeHTMLCollection.item(i)!.textContent!.toString()
                        // @ts-ignore
                      console.log(puzzlesConfig[str])
                        const [y, x] = mapLikeHTMLCollection.item(i)!.id.split("-")
                        socket.send(`rotate ${x} ${y}`)
                        socket.send('map')
                })
              };

          })

      }



  }, [])



  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
            <TableMap thisMap={currentMap} />

            <button id={'verify'}>verify</button>
            <button id={'checkMap'}>check</button>
            <TableMap thisMap={exampleMap} />
        </header>
      </div>
  );
}

export default App;
