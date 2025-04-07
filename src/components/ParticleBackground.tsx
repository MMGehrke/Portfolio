import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

interface Particle {
  sprite: PIXI.Sprite;
  velocity: { x: number; y: number };
  position: { x: number; y: number };
  alpha: number;
  targetAlpha: number;
}

const ParticleBackground: React.FC = () => {
  const appRef = useRef<PIXI.Application | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const isMouseDownRef = useRef(false);

  // Configuration
  const config = {
    particleCount: 150,
    particleSize: 3,
    baseSpeed: 0.5,
    mouseRadius: 150,
    repulsionForce: 0.1,
    clickBurstCount: 20,
    clickBurstSpeed: 2,
    clickBurstDuration: 30,
    colors: [0x60A5FA, 0x34D399, 0x818CF8, 0xA78BFA, 0x3B82F6, 0x10B981],
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize PIXI application
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0x000000,
      backgroundAlpha: 0,
      antialias: true,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      resizeTo: window,
    });

    // Wait for the PIXI application to be ready
    app.init().then(() => {
      if (!containerRef.current) return;
      
      const canvas = app.view as HTMLCanvasElement;
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.zIndex = '0';
      
      containerRef.current.appendChild(canvas);
      appRef.current = app;

      // Create particle texture
      const particleTexture = createParticleTexture(app);

      // Initialize particles
      const initParticles = () => {
        particlesRef.current = Array.from({ length: config.particleCount }, () => {
          const sprite = new PIXI.Sprite(particleTexture);
          const color = config.colors[Math.floor(Math.random() * config.colors.length)];
          sprite.tint = color;
          sprite.alpha = 0.8;
          sprite.anchor.set(0.5);
          sprite.scale.set(config.particleSize / 4);

          const particle: Particle = {
            sprite,
            velocity: {
              x: (Math.random() - 0.5) * config.baseSpeed,
              y: (Math.random() - 0.5) * config.baseSpeed,
            },
            position: {
              x: Math.random() * app.screen.width,
              y: Math.random() * app.screen.height,
            },
            alpha: 0.8,
            targetAlpha: 0.8,
          };

          sprite.x = particle.position.x;
          sprite.y = particle.position.y;
          app.stage.addChild(sprite);

          return particle;
        });
      };

      // Create particle texture
      function createParticleTexture(app: PIXI.Application): PIXI.Texture {
        const graphics = new PIXI.Graphics();
        graphics.beginFill(0xFFFFFF);
        graphics.drawCircle(0, 0, 2);
        graphics.endFill();
        return app.renderer.generateTexture(graphics);
      }

      // Handle mouse movement
      const handleMouseMove = (e: MouseEvent) => {
        mousePositionRef.current = {
          x: e.clientX,
          y: e.clientY,
        };
      };

      // Handle mouse down
      const handleMouseDown = () => {
        isMouseDownRef.current = true;
        createClickBurst();
      };

      // Handle mouse up
      const handleMouseUp = () => {
        isMouseDownRef.current = false;
      };

      // Create click burst effect
      const createClickBurst = () => {
        const burstParticles = Array.from({ length: config.clickBurstCount }, () => {
          const sprite = new PIXI.Sprite(particleTexture);
          sprite.tint = 0xFFFFFF;
          sprite.alpha = 1;
          sprite.anchor.set(0.5);
          sprite.scale.set(config.particleSize / 4);

          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * config.clickBurstSpeed;

          const particle: Particle = {
            sprite,
            velocity: {
              x: Math.cos(angle) * speed,
              y: Math.sin(angle) * speed,
            },
            position: {
              x: mousePositionRef.current.x,
              y: mousePositionRef.current.y,
            },
            alpha: 1,
            targetAlpha: 0,
          };

          sprite.x = particle.position.x;
          sprite.y = particle.position.y;
          app.stage.addChild(sprite);

          return particle;
        });

        // Animate burst particles
        let frameCount = 0;
        const animateBurst = () => {
          frameCount++;
          burstParticles.forEach((particle) => {
            particle.position.x += particle.velocity.x;
            particle.position.y += particle.velocity.y;
            particle.sprite.x = particle.position.x;
            particle.sprite.y = particle.position.y;
            particle.sprite.alpha = 1 - (frameCount / config.clickBurstDuration);
          });

          if (frameCount < config.clickBurstDuration) {
            requestAnimationFrame(animateBurst);
          } else {
            burstParticles.forEach((particle) => {
              app.stage.removeChild(particle.sprite);
            });
          }
        };

        animateBurst();
      };

      // Animation loop
      const animate = () => {
        if (!appRef.current) return;

        particlesRef.current.forEach((particle) => {
          // Calculate distance to mouse
          const dx = mousePositionRef.current.x - particle.position.x;
          const dy = mousePositionRef.current.y - particle.position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Apply forces based on mouse distance
          if (distance < config.mouseRadius) {
            const force = (config.mouseRadius - distance) / config.mouseRadius;
            const angle = Math.atan2(dy, dx);
            
            // Repulsion force
            particle.velocity.x -= Math.cos(angle) * force * config.repulsionForce;
            particle.velocity.y -= Math.sin(angle) * force * config.repulsionForce;
          }

          // Update position
          particle.position.x += particle.velocity.x;
          particle.position.y += particle.velocity.y;

          // Bounce off walls
          if (particle.position.x < 0 || particle.position.x > app.screen.width) {
            particle.velocity.x *= -0.8;
            particle.position.x = Math.max(0, Math.min(particle.position.x, app.screen.width));
          }
          if (particle.position.y < 0 || particle.position.y > app.screen.height) {
            particle.velocity.y *= -0.8;
            particle.position.y = Math.max(0, Math.min(particle.position.y, app.screen.height));
          }

          // Update sprite position
          particle.sprite.x = particle.position.x;
          particle.sprite.y = particle.position.y;

          // Fade in/out based on mouse proximity
          const targetAlpha = distance < config.mouseRadius ? 0.4 : 0.8;
          particle.sprite.alpha += (targetAlpha - particle.sprite.alpha) * 0.1;
        });

        requestAnimationFrame(animate);
      };

      // Handle window resize
      const handleResize = () => {
        if (!appRef.current) return;
        app.renderer.resize(window.innerWidth, window.innerHeight);
      };

      // Initialize and start animation
      initParticles();
      animate();

      // Add event listeners
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('resize', handleResize);
        if (appRef.current) {
          appRef.current.destroy(true);
        }
      };
    });

    return () => {
      if (appRef.current) {
        appRef.current.destroy(true);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
      }}
    />
  );
};

export default ParticleBackground; 