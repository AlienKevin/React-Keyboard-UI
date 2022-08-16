/**
 
 +-----------+-----------+
 |           |           |
 |     O     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     o     |
 |           |     uo    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class O extends Key {
  constructor() {
    super({
      name: 'O',
      type: KeyType.LETTER,
      description: 'O: uo, o',
      content: {leftTop: 'O', rightBottom: ['uo', 'o']},
      actions: {
        self: O
      },
      style: {widthRatio: 1}
    })
  }
}

export default O
