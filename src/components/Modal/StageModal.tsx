import { useState } from 'react';
import useStageModal from '../../hooks/useStageModal';
import Modal from '../Modal';

const photos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKhjlStfInUfiEWgt0JiRp4wrflpTJR2lJ6w&s",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
  "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-waterfall-free-image.jpeg?w=600&quality=80",
  "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
  "https://i0.wp.com/picjumbo.com/wp-content/uploads/mysterious-fantasy-forest-with-old-bridges-free-image.jpg?w=600&quality=80",
  "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKhjlStfInUfiEWgt0JiRp4wrflpTJR2lJ6w&s",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
  "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-waterfall-free-image.jpeg?w=600&quality=80",
  "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
]

const StageModal = () => {
  const {
    isOpen,
    onClose,
    data
  } = useStageModal()
  const [currentPhoto, setCurrentPhoto] = useState<number>(0);
  const onNext = () => setCurrentPhoto(currentPhoto >= photos.length - 1 ? 0 : currentPhoto + 1);
  const onPrev = () => setCurrentPhoto(currentPhoto <= 0 ? photos.length - 1 : currentPhoto - 1);

  let bodyContent = (
    <div className='flex flex-col justify-center gap-1'>
          <span className="font-bold self-center">სურათები</span>
          <div className='flex gap-2'>
            <button className='w-[40px]' onClick={onPrev}><svg className="w-[30px] rotate-180 h-[30px] fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></button>
            <div className="w-full h-full">
                {photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        style={{
                          display: currentPhoto !== index ? "none" : "flex"
                        }}
                        alt={`Renovation ${index + 1}`}
                        className="w-full h-full object-cover rounded cursor-pointer"
                        onClick={() => setCurrentPhoto(index)}
                    />
                ))}
            </div>
            <button className='w-[40px]' onClick={onNext}><svg className="w-[30px] h-[30px] fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></button>
          </div>
          <div className='px-[40px] w-full'>
            <div className='w-full bg-white flex flex-wrap'>
                {photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`Renovation ${index + 1}`}
                    className='w-1/6 border-2 object-cover border-white'
                    onClick={() => setCurrentPhoto(index)}
                  />
                ))}
            </div>
          </div>
    </div>
  )

  return (
    <Modal
      isOpen={isOpen}
      title={data?.name}
      onClose={onClose}
      body={bodyContent}
    />
  );
}

export default StageModal;