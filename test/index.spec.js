import assert from 'power-assert'
import ZeroPadding from '../src'

describe('ZeroPadding', () => {
  it('Normal Pass', () => {
    const res = ZeroPadding(110, 5)
    assert.equal(res, '00110')
  })

  it('Return Type is Strings', () => {
    const res = ZeroPadding(914, 5)
    assert(typeof res === 'string')
  })

  it('Strings Params', () => {
    const res = ZeroPadding('110', 5)
    assert.equal(res, '00110')
  })

  it('Decimal Point Params', () => {
    const res = ZeroPadding(156.05, 8)
    assert.equal(res, '00000156.05')
  })

  it('Minus Params', () => {
    const res = ZeroPadding(-456, 5)
    assert.equal(res, '-00456')
  })

  it('num < digit', () => {
    const res = ZeroPadding(10, 1)
    assert.equal(res, '10')
  })

  it('zero params', () => {
    const res = ZeroPadding(0, 5)
    assert.equal(res, '00000')
  })
})