import React from 'react';

export function LoadingStats() {
  return (
    <div className="text-center">
      <div className="h-8 w-24 bg-purple-600/20 rounded animate-pulse mb-2"></div>
      <div className="h-4 w-16 bg-purple-400/20 rounded animate-pulse mx-auto"></div>
    </div>
  );
}