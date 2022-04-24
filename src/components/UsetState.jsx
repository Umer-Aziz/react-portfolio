import React , {useState} from 'react'

const UsetState = () => {
    let [text , SetText ] = useState("Umer Aziz");


    let ChangeText = ()=> {
      let value=text;
      (value === "Umer Aziz" ) ? SetText("Web Developer") : SetText("Umer Aziz");
    }
    
    return (
     <div className="">
     <h1 className="text-4xl text-gray-250">{text}</h1>
     <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded" onClick={ChangeText}>Change Text</button>
     </div>
    );
}

export default UsetState