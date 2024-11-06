import { useState } from "react";
import Playground from "./coments/PlayGround";


export default function App() {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? "Unmount" : "Mount"} the component
            </button>
            {show && <hr />}
            {show && <Playground/>}
        </>
    );
}