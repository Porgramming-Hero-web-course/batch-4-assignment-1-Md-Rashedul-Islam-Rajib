{
  //Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
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

  const car1 = new Car({ make: "Toyota", model: "Corolla", year: 2020 });
  console.log(`Car age for car1: ${car1.getCarAge()} years`);
  // Expected output (assuming current year is 2024): 4

  const car2 = new Car({ make: "Honda", model: "Civic", year: 2015 });
  console.log(`Car age for car2: ${car2.getCarAge()} years`);
  // Expected output (assuming current year is 2024): 9

  const car3 = new Car({ make: "Ford", model: "Mustang", year: 1995 });
  console.log(`Car age for car3: ${car3.getCarAge()} years`);
  // Expected output (assuming current year is 2024): 29

  const car4 = new Car({ make: "Tesla", model: "Model 3", year: 2024 });
  console.log(`Car age for car4: ${car4.getCarAge()} years`);
  // Expected output (assuming current year is 2024): 0

  const car5 = new Car({ make: "Chevrolet", model: "Impala", year: 1980 });
  console.log(`Car age for car5: ${car5.getCarAge()} years`);
  // Expected output (assuming current year is 2024): 44
}