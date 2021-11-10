import React from "react";
import styled from "styled-components";



function Admin({className}){
    return(
        <div>
            <div className={className}>
                <div className="container">
                    <h1>Admin</h1>
                </div>

            </div>
        </div>
    );
}
export default styled(Admin)`
.container{
    margin:10%;
}
*{
    border: 1px solid black;
}
`