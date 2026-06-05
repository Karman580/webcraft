"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WebGLBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    
    // Fog
    scene.fog = new THREE.FogExp2(0x030303, 0.002);

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 240;
    camera.position.y = 75;
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x030303, 1);
    containerRef.current.appendChild(renderer.domElement);

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
    scene.add(ambientLight);

    // Dynamic light following mouse
    const pointLight = new THREE.PointLight(0x865cff, 2.5, 350);
    pointLight.position.set(0, 50, 100);
    scene.add(pointLight);

    // Particle Grid Geometry
    const gridCountX = 65;
    const gridCountZ = 65;
    const spacing = 12;
    const totalParticles = gridCountX * gridCountZ;

    const positions = new Float32Array(totalParticles * 3);
    const colors = new Float32Array(totalParticles * 3);

    let index = 0;
    for (let i = 0; i < gridCountX; i++) {
      const x = (i - gridCountX / 2) * spacing;
      for (let j = 0; j < gridCountZ; j++) {
        const z = (j - gridCountZ / 2) * spacing;
        positions[index * 3] = x;
        positions[index * 3 + 1] = 0;
        positions[index * 3 + 2] = z;

        // Custom colors - linear mix from cyan (0x00f2fe) to violet (0x865cff)
        const mixRatio = (i / gridCountX + j / gridCountZ) / 2;
        const col = new THREE.Color();
        col.lerpColors(new THREE.Color(0x00f2fe), new THREE.Color(0x865cff), mixRatio);
        
        colors[index * 3] = col.r;
        colors[index * 3 + 1] = col.g;
        colors[index * 3 + 2] = col.b;

        index++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle Material Texture
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 2.5,
      map: texture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Floating Ambient Dust Particles
    const dustCount = 200;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 600;
      dustPositions[i + 1] = Math.random() * 200 - 50;
      dustPositions[i + 2] = (Math.random() - 0.5) * 600;
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({
      size: 1.5,
      map: texture,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: 0xffffff,
    });
    const dustSystem = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dustSystem);

    // Dynamic grid colors update function
    const colorsAttr = geometry.attributes.color as THREE.BufferAttribute;
    const updateGridColors = (isLight: boolean) => {
      let idx = 0;
      for (let i = 0; i < gridCountX; i++) {
        for (let j = 0; j < gridCountZ; j++) {
          const mixRatio = (i / gridCountX + j / gridCountZ) / 2;
          const col = new THREE.Color();
          if (isLight) {
            // Bright mode: vibrant high-contrast mix (blue, purple, magenta, red, orange)
            if (mixRatio < 0.25) {
              col.lerpColors(new THREE.Color(0x2563EB), new THREE.Color(0x7C3AED), mixRatio / 0.25);
            } else if (mixRatio < 0.5) {
              col.lerpColors(new THREE.Color(0x7C3AED), new THREE.Color(0xDB2777), (mixRatio - 0.25) / 0.25);
            } else if (mixRatio < 0.75) {
              col.lerpColors(new THREE.Color(0xDB2777), new THREE.Color(0xEF4444), (mixRatio - 0.5) / 0.25);
            } else {
              col.lerpColors(new THREE.Color(0xEF4444), new THREE.Color(0xF59E0B), (mixRatio - 0.75) / 0.25);
            }
          } else {
            // Dark mode: glowing cyan to violet
            col.lerpColors(new THREE.Color(0x00f2fe), new THREE.Color(0x865cff), mixRatio);
          }
          colorsAttr.setXYZ(idx, col.r, col.g, col.b);
          idx++;
        }
      }
      colorsAttr.needsUpdate = true;
    };

    // Theme observer
    const updateThemeColors = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "bright";
      renderer.setClearColor(isLight ? 0xffffff : 0x030303, 1);
      if (scene.fog) {
        scene.fog.color.setHex(isLight ? 0xffffff : 0x030303);
      }
      
      // Update grid particles blending, size & opacity
      material.blending = isLight ? THREE.NormalBlending : THREE.AdditiveBlending;
      material.size = isLight ? 4.2 : 2.5; // Larger particles in light mode for excellent visibility
      material.opacity = isLight ? 0.90 : 0.85; // Highly visible particles in light mode
      material.needsUpdate = true;
      
      // Apply theme colors to the grid particles
      updateGridColors(isLight);
      
      // Update dust particles blending & color
      dustMaterial.blending = isLight ? THREE.NormalBlending : THREE.AdditiveBlending;
      dustMaterial.color.setHex(isLight ? 0x7C3AED : 0xffffff); // Purple/blue dust in light mode, white dust in dark mode
      dustMaterial.opacity = isLight ? 0.25 : 0.35;
      dustMaterial.size = isLight ? 2.2 : 1.5;
      dustMaterial.needsUpdate = true;
    };

    updateThemeColors();

    const themeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          updateThemeColors();
        }
      });
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Mouse positions
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.15;
      targetMouseY = (e.clientY - height / 2) * 0.15;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const time = clock.getElapsedTime();
      const positionsAttr = geometry.attributes.position as THREE.BufferAttribute;

      // Mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Dynamic light movement
      pointLight.position.x = mouseX * 2.5;
      pointLight.position.z = 100 + mouseY * 2.5;

      // wave movement
      let idx = 0;
      for (let i = 0; i < gridCountX; i++) {
        for (let j = 0; j < gridCountZ; j++) {
          const x = positionsAttr.getX(idx);
          const z = positionsAttr.getZ(idx);

          // Combined wave mathematical equations
          const wave1 = Math.sin(x * 0.015 + time * 1.3) * 14;
          const wave2 = Math.cos(z * 0.015 + time * 1.1) * 14;
          const wave3 = Math.sin((x + z) * 0.01 + time * 0.7) * 8;
          
          // Distance to mouse for responsive ripples
          const dx = x - mouseX * 2.5;
          const dz = z - mouseY * 2.5;
          const distance = Math.sqrt(dx * dx + dz * dz);
          const ripple = Math.sin(distance * 0.035 - time * 2.5) * Math.max(0, 20 - distance * 0.06);

          positionsAttr.setY(idx, wave1 + wave2 + wave3 + ripple);
          idx++;
        }
      }
      positionsAttr.needsUpdate = true;

      // Rotate particle systems
      particleSystem.rotation.y = time * 0.015;
      dustSystem.rotation.y = time * 0.003;

      // Camera parallax response
      camera.position.x += (mouseX * 0.4 - camera.position.x) * 0.05;
      camera.position.y += (75 - mouseY * 0.15 - camera.position.y) * 0.05;
      camera.lookAt(0, -10, 0);

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", onResize);

    return () => {
      themeObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (containerRef.current && renderer.domElement.parentNode) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="three-canvas-container"
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden bg-transparent transition-opacity duration-1000"
      style={{ zIndex: 0 }}
    />
  );
}
