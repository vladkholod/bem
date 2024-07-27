import { Block } from '../models/block';
import { Element } from '../models/element';

export function makeElement<BlockName extends string, ElementName extends string>(block: Block<BlockName>, elementName: ElementName): Element<BlockName, ElementName> {
    const element: Element<BlockName, ElementName> = `${block}__${elementName}`;

    return element;
}
