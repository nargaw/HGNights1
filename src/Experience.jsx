import { Physics } from "@react-three/rapier"
import Objects from "./Experience/Objects"
import { OrbitControls } from "@react-three/drei"
import EnclosedBox from "./Experience/EnclosedBox"

export default function Experience()
{
    return <>
        {/* <OrbitControls makeDefault={false}/> */}
        <Physics>
            <EnclosedBox />
            <Objects />
        </Physics>
    </>
}