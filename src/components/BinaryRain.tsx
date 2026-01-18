import { useEffect, useRef } from 'react';
import { Box } from '@mui/joy';

type BinaryRainProps = {
  isDarkMode: boolean;
};

function BinaryRain({ isDarkMode }: BinaryRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Configuration
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    // Colors based on theme
    const textColor = isDarkMode ? '#230c88ff' : '#0a66c2ff';
    const bgColor = isDarkMode ? 'rgba(10, 10, 26, 0.05)' : 'rgba(193, 196, 199, 0.05)';

    const draw = () => {
      // Semi-transparent background for trail effect
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = textColor;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random 1 or 0
        const text = Math.random() > 0.5 ? '1' : '0';

        // Vary opacity for depth effect
        const opacity = 0.1 + Math.random() * 0.5;
        ctx.fillStyle = isDarkMode
          ? `rgba(255, 255, 255, ${opacity})`
          : `rgba(0, 0, 0, ${opacity})`;

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly after reaching bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDarkMode]);

  return (
    <Box
      component="canvas"
      ref={canvasRef}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

export default BinaryRain;
