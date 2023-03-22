import Image from 'next/image';

type Props = {
  score: number;
}

export const HeaderWithScore: React.FC<Props> = ({ score }) => {
  return (
    <section className='flex justify-between w-full sm:w-1/2 mx-auto p-5 rounded-xl border-2 border-gray-500 mb-24'>
        <Image
          src={"/assets/images/logo.svg"}
          width={150}
          height={150}
          alt="logo"
        />
        <div className='flex flex-col p-3 uppercase tracking-wider text-blue-900 font-semibold text-center w-[150px] rounded-xl bg-slate-300'>
          <p>score</p>
          <p className=' text-3xl'>{score}</p>
        </div>
      </section>
  );
}