import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import vertexShader from "./shaders/vertex.glsl"
import fragmentShader from "./shaders/fragment.glsl"
import TypingEffect from "./TypingEffect"
import "./HomePage/HeroStyle.css"

const ShootingStar = () => {
  const mountRef = useRef(null)
  const rendererRef = useRef(null) // Use a ref to store the renderer

  useEffect(() => {
    const canvas = mountRef.current

    // Ensure we only create the renderer once
    if (!rendererRef.current) {
      rendererRef.current = new THREE.WebGLRenderer()
      rendererRef.current.setClearColor("black")
      canvas.appendChild(rendererRef.current.domElement)
    }

    const renderer = rendererRef.current
    const scene = new THREE.Scene()

    const sizes = {
      w: window.innerWidth,
      h: window.innerHeight,
    }

    const camera = new THREE.PerspectiveCamera(
      95,
      sizes.w / sizes.h,
      0.1,
      30000
    )
    camera.position.set(0, 0, 30000 / 16)
    scene.add(camera)

    renderer.setSize(sizes.w, sizes.h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const uniforms = {
      u_time: { type: "f", value: 1.0 },
      u_resolution: { type: "v2", value: new THREE.Vector2() },
    }

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
    })

    function updateUniforms() {
      uniforms.u_resolution.value.x = renderer.domElement.width
      uniforms.u_resolution.value.y = renderer.domElement.height
    }
    updateUniforms()

    window.addEventListener("resize", () => {
      sizes.w = window.innerWidth
      sizes.h = window.innerHeight

      camera.aspect = sizes.w / sizes.h
      camera.updateProjectionMatrix()

      renderer.setSize(sizes.w, sizes.h)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      updateUniforms()
    })

    const particlesPosition = []
    const count = 8000
    for (let i = 0; i < count; i++) {
      const dist = count * 0.4
      const x = dist * 2 * Math.random() - dist
      const y = dist * 2 * Math.random() - dist
      const z = dist * 2 * Math.random() - dist
      particlesPosition.push(x, y, z)
    }

    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(particlesPosition, 3)
    )

    const particlesTexture = new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/sprites/disc.png"
    )
    const particlesMaterial = new THREE.PointsMaterial({
      color: "grey",
      size: 20,
      sizeAttenuation: true,
      map: particlesTexture,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    let mouseX = 0
    let mouseY = 0
    const mouseFX = {
      moveParticles(cX, cY) {
        const c = 2
        mouseX = (cX - sizes.w * 0.5) * c
        mouseY = (cY - sizes.h * 0.5) * c
      },
      onMouseMove(e) {
        mouseFX.moveParticles(e.clientX, e.clientY)
      },
      onTouchMove(e) {
        const touchX = e.changedTouches[0].clientX
        const touchY = e.changedTouches[0].clientY
        mouseFX.moveParticles(touchX, touchY)
      },
    }
    document.addEventListener("mousemove", mouseFX.onMouseMove)
    document.addEventListener("touchmove", mouseFX.onTouchMove)

    const clock = new THREE.Clock()

    const tick = () => {
      const elapsedTime = clock.getElapsedTime()

      uniforms.u_time.value = elapsedTime

      const rotX = Math.sin(elapsedTime * 0.1) * 0.3
      const rotY = Math.sin(elapsedTime * 0.1) * 0.3
      particles.rotation.x = rotX
      particles.rotation.y = rotY

      const ease = 0.03
      camera.position.x += (mouseX - camera.position.x) * ease
      camera.position.y += (mouseY * -1 - camera.position.y) * ease
      camera.lookAt(scene.position)

      renderer.render(scene, camera)

      requestAnimationFrame(tick)
    }
    tick()

    return () => {
      // Cleanup event listeners and THREE.js resources
      document.removeEventListener("mousemove", mouseFX.onMouseMove)
      document.removeEventListener("touchmove", mouseFX.onTouchMove)
      renderer.dispose()
    }
  }, [])

  return (
    <div id="canvas-wrapper" ref={mountRef} aria-label="3D Stars">
      <div className="nameOverlay">
        <TypingEffect
          text='    <span class="roles"> Hi There! It&apos;s </span>'
          speed={100}
        />
        <br />
        <TypingEffect
          text='<span class="name">Needhi Deshmukh</span>'
          speed={100}
          className="name"
        />
        <br />
        <TypingEffect
          text='<span class="roles"> Analyst . Project Manager . Web Developer . Content writer </span>'
          speed={100}
          className="roles"
        />
      </div>
    </div>
  )
}

export default ShootingStar
