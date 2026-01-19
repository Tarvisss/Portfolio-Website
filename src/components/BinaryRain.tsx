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
    const columnWidth = 70; // Wider spacing for words
    const columns = Math.floor(canvas.width / columnWidth);
    const maxRows = Math.floor(canvas.height / fontSize);
    const drops: number[] = Array(columns).fill(0).map(() => Math.floor(Math.random() * maxRows));

    const words = [
      'Grow', 'Rise', 'Win', 'Gain', 'Lead', 'Build', 'Drive', 'Push', 'Reach', 'Aim',
      'Strive', 'Thrive', 'Learn', 'Train', 'Plan', 'Skill', 'Craft', 'Grit', 'Will', 'Force',
      'Edge', 'Peak', 'Climb', 'Step', 'Try', 'Prove', 'Act', 'Shape', 'Form', 'Forge',
      'Make', 'Earn', 'Score', 'Beat', 'Top', 'Rank', 'Pass', 'Clear', 'Goal', 'Zest',
      'Move', 'Think', 'Shift', 'Scale', 'Boost', 'Shine', 'Trust', 'Fix', 'Solve', 'Change',
      'Choose', 'Start', 'End', 'Do', 'Dare', 'Guide', 'Care', 'Help', 'Serve', 'Worth',
      'Know', 'Own', 'Stand', 'Firm', 'Work', 'Run', 'Ace', 'Pull', 'Mold', 'Lift',
      'Plot', 'Birth', 'Go', 'Cut', 'Test', 'Mark', 'Place', 'Crest', 'Niche', 'Plus',
      'Fire', 'Steel', 'Sight', 'Bloom', 'Sprout', 'Head', 'Prize', 'Pay', 'Doer'
    ];

    // Colors based on theme
    const textColor = isDarkMode ? '#230c88ff' : '#0a66c2ff';
    const bgColor = isDarkMode ? 'rgba(10, 10, 26, 0.2)' : 'rgba(232, 244, 252, 0.2)';

    const draw = () => {
      // Semi-transparent background for trail effect
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = textColor;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random word from list
        const text = words[Math.floor(Math.random() * words.length)];

        // Vary opacity for depth effect
        const opacity = 0.1 + Math.random() * 0.5;
        ctx.fillStyle = isDarkMode
          ? `rgba(255, 255, 255, ${opacity})`
          : `rgba(0, 0, 0, ${opacity})`;

        ctx.fillText(text, i * columnWidth, drops[i] * fontSize);

        // Reset drop to top randomly after reaching bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 85);

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
