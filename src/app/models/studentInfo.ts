export class StudentInfo {

  id: number;
  StudentName: string;
  standard: string;
  subject: string;
  marks: string;

  GetStudentInfos(): StudentInfo[] {
    var data1: StudentInfo[] = [
       { id: 1, StudentName: 'aayushi', standard: '8', subject: 'maths', marks: '60' },
       { id: 2, StudentName: 'krishna', standard: '9', subject: 'science', marks: '70' },
       { id: 3, StudentName: 'vaishali', standard: '10', subject: 'maths', marks: '80' },
       { id: 4, StudentName: 'anjani', standard: '11', subject: 'english', marks: '60' },
       { id: 5, StudentName: 'veer', standard: '12', subject: 'english', marks: '70' },
       { id: 6, StudentName: 'mann',standard: '8', subject: 'maths', marks: '80' },
       { id: 7, StudentName: 'ruhi',standard: '8', subject: 'maths', marks: '80' },
       { id: 8, StudentName: 'ajay', standard: '9', subject: 'science', marks: '80' },
       { id: 9, StudentName: 'raj', standard: '9', subject: 'science', marks: '60' },
       { id: 10, StudentName: 'neha', standard: '10 ', subject: 'maths', marks: '70' }

    ] as StudentInfo[];

    return data1;

  }
  GetsubjectInfo(): string[] {
    var data: string[] = ['maths', 'science', 'english'];
    return data;
  }
}
