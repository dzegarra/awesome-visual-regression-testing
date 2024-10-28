import { Button } from "./Button";

describe("<Button />", () => {
  it("renders normally", () => {
    cy.mount(<Button>Button content</Button>);
    cy.matchImageSnapshot();
  });

  it("renders in disabled state", () => {
    cy.mount(<Button disabled>Button content</Button>);
    cy.matchImageSnapshot();
  });
});
