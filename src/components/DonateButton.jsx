import React from 'react';

const DonateButton = ({ isMobile }) => {
  return (
    <>
    <a
  href="Not a Donation But an Investment - alignafrica.html"
  id="donate-link"
  className="absolute right-0 top-0 w-[210px] h-[70px] overflow-hidden z-30"
>
  <span
    id="donate-link-button"
    className="
      absolute left-0 top-[-60px]
      w-[190px] h-[190px]
      bg-[#91bc36]
      shadow-[inset_0_0_80px_#759e1e]
      text-white
      rounded-full
      border-[10px] border-[#b0624c]
      transition-all duration-300
      hover:border-[#CF7E67]
      hover:bg-[#a7d447]
      hover:shadow-[inset_0_0_80px_#7eba00]
      cursor-pointer
      flex flex-col items-center justify-center
      text-center
    "
  >
    <span
      id="donate-link-label"
      className="font-bold text-[30px] leading-tight"
    >
      Donate
    </span>

    <span
      id="donate-link-message"
      className="text-[13px] "
    >
      <strong className="font-['EB_Garamond'] text-[16px] font-normal">
        80%+  
      </strong>{' '}
      goes to recipients
    </span>
  </span>
</a>


      {isMobile && (
        <div
          id="donate-link-message-narrow"
          className="hidden absolute bottom-0 left-[110px] right-0 bg-gradient-to-r from-[#36a3bc] to-[#1e7e9e] text-white z-30 text-center py-0 pb-1"
        >
          <strong className="font-['EB_Garamond'] text-[20px] font-normal">
            80%+
          </strong>{' '}
          goes to recipients
        </div>
      )}
    </>
  );
};

export default DonateButton;