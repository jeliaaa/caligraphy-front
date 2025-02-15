import clsx from "clsx";
import { IoMdClose } from "react-icons/io";

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
                <IoMdClose size={20} />
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