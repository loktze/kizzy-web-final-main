import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 w-full bg-transparent">
      <div className="bg-white flex justify-center md:hidden">
        <div className="flex gap-4 pb-6">
          <div>
            <p className="font-lexend text-sm font-medium text-[#999] cursor-pointer">Privacy Policy</p>
          </div>
          <div>
            <p className="font-lexend text-sm font-medium text-[#999] cursor-pointer">Careers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
