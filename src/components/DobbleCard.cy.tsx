import { DobbleCard } from './DobbleCard'

describe('<DobbleCard />', () => {
  it('renders', () => {
    cy.mount(<DobbleCard images={['😀', '🎉', '🚀', '🌟', '🌩️']} />)

    cy.matchImageSnapshot()
  })
})