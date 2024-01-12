import avatar from '../../../assets/avatar.png';

const Student = ({ id, studentName, scores, percentage }) => {
  return (
    <>
      <tr className='border-b border-[#7ECEB529] '>
        <td className='p-5 text-sm md:text-xl'>{id}</td>
        <td className='p-5 text-sm md:text-xl'>
          <div className='flex space-x-3 items-center'>
            <img
              className='w-8 h-8'
              src={avatar}
              width='32'
              height='32'
              alt='Student Avatar'
            />
            <span className='whitespace-nowrap'>{studentName}</span>
          </div>
        </td>
        <td className='p-5 text-sm md:text-xl text-center'>{scores}</td>
        <td className='p-5 text-sm md:text-xl text-center'>{percentage}%</td>
      </tr>
    </>
  );
};

export default Student;
