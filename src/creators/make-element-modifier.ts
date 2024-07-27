import { Element } from '../models/element';
import { ElementModifier } from '../models/element-modifier';

export function makeElementModifier<
    BlockName extends string,
    ElementName extends string,
    ModifierName extends string
>(
    element: Element<BlockName, ElementName>,
    modifierName: ModifierName,
): ElementModifier<BlockName, ElementName, ModifierName> {
    const modifier: ElementModifier<BlockName, ElementName, ModifierName> = `${element}--${modifierName}`;

    return modifier;
}
