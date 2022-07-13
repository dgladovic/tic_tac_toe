const render = (() => {

    const anounce = document.querySelector('.announcement');
    const new_gam = document.getElementById('new');
    var count = 0;

    new_gam.addEventListener('click',() => render.clear());

    const Gameboard = {
        gameboard: [" "," "," "," "," "," "," "," "," "],
    };

    const clear = () => {
        Gameboard.gameboard = [" "," "," "," "," "," "," "," "," "];
        Gameboard.gameboard.forEach( (e,i) => {
            let curr_field = document.getElementById(`${i}`);
            curr_field.textContent = " ";
            anounce.style.visibility = 'hidden';
            anounce.style.display = 'none';
        });
    }

    const gameFlow = (symb) => {
        
        var player_sym = "";
        var cpu = "";

        var cpuwin = "";
        var plwin = "";

        switch(symb){
            case 'X':
                player_sym = 'X';
                cpu = 'O';
                break;
            case 'O':
                player_sym = 'O';
                cpu = 'X';
                break;
        }

        if(count%2 != 0){
            cpu_move(cpu);
            fieldcontent();
        }        

        if(count >= 5){
                plwin = winner(player_sym);
                cpuwin = winner(cpu);
        
            // if(plwin || cpuwin == "Pobeda"){
                
            // }else{
                if(count == 9){
                    return console.log("tie");
                }
            // }
        }   
    }

    const cpu_move = (cpu) => {
        count = count + 1;
        for(let i = 0; i < Gameboard.gameboard.length; i++){
            if (Gameboard.gameboard[i] === " "){
                Gameboard.gameboard[i] = cpu;    
                i = 9;
            }
        };
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
                count = count + 1;
                
            });
        });
        fields.forEach( (e) => {
            // e.addEventListener('click', () => winner(symb));
            e.addEventListener('click', () => gameFlow(symb));
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
        
        for(let key in win_combos){         //prolazi kroz svaku kombinaciju, ukoliko je dobra kaze rezultat
            let a = 0;
            if (rezultat == "Pobeda"){
                break;
            }
            for(i = 0; i < 3; i++){
                if (pozicija.indexOf(win_combos[key][i]) >= 0){
                    a += 1;
                    if(a == 3){
                        rezultat = "Pobeda";
                        anounce.style.visibility = 'visible';
                        anounce.style.display = 'block';
                        break;
                    }
                    // else{
                    //     rezultat = "Tie";
                    // } 
                }
            }
        }
        return rezultat;
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
// const flegma = render.winner('X');
// console.log(flegma);

var Gameboard = render.Gameboard;
