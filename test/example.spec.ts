import test from 'japa'

test.group('Example', () => {
  test('assert sum', (assert) => {
    assert.equal(1 + 1, 2)
  })
})
