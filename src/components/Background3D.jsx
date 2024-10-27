// src/components/Background3D.js
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

const Background3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Post-processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    composer.addPass(bloomPass);

    // Create multiple particle systems
    const createParticleSystem = (count, size, speed) => {
      const particles = new THREE.BufferGeometry();
      const posArray = new Float32Array(count * 3);
      const colorArray = new Float32Array(count * 3);

      for (let i = 0; i < count * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
        colorArray[i] = Math.random();
      }

      particles.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );
      particles.setAttribute("color", new THREE.BufferAttribute(colorArray, 3));

      const material = new THREE.PointsMaterial({
        size: size,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
      });

      const system = new THREE.Points(particles, material);
      system.userData.speed = speed;
      return system;
    };

    const particleSystems = [
      createParticleSystem(15000, 0.005, 0.0005),
      createParticleSystem(5000, 0.01, 0.001),
      createParticleSystem(1000, 0.02, 0.002),
    ];

    particleSystems.forEach((system) => scene.add(system));

    camera.position.z = 2;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;

    const onDocumentMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    };

    document.addEventListener("mousemove", onDocumentMouseMove);

    // Color transition
    let hue = 0;
    const colorShift = () => {
      hue = (hue + 0.0005) % 1;
      const color = new THREE.Color().setHSL(hue, 1, 0.5);
      particleSystems.forEach((system) => {
        system.material.color = color;
      });
    };

    const animate = () => {
      requestAnimationFrame(animate);

      particleSystems.forEach((system) => {
        system.rotation.x += system.userData.speed;
        system.rotation.y += system.userData.speed;
      });

      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;

      camera.lookAt(scene.position);

      colorShift();
      composer.render();
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", onDocumentMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default Background3D;
