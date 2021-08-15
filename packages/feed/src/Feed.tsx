import React from 'react';

const Feed = () => {
  return (
    <div>
      <p className="font-sans text-9xl">Feed - some</p>
      <div className="grid grid-cols-3 gap-4">
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>9</div>
      </div>
      <div className="box-content h-32 w-32 p-4 border-4">test</div>
      <div className="grid grid-cols-3 gap-2 place-content-center h-48">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div className="text-green-500">6 some some some</div>
      </div>
      <input className="placeholder-green-500" placeholder="jane@example.com" />
    </div>
  );
};

export { Feed };
