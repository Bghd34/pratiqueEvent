import {COMMENCE, FIN} from "../typeEvent";


const attendre = () => console.log("j'attends devant la porte !");
const allerPisser = () => console.log("je vais aller pisser");


const routineChien = (emetteur) => {
    emetteur.on(COMMENCE, attendre);
    emetteur.on(FIN, allerPisser);
}
