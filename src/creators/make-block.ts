import { Block } from '../models/block';

export function makeBlock<BlockName extends string>(blockName: BlockName): Block<BlockName> {
    const block: Block<BlockName> = blockName;

    return block;
}
