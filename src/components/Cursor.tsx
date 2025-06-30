// // Cursor.tsx
// import React, { useEffect, useState } from 'react';

// const Cursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', move);
//     return () => window.removeEventListener('mousemove', move);
//   }, []);

//   return (
//     <div
//       className="pointer-events-none fixed z-[9999]"
//       style={{
//         transform: `translate(${position.x - 24}px, ${position.y - 24}px)`,
//         transition: 'transform 0.08s ease-out',
//       }}
//     >
//       {/* Outer ring */}
//       <div className="w-12 h-12 rounded-full border-2 border-amber-500 bg-white/10 backdrop-blur-sm flex items-center justify-center relative animate-pulse-slow">
//         {/* Inner ring */}
//         <div className="w-6 h-6 rounded-full border border-amber-500"></div>
//         {/* Center dot (shutter) */}
//         <div className="w-2 h-2 rounded-full bg-amber-500 absolute"></div>
//       </div>
//     </div>
//   );
// };

// export default Cursor;
