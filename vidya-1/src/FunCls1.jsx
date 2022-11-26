import React from "react";
import FunCls2 from "./FunCls2";

let FunCls1 = () => {

    let student = {
        student_Name : "Vidya",
        student_id:101
    }

return (
    <>
    <FunCls2 Student={student}/>
    </>
)

}
export default FunCls1