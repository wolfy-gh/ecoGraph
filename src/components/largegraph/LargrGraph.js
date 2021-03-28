import React, { useEffect, useState } from 'react'
import ForceGraph3D from 'react-force-graph-3d';


function LargrGraph() {
    const [data, setData] = useState([])
    const getData = () => {
        fetch('./datasets/blocks.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        ).then(res => res.json()).
            then(res => setData(res))
    }
    console.log(data.length)
    useEffect(() => {
        getData()
    }, [])

    // fonction toggle dimension 
    const toggleDimension = () => {

    }
    return (
        <div> <input type="radio" onChange={toggleDimension} /> 1D
            <input type="radio" onChange={toggleDimension} /> 2D
            <input type="radio" onChange={toggleDimension} /> 3D
            <div className="large_graph">

                {data.length === 0 ? <h1> laoding </h1> :
                    <ForceGraph3D
                        graphData={data}
                        nodeLabel={node => `${node.user}: ${node.description}`}
                        nodeAutoColorBy="user"
                        linkDirectionalParticles={1} />
                }
            </div>
        </div>
    )
}

export default LargrGraph
