import { expect } from 'chai'

import { testable } from './index.js'

describe('do', () => {
    it('testable', done => {
        const expectedResult = { success: true }
        const result = testable()
        
        expect(result).to.eql(expectedResult)
        done()
    })
})
