import { Block } from '../models/block';
import { BlockModifier } from '../models/block-modifier';

export function makeBlockModifier<BlockName extends string, ModifierName extends string>(
    block: Block<BlockName>,
    modifierName: ModifierName,
): BlockModifier<BlockName, ModifierName> {
    const blockModifier: BlockModifier<BlockName, ModifierName> = `${block}--${modifierName}`;

    return blockModifier;
}
