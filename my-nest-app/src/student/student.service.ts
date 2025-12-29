import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { name: 'John Doe', id: 1, age: 22, address: 'New York' },
    { name: 'Jane Smith', id: 2, age: 22, address: 'Dhaka' },
    { name: 'Alice Johnson', id: 3, age: 22, address: 'Cumilla' },
  ];

  getStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    console.log(typeof id, typeof this.students[0].id);
    return this.students.find((student) => student.id == id);
  }
}
