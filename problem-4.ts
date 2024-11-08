{
  //Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

  type Circle = {
    shape: string;
    radius: number;
  };

  type Rectangle = {
    shape: string;
    height: number;
    width: number;
  };
  type CalculateShapeArea = Circle | Rectangle;

  const calculateShapeArea = (
    shape: CalculateShapeArea
  ): number | undefined => {
    if ("radius" in shape) {
      return Math.PI * shape.radius ** 2;
    }
    if ("height" in shape && "width" in shape) {
      return shape.height * shape.width;
    }
  };

  // Example usage:
  const circle: Circle = { radius: 5,shape: "circle" };
  const rectangle: Rectangle = { height: 10, width: 5,shape: "rectangle" };

  console.log(calculateShapeArea(circle)); // Expected output: 78.53981633974483
  console.log(calculateShapeArea(rectangle)); // Expected output: 50
}