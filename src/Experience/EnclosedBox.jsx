import { RigidBody } from "@react-three/rapier";

export default function EnclosedBox()
{

    return <>
        <RigidBody type="fixed" friction={0.0} restitution={0.5}>
            <mesh position={[-20, 0, 0]} rotation-y={Math.PI * 0.5}>
                <boxGeometry args={[200, 100, 5]}/>
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh position={[20, 0, 0]} rotation-y={Math.PI * 0.5}>
                <boxGeometry args={[200, 100, 5]}/>
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh  position={[0, -40, 0]} rotation-x={Math.PI * 0.5}>
                <boxGeometry args={[150, 200, 5]}/>
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh  position={[0, 40, 0]} rotation-x={Math.PI * 0.5}>
                <boxGeometry args={[150, 200, 5]}/>
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh  position={[0, 0, 70]} >
                <boxGeometry args={[150, 100, 5]}/>
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh  position={[0, 0, 100]} >
                <boxGeometry args={[150, 100, 5]}/>
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />    
            </mesh>              
        </RigidBody>    
    </>
}