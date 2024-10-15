export const GridBackground = () => (
  <svg
    width='100%'
    height='100%'
    xmlns='http://www.w3.org/2000/svg'
    className='absolute inset-0 z-0'
  >
    <defs>
      <pattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'>
        <path
          d='M 40 0 L 0 0 0 40'
          fill='none'
          stroke='rgba(0,0,0,0.05)'
          strokeWidth='1'
        />
      </pattern>
      <linearGradient id='fade' x1='0%' y1='0%' x2='0%' y2='100%'>
        <stop offset='0%' stopColor='white' stopOpacity='0' />
        <stop offset='100%' stopColor='white' stopOpacity='1' />
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' fill='url(#grid)' />
    <rect width='100%' height='100%' fill='url(#fade)' />
  </svg>
);
