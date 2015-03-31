describe 'property tests', ->
  wks = null

  beforeEach ->
    wks = worksheet(
      taxRate: 1.08
      a1: 3
      a2: 5
      subtotal: ->
        @a1 + @a2
      total: ->
        console.log 'updating total'
        @taxRate * @subtotal
    )

  describe 'value properties', ->
    it '#get', ->
      assert.equal wks.taxRate, 1.08
    it '#set', ->
      wks.taxRate = 1.09
      assert.equal wks.taxRate, 1.09

  describe 'formula properties', ->
    it '#get', ->
      assert.equal wks.subtotal, 8

    it '#set throws an error', ->
      expect ->
        wks.subtotal = 1.09
      .to.throw(Error)

    it 'are not updated before Tracker.flush', ->
      origTotal = wks.subtotal
      wks.a1 += 1
      # the total hasn't changed yet
      assert.equal origTotal, wks.subtotal

    it 'are updated after Tracker.flush', ->
      origTotal = wks.subtotal
      wks.a1 += 1
      Tracker.flush()
      assert.equal origTotal+1, wks.subtotal

    it 'are updated in the next event loop tick (defer)', ->
      origTotal = wks.subtotal
      wks.a1 +=1
      Meteor.defer ->
        assert.equal origTotal+1, wks.subtotal

    it 'are updated in the next event loop tick (setTimeout 0)', ->
      origTotal = wks.subtotal
      wks.a1 +=1
      Meteor.setTimeout ->
        assert.equal origTotal+1, wks.subtotal
      , 0
