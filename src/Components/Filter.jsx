import { useEffect, useState } from "react"





export default function Filterpage({data,setfldata}) {
    const [color,setcolor]=useState({})
    const [gender,setgender]=useState({})
    const [type,settype]=useState({})


    useEffect(()=>{
        let dt=data
        let cl=Object.keys(color)
        if (cl.length!=0){
            let colordt=[]
            cl.forEach((el)=>{
                let x=dt.filter((e)=>{
                    return e.color==el
                })
                colordt=[...colordt,...x]
            })
            dt=colordt
        }
        
        let gn=Object.keys(gender)
        if (gn.length!=0){
            let genderdt=[]
            gn.forEach((el)=>{
                let x=dt.filter((e)=>{
                    return e.gender==el
                })
                genderdt=[...genderdt,...x]
            })
            dt=genderdt
        }

        let tp=Object.keys(type)
        if (tp.length!=0){
            let typedt=[]
            tp.forEach((el)=>{
                let x=dt.filter((e)=>{
                    return e.type==el
                })
                typedt=[...typedt,...x]
            })
            dt=typedt
        }

        setfldata(dt)
    },[color,gender,type])

    function handlecolor(x){
        if (x.checked){
            setcolor({
                ...color,
                [x.name]:0
            })
        } else {
            let z=color
            delete z[x.name]
            setcolor({...z})
        } 
    }

    function handlegender(x){
        if (x.checked){
            setgender({
                ...gender,
                [x.name]:0
            })
        } else {
            let z=gender
            delete z[x.name]
            setgender({...z})
        }
    }

    function handletype(x){
        if (x.checked){
            settype({
                ...type,
                [x.name]:0
            })
        } else {
            let z=type
            delete z[x.name]
            settype({...z})
        }
    }
    

    
    return (
        <div className="w-60 p-5 ring-1 ring-gray-300 drop-shadow-md h-fit">
            <p className="border-b-2 text-center font-medium text-xl">Filter</p>
            <div className="mt-3">
                <div>
                    <p className="font-medium">Color</p>
                    <div className=" font-light">
                        <div className="flex items-center gap-1">
                            <input type="checkbox" name="Red" id="" onChange={(e)=>handlecolor(e.target)}/>
                            <label htmlFor="red" className="ml-2">Red</label>
                            <div className="w-8 h-2 bg-red-600"></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <input type="checkbox" name="Blue" id="" onChange={(e)=>handlecolor(e.target)}/>
                            <label htmlFor="blue" className="ml-2">Blue</label>
                            <div className="w-8 h-2 bg-blue-600"></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <input type="checkbox" name="Green" id="" onChange={(e)=>handlecolor(e.target)}/>
                            <label htmlFor="green" className="ml-2">Green</label>
                            <div className="w-8 h-2 bg-green-600"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <p className="font-medium">Gender</p>
                    <div className=" font-light">
                        <div className="flex items-center gap-3">
                            <input type="checkbox" name="Men" id="" onChange={(e)=>handlegender(e.target)}/>
                            <label htmlFor="men">Men</label>
                        </div>
                        <div className="flex items-center gap-3">
                            <input type="checkbox" name="Women" id="" onChange={(e)=>handlegender(e.target)}/>
                            <label htmlFor="women">Women</label>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <p className=" font-medium">Type</p>
                    <div className=" font-light">
                        <div className="flex items-center gap-3">
                            <input type="checkbox" name="Polo" id="" onChange={(e)=>handletype(e.target)} />
                            <label htmlFor="polo">Polo</label>
                        </div>
                        <div className="flex items-center gap-3">
                            <input type="checkbox" name="Hoodie" id="" onChange={(e)=>handletype(e.target)}/>
                            <label htmlFor="hoodie">Hoodie</label>
                        </div>
                        <div className="flex items-center gap-3">
                            <input type="checkbox" name="Basic" id="" onChange={(e)=>handletype(e.target)}/>
                            <label htmlFor="basic">Basic</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}