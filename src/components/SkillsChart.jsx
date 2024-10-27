// src/components/SkillsChart.js
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
const SkillsChart = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const skills = [
      { name: "React", level: 9, color: 0x61dafb },
      { name: "Node.js", level: 8, color: 0x68a063 },
      { name: "JavaScript", level: 9, color: 0xf7df1e },
      { name: "HTML/CSS", level: 10, color: 0xe34f26 },
      { name: "Python", level: 7, color: 0x3776ab },
      { name: "Database", level: 8, color: 0x4479a1 },
      { name: "Git", level: 8, color: 0xf05032 },
      { name: "RESTful APIs", level: 9, color: 0x00add8 },
      { name: "GraphQL", level: 7, color: 0xe10098 },
    ];

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent background

    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    camera.position.z = 15;

    const fontLoader = new FontLoader();
    fontLoader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (font) => {
        skills.forEach((skill, index) => {
          const phi = Math.acos(-1 + (2 * index) / skills.length);
          const theta = Math.sqrt(skills.length * Math.PI) * phi;

          const textGeometry = new TextGeometry(skill.name, {
            font,
            size: 0.8,
            height: 0.1,
          });

          const material = new THREE.MeshPhongMaterial({ color: skill.color });
          const textMesh = new THREE.Mesh(textGeometry, material);

          const radius = 10;
          textMesh.position.setFromSphericalCoords(radius, phi, theta);
          textMesh.lookAt(0, 0, 0);

          scene.add(textMesh);

          // Add connecting line
          const lineGeometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(0, 0, 0),
            textMesh.position,
          ]);
          const lineMaterial = new THREE.LineBasicMaterial({
            color: skill.color,
            opacity: 0.7,
            transparent: true,
          });
          const line = new THREE.Line(lineGeometry, lineMaterial);
          scene.add(line);

          // Add skill level indicator
          const sphereGeometry = new THREE.SphereGeometry(skill.level / 20);
          const sphereMaterial = new THREE.MeshBasicMaterial({
            color: skill.color,
          });
          const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
          sphere.position.setFromSphericalCoords(radius + 1, phi, theta);
          scene.add(sphere);
        });
      }
    );

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add point light
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle container resize
    const handleResize = () => {
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "600px" }} />;
};

export default SkillsChart;
