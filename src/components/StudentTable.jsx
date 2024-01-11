import SearchBox from './SearchBox';
import TableContent from './TableContent';

const StudentTable = () => {
    const generateStudentData = () => {
      const studentData = [];

      for (let i = 1; i <= 30; i++) {
        studentData.push({
          id: i,
          name: `Student ${i}`,
          scores: 'A+',
          percentage: Math.floor(Math.random() * (100 - 80 + 1)) + 80, // Random percentage between 80 and 100
        });
      }

      return studentData;
    };

    const thirtyStudentData = generateStudentData();
    console.log(thirtyStudentData);
  return (
    <section className='py-24 lg:pt-[120px] lg:pb-28'>
      <div className='container'>
        <div className='mb-16 flex flex-col items-center'>
          <h2 className='text-3xl lg:text-[40px] mb-9 font-bold'>
            <span className='text-[#00CC8C]'>Students</span> of the Year
          </h2>
          {/* <!-- Search Box --> */}
          <SearchBox />
          {/* <!-- Search Box Ends --> */}
        </div>
        <div className='max-w-[848px] mx-auto overflow-auto'>
          <TableContent />
        </div>
      </div>
    </section>
  );
};
export default StudentTable;
