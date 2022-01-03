import React from 'react';
import { Form } from './Form';
import { Formlist } from './Formlist';
import { Formscreen } from './Formscreen';
import { Button } from 'antd';
export const Recipe = () => {
    const [data, setData] = React.useState([]);
    const [select, setSelect] = React.useState(null);
    const [sorted, setSorted] = React.useState("");
    const [change,setChange] = React.useState(null);
    const getdata = (data) => {
        fetch("http://localhost:3001/recipe/" + data).then((res) => res.json()).then((res) => setSelect(res));
    }
    const added = (x) => {
        console.log(x);
        setChange(x);
    }
    React.useEffect(() => {
        fetch(`http://localhost:3001/recipe?_sort=Time&_order=${sorted}`).then((res) => res.json()).then((res) => setData(res));
    }, [sorted, change]);
    return (
        <div>        
            <div style={{display: 'flex', justifyContent : "space-between", margin : "25px"}}>
                <Form added={added} />
                <div>
                    <div style={{overflowY: 'scroll',height : "300px" ,marginTop : "20px"}}>
                        {data.map((e) => <Formlist key = {e.id} {...e} getdata = {getdata} />)}
                    </div>
                    <div style = {{display : "flex", justifyContent : "space-around", marginTop : "25px"}}>
                        <Button type="primary" onClick={()=>setSorted("asc")}>sort by low time</Button>
                        <Button type="primary" onClick={()=>setSorted("desc")}>sort by high time</Button>
                    </div>
                </div>
            </div>
            <hr/>
            {select ? <Formscreen {...select}/> : null}
        </div>
    )
}