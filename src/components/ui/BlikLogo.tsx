interface BlikLogoProps {
  className?: string;
  size?: number;
  rotated?: boolean;
}

export default function BlikLogo({ 
  className = "", 
  size = 40,
  rotated = false 
}: BlikLogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={rotated ? { transform: 'scale(1.05) rotate(5deg)' } : undefined}
    >
      <defs>
        <linearGradient id="blikLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF"/>
          <stop offset="100%" stopColor="#00D9A6"/>
        </linearGradient>
      </defs>
      
      <rect 
        x="0" y="0" 
        width="40" height="40" 
        rx="12" ry="12" 
        fill="url(#blikLogoGradient)"
      />
      
      <text 
        x="50%" y="54%" 
        dominantBaseline="middle" 
        textAnchor="middle"
        fill="white" 
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontWeight="700"
        fontSize="20"
      >B</text>
    </svg>
  );
}





