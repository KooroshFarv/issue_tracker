import React, { forwardRef } from 'react';
import dynamic from 'next/dynamic';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });

interface SimpleMDEWrapperProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className: string;
}

const SimpleMDEWrapper = forwardRef<HTMLDivElement, SimpleMDEWrapperProps>(({ value, onChange, placeholder, className }, ref) => {
  return (
    <div ref={ref}>
      <SimpleMDE
        value={value}
        onChange={onChange}
        options={{ placeholder }}
        className={className}
      />
    </div>
  );
});

SimpleMDEWrapper.displayName = 'SimpleMDEWrapper';

export default SimpleMDEWrapper;