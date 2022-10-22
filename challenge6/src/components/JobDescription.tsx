import React from 'react'

const JobDescription = () => {
  return (
    <div className='mt-6 md:mt-8 px-6 py-10 bg-white rounded-md dark:bg-darkblue md:px-12 md:py-12 flex flex-col'>
      <div className='flex flex-col gap-y-[50px] md:flex-row md:gap-y-0 md:justify-between md:items-center'>
        <div className=' text-darkgray text-base '>
          <span className=''>1w ago</span> <span className='mx-3 font-bold'>•</span> <span>Part Time</span>
          <h1 className='text-darkblue dark:text-white font-bold text-xl leading-[25px] md:text-[28px] md:leading-[35px]'>Seniror Software Engineer</h1>  
          <span className='text-voilet font-bold text-sm leading-[17px]'>United Kingdom</span>
        </div>
        <div className='w-full md:basis-[141px]'>
          <button type='button' className=' bg-voilet rounded-[5px] font-bold text-white py-4 w-full'> Apply Now</button>
        </div>
      </div>
      <div className='mt-8 flex flex-col gap-y-10 text-base text-darkgray'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda totam sunt cumque quibusdam sed tenetur cupiditate exercitationem. Eveniet modi nemo dolore velit veniam, consequuntur aliquid dicta veritatis nobis. Voluptate, eaque.</p>
        <div className='flex flex-col gap-y-8 md:gap-y-6'>
          <h2 className='text-darkblue font-bold text-xl leading-[25px]'>Requirements</h2>
          <p className='-mt-1 md:mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum mollitia error quaerat veniam ea facere aperiam. Ipsa, cupiditate ad quasi ullam amet laborum! Neque, ex fugiat? Commodi aliquam delectus dolorum!</p>
          <ul className='flex flex-col gap-y-2 list-disc ml-4  marker:text-voilet '>
            <li className='pl-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </li>
            <li className='pl-8'>Reiciendis laborum aspernatur fugiat dicta repellendus quae ullam incidunt quas voluptas ex dolorem consequatur </li>
            <li className='pl-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ex laudantium animi voluptatibus. </li>
            <li className='pl-8'>Nihil aliquid maxime cupiditate voluptate consequuntur placeat provident ipsum, cumque corporis, vel suscipit doloremque eaque nostrum sapiente.</li>
          </ul>
        </div>
        <div className='flex flex-col gap-y-8 md:gap-y-6'>
          <h2 className='text-darkblue font-bold text-xl leading-[25px]'>What You Will Do</h2>
          <p className='-mt-1 md:mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis blanditiis nihil dolore rem officia quo ipsa voluptatibus rerum tenetur maxime at, eum deleniti soluta. Laborum voluptate quaerat eligendi quia quod.</p>
          <ol className='flex flex-col gap-y-2 list-decimal ml-4  marker:text-voilet'>
            <li className='pl-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, voluptatum! </li>
            <li className='pl-8'>Rem suscipit nulla sint nam corrupti nobis deleniti, sequi necessitatibus perferendis quia recusandae aut porro facere minus tempora cupiditate aliquam.</li>
            <li className='pl-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, in! Illum similique iste porro, vitae voluptatibus harum voluptates culpa libero, </li>
            <li className='pl-8'>blanditiis commodi exercitationem repudiandae aspernatur voluptate placeat facilis et? Doloremque!</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default JobDescription