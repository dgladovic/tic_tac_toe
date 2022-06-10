const render = (() => {
    
    const new_gam = document.getElementById('new');
    new_gam.addEventListener('click',() => render.clear());

    const Gameboard = {
        gameboard: [" ","X"," "," "," "," ","X"," ","X"],
    };

    const clear = () => {
        Gameboard.gameboard = [" "," "," "," "," "," "," "," "," "];
        Gameboard.gameboard.forEach( (e,i) => {
            let curr_field = document.getElementById(`${i}`);
            curr_field.textContent = " ";
        });
    }

    const fieldcontent = () =>{
        Gameboard.gameboard.forEach( (e,i) => {
            let curr_field = document.getElementById(`${i}`);
            curr_field.textContent = e;
        });
    };

    const logic = (symb) => {
        const fields = document.querySelectorAll('.field');
        fields.forEach( (e,i) => {
            e.addEventListener('click', () =>{
                (e.textContent == " ")? e.textContent = symb : e.textContent = e.textContent;
                Gameboard.gameboard[i] = e.textContent; 
            });
        });
        fields.forEach( (e) => {
            e.addEventListener('click', () => winner(symb));
        });
        
    };

    const winner = (symb) => {   
        const win_combos = {    //sve kombinacije za pobedu
            0: [0,1,2],
            1: [0,4,8],
            2: [0,3,6],
            3: [1,4,7],
            4: [2,4,6],
            5: [2,5,8],
            6: [3,4,5],
            7: [6,7,8]
        };

        const getAllIndexes = () => {
            var indexes = [], i;
            for(i = 0; i < Gameboard.gameboard.length; i++){
                if (Gameboard.gameboard[i] === symb){
                    indexes.push(i);    // niz koji govori gde se nalaze postavljeni simboli
                }
            };
            return indexes;
        };

        const pozicija = getAllIndexes();   //kupimo vrednosti funkcije za pozicije simbola
        let rezultat = '';
        
        for(let key in win_combos){         //prolazi kroz svaku komubinaciju, ukoliko je dobra kaze rezultat
            let a = 0;
            if (rezultat == "Pobeda"){
                break;
            }
            for(i = 0; i < 3; i++){
                if (pozicija.indexOf(win_combos[key][i]) >= 0){
                    a += 1;
                    if(a == 3){
                        rezultat = "Pobeda";
                        break;
                    }
                    else{
                        rezultat = "Loss";
                    } 
                }
            }
        }
        return console.log(rezultat);
    };
    return{fieldcontent,logic,winner,clear,Gameboard};
})();

const Player = (name,symbol) =>{
    name = name;
    symbol = symbol;
    return {name,symbol};
};

const John = Player('Djoka','X');

render.fieldcontent();
render.logic(John.symbol);
const flegma = render.winner('X');
console.log(flegma);
var Gameboard = render.Gameboard;
