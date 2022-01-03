import React from 'react';
import { Input,Button, } from 'antd';

export const Form = ({added}) => {
    const [form, setForm] = React.useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        value = name === "Time" ? Number(value) : value;
        setForm({ ...form, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/recipe", {
            method: "POST",
            body: JSON.stringify(form),
            headers : {"Content-Type" : "application/json"}
        });
        added(Math.random(10) * 1000);
    }
    return (
        <form>
            <label>Title</label>
            <Input type="text" name="title" placeholder="Enter recipe title" onChange={handleChange} /><br/><br/>
            <label>Image</label>
            <Input type="text" name="Image" placeholder="Enter recipe image link" onChange={handleChange} /><br/><br/>
            <label>Time(in min)</label>
            <Input type="text" name="Time" placeholder="Enter recipe Time" onChange={handleChange} /><br/><br/>
            <label>Ingerdients</label>
            <Input type="text" name="Ingerdients" placeholder="Enter recipe Ingerdients" onChange={handleChange} /><br/><br/>
            <label>Instructions</label>
            <Input type="text" name="Instructions" placeholder="Enter recipe Instructions" onChange={handleChange} /><br/><br/>
            <Button type="primary" onClick={handleSubmit}>Submit</Button>
        </form>
    )
}