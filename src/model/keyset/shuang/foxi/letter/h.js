/**
 
 +-----------+-----------+
 |           |           |
 |     H     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |    an     |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class H extends Key {
  constructor() {
    super({
      name: 'H',
      type: KeyType.LETTER,
      description: 'H: an',
      content: {leftTop: 'H', rightBottom: 'an'},
      actions: {
        self: H
      },
      style: {widthRatio: 1}
    })
  }
}

export default H
