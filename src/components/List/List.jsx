import React from "react"

function List () {
    const list = [1,2,3,4,5,6]
    function changelist(list) {
        const tmp = list.map((x) => x + 2)

        return tmp
    }

    return <div>{list.map((x)=> {return x + ", "})}<br /> {changelist(list).map((x) => {return x + ", "})}</div>
}
export default List;