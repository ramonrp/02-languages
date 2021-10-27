// Califications Summary
type Student = {
  name: string;
  califications: number[];
};

type StudentSumary = {
  name: string;
  highestCalification: number;
  averageCalification: string;
};

const students: Student[] = [
  {
    name: "Juan",
    califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34],
  },
  {
    name: "Álvaro",
    califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01],
  },
  {
    name: "María",
    califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3],
  },
  {
    name: "Jorge",
    califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69],
  },
  {
    name: "Mónica",
    califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48],
  },
];

function summarizeClassRoom(studentList: Student[]): StudentSumary[] {
  return studentList.map((student) => ({
    name: student.name,
    highestCalification: higherElement(student.califications),
    averageCalification: calculateAverage(student.califications),
  }));
}

function higherElement(arr: number[]): number {
  return Math.max(...arr);
}

function calculateAverage(arr: number[]): string {
  const sum = arr.reduce((acc, number) => acc + number, 0);
  return (sum / arr.length).toPrecision(3);
}

console.log(summarizeClassRoom(students));
