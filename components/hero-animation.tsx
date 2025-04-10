"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 3000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    // Materials
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x8a2be2, // Purple color
      transparent: true,
      opacity: 0.5,
    })

    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Neural network nodes
    const nodeGeometry = new THREE.SphereGeometry(0.05, 24, 24)
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x4361ee }) // Brighter blue

    const nodes: THREE.Mesh[] = []
    const nodePositions: THREE.Vector3[] = []
    const nodeCount = 50

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
      const x = (Math.random() - 0.5) * 8
      const y = (Math.random() - 0.5) * 8
      const z = (Math.random() - 0.5) * 8
      node.position.set(x, y, z)
      nodePositions.push(new THREE.Vector3(x, y, z))
      nodes.push(node)
      scene.add(node)
    }

    // Create connections between nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4361ee,
      transparent: true,
      opacity: 0.3,
    })

    const connections: THREE.Line[] = []
    const maxDistance = 2

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const distance = nodePositions[i].distanceTo(nodePositions[j])
        if (distance < maxDistance) {
          const geometry = new THREE.BufferGeometry().setFromPoints([nodePositions[i], nodePositions[j]])
          const line = new THREE.Line(geometry, lineMaterial)
          connections.push(line)
          scene.add(line)
        }
      }
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      // Make particles move
      const positions = particlesGeometry.attributes.position.array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(Date.now() * 0.001 + i) * 0.001
        positions[i + 1] += Math.cos(Date.now() * 0.001 + i) * 0.001
      }
      particlesGeometry.attributes.position.needsUpdate = true

      particlesMesh.rotation.x += 0.0005
      particlesMesh.rotation.y += 0.0005

      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Dispose resources
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      nodeGeometry.dispose()
      nodeMaterial.dispose()
      lineMaterial.dispose()

      connections.forEach((line) => {
        line.geometry.dispose()
        scene.remove(line)
      })

      nodes.forEach((node) => {
        scene.remove(node)
      })

      scene.remove(particlesMesh)
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0" />
}
