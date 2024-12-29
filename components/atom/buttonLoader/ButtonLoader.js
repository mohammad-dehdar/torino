import React from 'react';
import { Check } from 'lucide-react';

const ButtonLoader = ({ isPending }) => {
  return (
    <button 
      type='submit' 
      className={`
        mt-8 w-[300px] md:w-[491px] h-[54px] 
        relative overflow-hidden
        bg-primary rounded-lg 
        text-white text-lg font-medium 
        transition-all duration-300 ease-out
        hover:bg-secondary 
        disabled:opacity-80 disabled:cursor-not-allowed
        flex items-center justify-center gap-3
        ${isPending ? 'pl-4' : ''}
      `}
      disabled={isPending}
    >
      {isPending ? (
        <>
          <span 
            className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"
            style={{ 
              animationDuration: '0.6s',
              animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' 
            }}
          />
          <span className="animate-fadeIn">در حال ارسال کد...</span>
        </>
      ) : (
        <span className="flex items-center gap-2">
          ارسال کد تایید
        </span>
      )}
    </button>
  );
};

export default ButtonLoader;