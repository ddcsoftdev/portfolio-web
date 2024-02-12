import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// Import OrbitControls using ES6 modules
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {sizeWidth} from "@mui/system";

const My3DModel = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer();
        let sizeWidth = 280;
        let sizeHeight = 200;
        renderer.setSize(sizeWidth, sizeHeight);
        mountRef.current.appendChild(renderer.domElement); // Attach renderer to the div

        // Create a cube
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Animation function
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotation
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

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
