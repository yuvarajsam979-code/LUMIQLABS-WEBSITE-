
const Logo = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Central L */}
      <path 
        d="M85 60V140H135" 
        stroke="url(#l-gradient)" 
        strokeWidth="15" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Orbit 1 */}
      <ellipse 
        cx="100" 
        cy="100" 
        rx="80" 
        ry="30" 
        transform="rotate(-30 100 100)" 
        stroke="url(#orbit-gradient-1)" 
        strokeWidth="3" 
      />
      
      {/* Orbit 2 */}
      <ellipse 
        cx="100" 
        cy="100" 
        rx="80" 
        ry="30" 
        transform="rotate(45 100 100)" 
        stroke="url(#orbit-gradient-2)" 
        strokeWidth="3" 
      />

      {/* Spheres */}
      <circle cx="40" cy="80" r="8" fill="#06b6d4">
        <animate attributeName="r" values="7;9;7" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="120" r="10" fill="#7c3aed">
        <animate attributeName="r" values="9;11;9" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Definitions */}
      <defs>
        <linearGradient id="l-gradient" x1="85" y1="60" x2="135" y2="140" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06b6d4" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="orbit-gradient-1" x1="20" y1="100" x2="180" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="1" stopColor="#06b6d4" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="orbit-gradient-2" x1="20" y1="100" x2="180" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7c3aed" stopOpacity="0.8" />
          <stop offset="1" stopColor="#7c3aed" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
