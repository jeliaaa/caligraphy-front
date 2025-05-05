import { useState } from 'react';
import useStageModal from '../../hooks/useStageModal';
import Modal from '../Modal';
import { useTranslation } from 'react-i18next';

const StageModal = () => {
  const {
    isOpen,
    onClose,
    data
  } = useStageModal()
  const { t } = useTranslation()
  const [currentPhoto, setCurrentPhoto] = useState<number>(0);
  const onNext = () => setCurrentPhoto(currentPhoto >= data?.images?.length - 1 ? 0 : currentPhoto + 1);
  const onPrev = () => setCurrentPhoto(currentPhoto <= 0 ? data?.images?.length - 1 : currentPhoto - 1);

  let bodyContent = (
    <div className='flex flex-col justify-center gap-1'>
          <span className="font-bold self-center">სურათები</span>
          {data?.images?.length != 0 ? (
            <>
              <div className='flex'>
                <button className='w-[40px]' onClick={onPrev}><svg className="w-[30px] rotate-180 h-[30px] fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></button>
                  <div className="w-full h-[500px]">
                  {data?.images?.map(({url}: {url: string}, i: any) => (
                        <img
                            key={i}
                            src={`${process.env.REACT_APP_URL}/${url}`}
                            style={{
                              display: currentPhoto !== i ? "none" : "flex"
                            }}
                            alt={`Renovation ${i + 1}`}
                            className="w-full h-full object-cover rounded cursor-pointer"
                            onClick={() => setCurrentPhoto(i)}
                        />
                    ))}
                </div>
                <button className='w-[40px]' onClick={onNext}><svg className="w-[30px] h-[30px] fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></button>
              </div>
              <div className='px-[40px] w-full'>
                <div className='w-full bg-white flex flex-wrap'>
                    {data?.images?.map(({url}: {url: string}, i: any) => (
                      <img
                        key={i}
                        src={`${process.env.REACT_APP_URL}/${url}`}
                        alt={`Renovation ${i + 1}`}
                        className='w-1/6 border-2 aspect-square object-cover border-white'
                        onClick={() => setCurrentPhoto(i)}
                      />
                    ))}
                </div>
              </div>
            </>
          )
          : (
            <div className='w-full justify-center items-center flex py-5 mt-5'>
                <h2 className='text-center text-xl'>{t("images_not_found")}</h2>
            </div>
          )}
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