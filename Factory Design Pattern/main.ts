import ShapeFactory from "./ShapeFactory";

function main() {
  const shape1 = ShapeFactory.getShape("Rectangle");
  shape1?.draw();
  const shape2 = ShapeFactory.getShape("Circle");
  shape2?.draw();
}

main();
