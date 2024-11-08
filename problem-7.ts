{
  type CarType = {
    make: string;
    model: string;
    year: number;
  };
  class Car {
    make: string;
    model: string;
    year: number;
    constructor(Car: CarType) {
      this.make = Car.make;
      this.model = Car.model;
      this.year = Car.year;
    }
    getCarAge(): number {
      return new Date().getFullYear() - this.year;
    }
  }
}
