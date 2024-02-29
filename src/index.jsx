import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { OrbitControls } from '@react-three/drei'
import { Leva } from 'leva'
import { KeyboardControls } from '@react-three/drei'
import { StrictMode } from 'react'
import SinglePage from './UI/SinglePage'


const root = ReactDOM.createRoot(document.querySelector('#root'))

const webglStyle = {
    position: 'fixed'
}
// console.log(root)
root.render(
    <>
        <StrictMode>
            <SinglePage />
            <Leva />
            <Canvas shadows className='webgl' style={webglStyle} camera={{fov: 50, position:[0, -5, 160], near: 0.1, far: 3000}}>
                <Experience />
            </Canvas>
        </StrictMode>
        
    </>
)