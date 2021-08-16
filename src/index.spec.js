import { expect } from 'chai'

import { testable } from './index.js'

describe('do', () => {
    it('testable', () => {
        expect(testable()).to.eql({ success: true })
    })
})
