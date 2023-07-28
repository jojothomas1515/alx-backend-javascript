/* eslint-disable */
import listOfStudents from "../9-hoisting.js";

test('list of students', () => {
  expect(listOfStudents)
    .toStrictEqual(
      [
        StudentHolberton {
          _firstName: 'Guillaume',
          _lastName: 'Salva',
          _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
  _firstName: 'John',
  _lastName: 'Doe',
  _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
  _firstName: 'Albert',
  _lastName: 'Clinton',
  _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
  _firstName: 'Donald',
  _lastName: 'Bush',
  _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
  _firstName: 'Jason',
  _lastName: 'Sandler',
  _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  }
]
)
});

// const listPrinted = listOfStudents.map(
//   student => student.fullStudentDescription
// );

// console.log(listPrinted)
