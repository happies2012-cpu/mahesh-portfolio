export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] animate-pulse delay-500" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Flowing Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(199, 89%, 48%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(199, 89%, 48%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(160, 84%, 39%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M-100,400 Q400,300 600,500 T1200,400 T1800,500"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          className="animate-[flow_20s_ease-in-out_infinite]"
        />
        <path
          d="M-100,500 Q300,400 500,600 T1100,500 T1700,600"
          stroke="url(#lineGradient)"
          strokeWidth="0.5"
          fill="none"
          className="animate-[flow_25s_ease-in-out_infinite_reverse]"
        />
      </svg>
    </div>
  );
}
