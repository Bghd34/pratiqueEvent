import {COMMENCE, FIN} from "../typeEvent";

const traitementMatin = (heure) => console.log("connexion à la formation Diginamic");
const autreTraitement = () => console.log("Revenir à la Formation Diginamic");
const faireDuCafe = () => console.log("fetch cafe");

function routinePersonne(emetteur){
    emetteur.on(COMMENCE, faireDuCafe);
    emetteur.on(FIN,({reponse, heure}) => reponse === "Matin" ? traitementMatin(heure) : autreTraitement() );
};


export default routinePersonne;
