import { expect } from 'chai'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import GameBoard from '@/components/GameBoard.vue'

const localVue = createLocalVue()

before(() => {
  localVue.use(BootstrapVue)
})

describe('GameBoard tests', () => {
  it('should render player scores correctly.', async () => {
    const wrapper = shallowMount(GameBoard, {
      data () {
        return {
          p1Score: 2,
          p2Score: 0
        }
      }
    })

    const scoreText1 = wrapper.find('#score-one')
    const scoreText2 = wrapper.find('#score-two')

    expect(scoreText1.html()).to.equal('<div id="score-one">2</div>')
    expect(scoreText2.html()).to.equal('<div id="score-two">0</div>')
  })
})
