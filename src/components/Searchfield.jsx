import { useState } from "react"

export default function Searchfield(props) {

    const [filter, setFilter] = useState("");

    return (
        <div>
            <form>
                <input type="search" placeholder="Søg her..." value={props.filter} 
                onChange={props.inputhandler}/>
            </form>
        </div>
    )

}