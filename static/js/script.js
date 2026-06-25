const canvas=document.getElementById("mazeCanvas");

const ctx=canvas.getContext("2d");

const cell=35;

const maze=[

"####################",
"#S....#............#",
"#.##..#.######.##..#",
"#....##......#.....#",
"#.######.###.#.###.#",
"#........#...#...#E#",
"####################"

];

function drawMaze(){

for(let r=0;r<maze.length;r++){

for(let c=0;c<maze[r].length;c++){

let x=c*cell;

let y=r*cell;

let value=maze[r][c];

if(value=="#"){

ctx.fillStyle="#374151";

}

else if(value=="S"){

ctx.fillStyle="#22c55e";

}

else if(value=="E"){

ctx.fillStyle="#ef4444";

}

else{

ctx.fillStyle="#d1d5db";

}

ctx.fillRect(x,y,cell,cell);

ctx.strokeStyle="#111827";

ctx.strokeRect(x,y,cell,cell);

}

}

}

drawMaze();
