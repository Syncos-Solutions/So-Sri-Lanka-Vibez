"use client";
import React from 'react';
import { GridItem, MasonryItem } from './ui/grid-item';

interface MasonryGridProps {
  items: MasonryItem[];
}

// --- MasonryGrid Component ---
export const MasonryGrid: React.FC<MasonryGridProps> = ({ items }) => {
  return (
    
    <div
      className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4"
      style={{ columnWidth: '250px' }}
    >
      {items.map((item) => (
        <GridItem key={item.id} item={item} />
      ))}
    
    </div>
  );
};