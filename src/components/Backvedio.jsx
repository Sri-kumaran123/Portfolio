import vedio from '/home_back.mp4';
export function Backvedio(){
    return <video autoPlay  loop  muted  className='absolute  h-full w-full object-cover top-0'>
    <source src={vedio} type="video/mp4" className='h-full w-full' />
    Your browser does not support the video tag.
  </video>
}