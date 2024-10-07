import React, { useState } from "react";

let m='none';

export default function Pname({st,ss}){
    let [s,sets]= useState(st);
return( 
<div   style={{  width:'100%',height:'100%' , background:'#56565653' ,position:"fixed",top:'0%',left:'0%',display:st, alignItems:"center" ,justifyContent:'center'}} onClick={(e)=>{ss()}}>
    <h1 style={{background:"white" , color:'red' , textAlign:'center',padding:'10px'  }}>
        the name incorrect
    </h1>
</div>
);
}
export  function Page({st,ss}){
    let [s,sets]= useState(st);
return( 
<div   style={{  width:'100%',height:'100%' , background:'#56565653' ,position:"fixed",top:'0%',left:'0%',display:st, alignItems:"center" ,justifyContent:'center'}} onClick={(e)=>{ss()}}>
    <h1 style={{background:"white" , color:'red' , textAlign:'center',padding:'10px'  }}>
        the  age incorrect
    </h1>
</div>
);
}
export  function Pyes({st,ss}){
    let [s,sets]= useState(st);
return( 
<div   style={{  width:'100%',height:'100%' , background:'#56565653' ,position:"fixed",top:'0%',left:'0%',display:st, alignItems:"center" ,justifyContent:'center'}} onClick={(e)=>{ss()}}>
    <h1 style={{background:"white" , color:'green' , textAlign:'center',padding:'10px'  }}>
        saved
    </h1>
</div>
);
}