import events from 'events';

const monEmetteur = new events.EventEmitter();
const monEmetteurPostSieste = new events.EventEmitter();


export { monEmetteur, monEmetteurPostSieste };
