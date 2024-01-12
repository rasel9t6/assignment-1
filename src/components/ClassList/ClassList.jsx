import ClassOne from './ClassOne';
import ClassTwo from './ClassTwo';
import ClassThree from './ClassThree';
import testData from '../../data/test-data';
import { Fragment } from 'react';
import Student from './StudentList/Student';
const ClassList = () => {
  return (
    <>
      {testData.map((classData, classIndex) => (
        <Fragment key={classIndex}>
          {classIndex === 0 && <ClassOne />}
          {classIndex === 1 && <ClassTwo />}
          {classIndex === 2 && <ClassThree />}

          {classData.map((student, studentIndex) => (
            <Student
              key={studentIndex}
              {...student}
            />
          ))}
        </Fragment>
      ))}
    </>
  );
};

export default ClassList;
