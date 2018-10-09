import * as assert from "assert";
import sinon from "sinon";
import * as Module from "./modules";

describe("original test case", () => {
  it("works fine", () => {

    sinon
      .createSandbox()
      .stub(Module, "test")
      .callsFake(() => 2);

    assert.equal(2, Module.test());
  });
});
