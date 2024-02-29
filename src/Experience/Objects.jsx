import { useFrame } from "@react-three/fiber"
import { InstancedRigidBodies, useRapier} from "@react-three/rapier"
import { useMemo, useRef} from "react"
import { TextureLoader } from "three"
import useStore from "../useStore/useStore"
import { useGLTF } from "@react-three/drei"

export default function Objects()
{
    const mode = useStore(state => state.mode)
    const matcapDark = new TextureLoader().load('./Matcaps/matcapBlackShiny.png')
    const matcapLight = new TextureLoader().load('./Matcaps/matcapWhiteShiny.png')
    const suz = useRef()
    const rigidBodies = useRef()
    const suzCount = 20
    const {nodes} = useGLTF('./Models/suz.glb')
    
    const instances = useMemo(() => {
        const objects = []
        for(let i = 0; i < suzCount; i++){
            const angle = Math.random() * Math.PI * 2 - 20
            const radius =  Math.random() * 2 - 5
            const x = Math.cos(angle) * radius * 2
            const z = Math.sin(angle) * radius
            objects.push({
                key: 'instance_' + i,
                position: 
                [
                    x,
                    (Math.random()) * 5,
                    75
                ],
                rotation: 
                [
                    Math.random(),
                    Math.random(),
                    Math.random()
                ],
                scale:
                [
                    3,
                    3, 
                    3
                ]
            })
        }

        return objects
    })

    let upDown
    let leftRight

    const handleOrientation = (e) => {
        upDown = -(e.beta / 180) * 2 
        leftRight = (e.gamma / 90 / 2) * 2 
    }

    window.addEventListener('deviceorientation', handleOrientation, true)
    const rapier = useRapier()
    
    useFrame(() => {
        if(leftRight <= 1 && leftRight >= -1 ){
            if(rigidBodies.current){
                rigidBodies.current.forEach((api) => {
                    api.applyImpulse({ x: leftRight * 50 , y: 0, z: 0})
                })
            }
        }

        if(upDown <= 1 && upDown >= -1 ){
            if(rigidBodies.current){
                rigidBodies.current.forEach((api) => {
                    api.applyImpulse({ x: 0, y: upDown * 50, z: 0})
                })
            }
        }
    })
 
    return <>
        <InstancedRigidBodies 
            instances={instances} 
            type="dynamic"
            restitution={0.65}
            friction={0}
            gravityScale={0}
            colliders="hull"
            ref={rigidBodies}
            canSleep={false}
        >
            <instancedMesh
                ref={suz}
                args={[nodes.Suzanne.geometry, null, suzCount]}
                dispose={null}
                count={instances.length}
                castShadow
                // scale={[1.5, 1.5, 1.5]}
            >
                {/* <torusGeometry args={[3,1.5]}/> */}
                <meshMatcapMaterial matcap={mode == 'dark' ? matcapDark : matcapLight} />
            </instancedMesh>
        </InstancedRigidBodies>
    </>
}