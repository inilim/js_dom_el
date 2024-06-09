import { isNode } from "./../vendor/inilim/js_type_string/src/NodeEl";

export class ElItem {
  /**
   * @property {HTMLElement}
   */
  item;

  constructor(item) {
    if (!isNode(item)) {
      throw new Error('not "HTMLElement"');
    }

    this.item = item;
  }

  /**
   * @param {string} selector
   * @returns {null|ElItem}
   */
  find(selector) {
    return this.make(this.item.querySelector(selector));
  }

  findAll(selector) {}

  // ------------------------------------------------------------------
  //
  // ------------------------------------------------------------------

  /**
   * @param {any} item
   * @returns {ElItem|null}
   */
  static make(item) {
    if (isNode(item)) return new ElItem(item);
    return null;
  }
}
