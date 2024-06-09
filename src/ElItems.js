import { isNodeList } from "./../vendor/inilim/js_type_string/src/NodeEl";
import ElItem from "./ElItem";

export class ElItems {
  /**
   * @property {NodeList}
   */
  items;

  constructor(items) {
    if (!isNodeList(items)) {
      throw new Error('not "NodeList"');
    }

    this.items = items;
  }

  // ------------------------------------------------------------------
  //
  // ------------------------------------------------------------------

  forEach(callback) {
    this.items.forEach((item, index, items) => {
      callback(new ElItem(item), index, this);
    });
  }

  /**
   * @returns {ElItem|null}
   */
  first() {
    if (this.lenght === 0) return null;
    return new ElItem(this.items[0]);
  }

  /**
   * @returns {ElItem|null}
   */
  last() {
    if (this.lenght === 0) return null;
    return new ElItem([...this.items].pop());
  }

  /**
   * @param {number} index
   * @returns {ElItem|null}
   */
  eq(index) {
    let tmp = this.items[index] ?? null;
    if (tmp === null) return null;
    return new ElItem(tmp);
  }

  // ------------------------------------------------------------------
  // геттеры
  // ------------------------------------------------------------------

  get lenght() {
    return this.items.lenght;
  }

  // ------------------------------------------------------------------
  // статика
  // ------------------------------------------------------------------

  /**
   * @param {any} items
   * @returns {ElItems|null}
   */
  static make(items) {
    if (isNodeList(items)) {
      return new ElItems(items);
    }
    return null;
  }
}
