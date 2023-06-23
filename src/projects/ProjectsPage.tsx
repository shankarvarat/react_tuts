import React from "react";

function ProjectsPage() {
    const [user, setUser] = React.useState({ name: "Shankar", age: 23, preferences:"",city:false})
    const changeHandler = (e: any) => {
        const name=e.target.name
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setUser({ ...user, [name]: value });
        //setUser({ ...user, [e.target.name]: e.target.value });
    };


    return (
        <>
            <h1>uername : {user.name}</h1>
            <h1>age : {user.age}</h1>
            <h1>preferences : {user.preferences}</h1>
            <h1>city :  {user.city ? "Mumbai" : "Pune"}</h1>

            <form>
                <input type="text"
                    placeholder="Enter User Name"
                    name="name"
                    onChange={changeHandler}
                />

                <input type="number"
                    placeholder="Enter User Age"
                    name="age"

                    onChange={changeHandler}
                />


                <input
                    type="radio"
                    name="preferences"
                    id="mba"
                    value="mba"
                    onChange={changeHandler}
                />
                <label htmlFor="mba">MBA</label>

                <input
                    type="radio"
                    name="preferences"
                    id="mca"
                    value="mca"
                    onChange={changeHandler}
                />
                <label htmlFor="mca">MCA</label>

                <input
                    type="radio"
                    name="preferences"
                    id="msc"
                    value="msc"
                    onChange={changeHandler}
                />
                <label htmlFor="msc">MSC</label>

                <input type="checkbox"
                id="mumbai"
                name="mumbai"
                onChange={changeHandler}
                checked={user.city}
                ></input>
                <label htmlFor="mumbai">MUMBAI</label>
            </form>
        </>
    );
}
export default ProjectsPage