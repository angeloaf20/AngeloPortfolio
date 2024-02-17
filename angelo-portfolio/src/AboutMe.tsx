import { FunctionalComponent } from 'preact';
import { useRef, useEffect } from 'preact/hooks';
import * as THREE from 'three';

  

const aboutMe = `Ever since middle school, programming and computers in general have been passions of mine.
I started with learning about game development with Unity. After high school, I got into web development
and deeper into game development, focusing on graphics programming, both natively and on the web, and designing in-game systems.
It was around this time that I started learning Lua(u) and making games with Roblox.  In my free time, 
I like to learn languages and play video games. I speak both
English and Spanish, and can hold a conversation in Italian.`;

interface Heading {
    heading: string
}

export const AboutMeHeading: FunctionalComponent<Heading> = ({ heading }) => {
    return(
        <h1 className="content-heading">{heading}</h1>
    ) 
}

export const AboutMeStory = () => {
    //Content heading on the left, content information on the right
    return (
        <p> {aboutMe} </p>
    )
}

export const AboutMeInformation = () => {
    return (
        <div class="content-information">
            <AboutMeHeading heading="About Angelo"/>
            <AboutMeStory />
        </div>
    )
}

const AboutMeSkills: FunctionalComponent = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      if (!canvasRef.current) return;
  
      const canvas = canvasRef.current;
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      //renderer.setPixelRatio( window.devicePixelRatio );

        renderer.setSize(window.innerWidth, window.innerHeight);
  
      const fov = 45;
      const aspect = canvas.clientWidth / canvas.clientHeight;  // the canvas default
      const near = 0.1;
      const far = 1000;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.z = 15;
  
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xDDDDDE)

      const textureLoader = new THREE.TextureLoader();
      const cubeTextures = [
        textureLoader.load("../assets/about-me-cube/luau-logo.png"),
        textureLoader.load("../assets/about-me-cube/threejs-logo.png"),
        textureLoader.load("../assets/about-me-cube/csharp-logo.png"),
        textureLoader.load("../assets/about-me-cube/typescript-logo.png"),
        textureLoader.load("../assets/about-me-cube/html-logo.png"),
        textureLoader.load("../assets/about-me-cube/css-logo.png"),
      ].map(tex => { 
        tex.generateMipmaps = true;
        return new THREE.MeshBasicMaterial({ map: tex, transparent:true, })
      });
  
      const geometry = new THREE.BoxGeometry(5, 5, 5);      
      const cube = new THREE.Mesh(geometry, cubeTextures);
      scene.add(cube);
      
      function animate() {
        requestAnimationFrame(animate);
  
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
  
        renderer.render(scene, camera);
      }
      animate();
  
      return () => {
        geometry.dispose();
        renderer.dispose();
      };
    }, []);
  
    return <canvas ref={canvasRef} class="cube" />;
};

export function AboutMe() {
    return (
        <div id="about-me" className="content-container">
            <div className="content-section">
                <AboutMeInformation/>
                <AboutMeSkills />
            </div>
        </div>
    )
}