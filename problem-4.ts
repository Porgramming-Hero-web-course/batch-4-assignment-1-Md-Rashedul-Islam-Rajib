{
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
}
