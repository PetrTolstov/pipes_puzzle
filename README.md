# Pipes Puzzle

## Paswords:
First password: JustWarmingUp

## Limitations of my solution
### Rendering problem:
The program renders one big canvas at once, so it takes much time and memory. 
Solution is a creating 'lazy' drawing, so shapes would be drawn one by one

### Map scaling problem:
The table (with position : absolute) that is covering canvas and canvas itself are being children components of the div box with overflow scroll are leading to not working horizontal scroll, however vertical scroll works normally.

### AutoSolver problem:
Autosolver algorithm is based on bruteforcing, it rotates every shape and goes through every possible combination.
It performed extremely slow, every next shape would rotate four times slower than the previous one.
That is a main reason for removing the Autosolver from the final version.
> I would really appreciate, if you could send me an example of better algorithm 

## Design decision
I came up with rainforest on the background and wooden interface style. In my opinion it is the best design for such puzzles game, it is really simple, clean and really nice to look at.

## Launch
Just open the link pipespuzzle.herokuapp.com/ in your favorite browser.
The user get to choose the level out of six options, they also have the verify button to know if they did right.
And of course to rotate a shape just click on it

## Path of commits

### some convertetion
Connecting to websockets and conversation received string map to matrix

### some rotating
Adding rotations and processing them

### simple solution
Simple ready solution without design

### added checker
Trying to add checking that only display solved ways

### some checking
Checking with autocorrection

### almost done
Deleting autocorrect due to big resolve consumption and creating design

### some design fix
Some corrections of design

### final commit
Change of displaying puzzles, creating one big canvas instead much small canvases to enhance perfomance.
Also some design fixes and adding modal window



