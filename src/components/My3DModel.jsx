import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// Import OrbitControls using ES6 modules
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const My3DModel = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 5);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Lighting
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        // Cube setup
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();

        // Animation loop
        const animate = function () {
            requestAnimationFrame(animate);

            // Update controls per frame
            controls.update();

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default My3DModel;
