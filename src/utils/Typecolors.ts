export const typeColors = {
water: '#5090D6',
dragon: '#0B6DC3',
electric: '#F4D23C',
fairy: '#EC8FE6',
ghost: '#5269AD',
fire: '#FF9D55',
ice: '#73CEC0',
grass: '#63BC5A',
bug: '#91C12F',
fighting: '#CE416B',
normal: '#919AA2',
dark: '#5A5465',
stell: '#5A8EA2',
rock: '#C5B78C',
psychic: '#FA7179',
ground: '#D97845',
poison: '#B567CE',
flying: '#89AAE3',
}


export function getColorType(color: string){
    return typeColors[color];
}

