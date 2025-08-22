interface AnimatedBackgroundProps {
  children: React.ReactNode;
}

const AnimatedBackground = ({ children }: AnimatedBackgroundProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced animated gradient orbs - more prominent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-60 -right-60 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-primary-glow/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-60 w-[700px] h-[700px] bg-gradient-to-tr from-primary-glow/18 to-accent/12 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '8s' }}></div>
        <div className="absolute -bottom-60 right-1/5 w-[500px] h-[500px] bg-gradient-to-tl from-accent/20 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-primary/8 to-success/6 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
      </div>

      {/* Enhanced floating particles - more visible */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary/40 rounded-full animate-float"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Enhanced moving geometric shapes - more prominent */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.08]">
        <div className="absolute top-1/6 left-1/5 w-40 h-40 border-2 border-primary rotate-45 animate-spin" style={{ animationDuration: '25s' }}></div>
        <div className="absolute bottom-1/5 right-1/4 w-32 h-32 border-2 border-primary-glow rotate-12 animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-2/3 left-1/3 w-24 h-24 border border-accent rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-28 h-28 border border-primary transform rotate-45 animate-bounce" style={{ animationDuration: '6s' }}></div>
      </div>

      {/* Enhanced grid pattern - more visible */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1.5px, transparent 1.5px),
            linear-gradient(90deg, hsl(var(--primary)) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '40px 40px',
          animation: 'gridMove 25s linear infinite'
        }}
      ></div>

      {/* Flowing light streaks */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.06]">
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-primary-glow to-transparent animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute left-0 top-1/3 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse" style={{ animationDelay: '1s', animationDuration: '6s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;