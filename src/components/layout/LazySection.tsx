'use client';

import React, { Suspense } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import LoadingSkeleton from '../ui/LoadingSkeleton';
import AnimatedSection from './AnimatedSection';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  fallbackClassName?: string;
  delay?: number;
}

const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  className = '', 
  fallbackClassName = 'py-16',
  delay = 0
}) => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px'
  });

  return (
    <div ref={ref} className={className}>
      {hasIntersected ? (
        <Suspense fallback={<LoadingSkeleton className={fallbackClassName} />}>
          <AnimatedSection delay={delay}>
            {children}
          </AnimatedSection>
        </Suspense>
      ) : (
        <LoadingSkeleton className={fallbackClassName} />
      )}
    </div>
  );
};

export default LazySection; 