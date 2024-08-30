/** @import { SvelteDocument } from '#compiler' */
/** @import { ComponentContext } from '../types' */
import { visit_special_element } from './shared/special_element.js';

/**
 * @param {SvelteDocument} node
 * @param {ComponentContext} context
 */
export function SvelteDocument(node, context) {
	visit_special_element(node, '$.document', context);
}
