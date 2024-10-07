import React, { useEffect } from "react";
import { useState } from "react";
import './App.css';
import Pname from "./w";
// let co='grey';
export default function Fo({ t, age, yes }) {

    let [v, setv] = useState({ name: '', phone: '', age: '', sure: false, salary: '' });
    let [op, setop] = useState([{ id: 1, o: 500 }, { id: 2, o: 600 }, { id: 3, o: 700 }, { id: 4, o: 800 }, { id: 5, o: 900 }]);
    let [co, setc] = useState('grey');
    let [co2, setco2] = useState('black');
    let opt = op.map((e) => {
        return (
            <option key={e.id} style={{ background: 'green', cursor: 'pointer' }} > {e.o} </option>
        )
    });

    useEffect((e) => {
        if (v.age !== '' && v.name !== '' && v.phone !== '') {
            setc('green');
            setco2('white');
        }
        else {
            setc('grey');
            setco2('black');
        }


    }, [v])

    return (
        <form style={{}} onSubmit={(e) => {
            e.preventDefault();

        }}>
            <h2 style={{ textAlign: 'center' }}>
                request a loan
            </h2>
            <hr />
            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <label >name</label>
                <input style={{borderRadius:'10px',scale:'1.2',outline:'none',padding:'2px', border:''}} type="text" value={v.name} onChange={(e) => { setv({ ...v, name: e.target.value }); }} ></input>
                <label style={{}}>phone namber</label>
                <input style={{borderRadius:'10px',scale:'1.2',outline:'none',padding:'2px' }} value={v.phone} onChange={(e) => { setv({ ...v, phone: e.target.value }); }} ></input>
                <label>age</label>
                <input style={{borderRadius:'10px',scale:'1.2',outline:'none',padding:'2px' }} value={v.age} onChange={(e) => { setv({ ...v, age: e.target.value }); }} ></input>
                <label>are you sure</label>
                <input type="checkbox" checked={v.sure} onChange={(e) => { setv({ ...v, sure: e.target.checked }) }} />
                <label>salary</label>
                <select style={{ width: '80%', cursor: 'pointer' }} value={v.salary} onChange={(e) => { setv({ ...v, salary: e.target.value }) }} >

                    {opt}
                </select>

                <button style={{
                    margin: '20px', background: co, color: co2,padding:'5px',borderRadius:"9px",border:'none', scale:'1.4', cursor:"pointer"
                }} onClick={(e) => {
                    if (v.age === '' || v.name === '' || v.phone === '') {
                        return;
                    }

                    if (v.name.length < 5) {
                        t();
                        e.preventDefault();
                        return;
                    }
                    if (!/^\d+$/.test(v.age) || parseInt(v.age, 10) > 100) {
                        age();
                        e.preventDefault();
                        return;
                    }
                        yes();

                    
                }} >submit</button>
            </div>
        </form>
    );

}

