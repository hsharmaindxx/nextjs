import { useRouter } from "next/navigation";
import { useState } from "react"

export default function parentComponent() {
    const [value, setValue] = useState('not changed');
    const navigate = useRouter()

    const changeValue = (val) => {
        setValue(val)
        return val
    }
    return (
        <div className="	flex flex-col items-center container-main">
            <h1 className="mb-2 text-3xl font-bold underline">Lifting up state</h1>
            <button
                className="mb-6	bg-sky-700 px-4 py-2 text-white hover:bg-red-800 sm:px-8 sm:py-3 rounded"
                onClick={() => navigate.push("/")}
            >
                Home
            </button>
            <div className="border	w-full	mb-6"></div>
            <h2 className="text-xl	mb-3">About Lifting up state</h2>
            <p className="text-center">
                Here we are using child component and the parent component through which we are changing the state of parent component by the help of child component.
            </p>
            <p className="text-center">
            Lifting state up in React is considered a best practice as it streamlines data management, enhances code clarity, and facilitates better communication between components, leading to more robust and maintainable applications.
            </p>
            <div className="mt-10">
                <h1>Value is {value}</h1>
                <ChildComponent changeTheValue={changeValue} />
            </div>
        </div>
    )
}

export function ChildComponent({ changeTheValue }) {
    const [toggle, setToggle] = useState(true)
    return (<>
        <button className="bg-[#bef264] text-black	px-4 py-2 rounded" onClick={() => {
            if (toggle) {
                changeTheValue('changed')
                setToggle(!toggle)
            } else {
                changeTheValue('not changed')
                setToggle(!toggle)
            }
        }}>Change the value</button>
    </>)
}
