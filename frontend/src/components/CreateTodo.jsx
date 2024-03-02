import { useState } from "react";
export function CreateTodo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
     
    return <div>
        <input style={{
            padding:10,
            margin:10
        }} 
        type="text" placeholder="title" onChange={function(e) {
            const value = e.target.value;
            setTitle(value);
        }}></input><br />
        <input style={{
            padding:10,
            margin:10
        }} 
        type="text" placeholder="description" onChange={function(e) {
            const value = e.target.value;
            setDescription(value);
        }}></input><br />

        <button style={{
            padding:4,
            margin:10
        }} onClick={()=> {
            fetch("http://localhost:3002/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(async function(res) {
                const json = await res.json();
                alert("todo added");
            })
        }}>Add todo</button>
    </div>
}
