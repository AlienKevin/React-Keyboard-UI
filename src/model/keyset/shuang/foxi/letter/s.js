/**
 
 +-----------+-----------+
 |           |           |
 |     S     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     ve    |
 |           |     ue    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class S extends Key {
  constructor() {
    super({
      name: 'S',
      type: KeyType.LETTER,
      description: 'S: ue, ve',
      content: {leftTop: 'S', rightBottom: ['ue', 've']},
      actions: {
        self: S
      },
      style: {widthRatio: 1}
    })
  }
}

export default S
