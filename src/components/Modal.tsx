import clsx from "clsx";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
  body?: React.ReactElement;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  body,
}) => {
  return (
    <div
      className={clsx(
        "justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[99999] outline-none focus:outline-none bg-neutral-800/70",
        isOpen ? "flex" : "hidden"
      )}
    >
      <div className="
          relative 
          w-full
          md:w-5/6
          lg:w-4/6
          xl:w-3/6
          my-6
          mx-auto 
          h-auto
          p-2
          lg:p-0
          lg:h-auto
          md:h-auto
          "
      >
        {/*content*/}
        <div className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-2xl 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
        >
          {/*header*/}
          <div className="
                  flex 
                  flex-col
                  p-6
                  border-b-[1px]
                "
          >
            <div className="
                  flex 
                  items-center 
                  rounded-t
                  justify-between
                  relative
                  ">
              <div className="text-xl">
                {title}
              </div>
              <button
                className="
                        p-1
                        border-0 
                        hover:opacity-70
                        transition
                        left-9
                      "
                onClick={onClose}
              >
                <svg className='fill-white rotate-45 w-[20px] h-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
              </button>
            </div>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            {body}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;