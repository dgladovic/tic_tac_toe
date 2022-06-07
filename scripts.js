const Gameboard = {
    gameboard: [0,0,0,0,0,0,0,0,0],
};


const displayRender = (() => {
    
    const fieldcontent = () =>{
        Gameboard.gameboard.forEach( (e,i) => {
            let curr_field = document.getElementById(`${i}`);
            curr_field.textContent = e;
               
        });
    };

    return{fieldcontent};

})();

const render = displayRender;

const Player = (name,symbol) =>{
    name = name;
    symbol = symbol;
    return {name,symbol};
};

console.log(Gameboard);
const John = Player('Djoka','X');
console.log(John);
console.log(render);

render.fieldcontent();