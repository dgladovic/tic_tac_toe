const Gameboard = {
    gameboard: [0,0,0,0,0,0,0,0,0],
};


const render = (() => {
    
    const fieldcontent = () =>{
        Gameboard.gameboard.forEach( (e,i) => {
            let curr_field = document.getElementById(`${i}`);
            curr_field.textContent = e;
        });
    };

    return{fieldcontent};

})();

const Player = (name,symbol) =>{
    name = name;
    symbol = symbol;
    return {name,symbol};
};

console.log(Gameboard);
const John = Player('Djoka','X');
console.log(John);

render.fieldcontent();