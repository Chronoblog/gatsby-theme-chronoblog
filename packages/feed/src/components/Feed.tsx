import React, { ReactNode } from 'react';

const Card = ({ title, className }: { title: string; className?: string }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
    </div>
  );
};

const Feed = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  );
};

export { Card, Feed };
