import * as creators from './creators';

export const bem = {
    block: creators.makeBlock,
    blockModifier: creators.makeBlockModifier,
    element: creators.makeElement,
    elementModifier: creators.makeElementModifier,
};
