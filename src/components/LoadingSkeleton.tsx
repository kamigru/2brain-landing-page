import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="space-y-6 px-4 md:px-5">
        {/* Skeleton para título */}
        <div className="h-10 md:h-12 bg-primary/10 rounded-lg w-3/4 mx-auto"></div>
        <div className="h-4 md:h-5 bg-secondary/20 rounded w-1/2 mx-auto"></div>
        
        {/* Skeleton para contenido */}
        <div className="space-y-4 mt-8">
          <div className="h-4 bg-primary/5 rounded w-full"></div>
          <div className="h-4 bg-primary/5 rounded w-5/6"></div>
          <div className="h-4 bg-primary/5 rounded w-4/6"></div>
        </div>

        {/* Skeleton para cards o elementos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-secondary/10 rounded-xl h-32 md:h-40"></div>
          ))}
        </div>
        
        {/* Skeleton para botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <div className="h-12 bg-primary/15 rounded-full w-48"></div>
          <div className="h-12 bg-accent/10 rounded-full w-40"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton; 