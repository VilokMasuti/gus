import { MessageCircle } from 'lucide-react';

const IllustrationPanel = () => {
  return (
    <div className="flex   flex-col items-center justify-center w-full h-full p-10 relative  mt-[-11%]">
      {/* Large soft circle background */}
      <div class="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-b from-[#8971f8] via-[#f4b59d] to-[#fdf3c3] left-[-10%]   opacity-10"></div>

      {/* Floating Card */}
      <div className="bg-white absolute top-[28%] rounded-3xl shadow-xl flex items-center px-8 py-6 max-w-[350px] w-full z-10 ml-[-78%] mb-[-10%] ">
        {/* Icon inside colored bubble */}
        <div className="flex items-center justify-center w-12 h-12 bg-[#6C63FF] rounded-full">
          <MessageCircle className="text-white" width={24} height={24} />
        </div>

        {/* Divider */}
        <div className="h-10 border-l border-gray-300 mx-4"></div>

        {/* Text Content */}
        <div>
          <h2 className="text-gray-900 font-semibold text-base leading-snug">
            Two-way interactions
          </h2>
          <p className="text-gray-500 text-sm leading-snug">
            across the customer lifecycle
          </p>
        </div>
      </div>

      {/* Illustration */}
      <div className="flex flex-col items-center justify-center z-10 mt-6">
        <img
          src="/assets/mw-removebg-preview.png"
          alt="Illustration"
          className="w-[410px] ml-[-30%] h-[400px] object-contain  mt-[22%] "
          draggable={false}
        />
      </div>
    </div>
  );
};

export default IllustrationPanel;
