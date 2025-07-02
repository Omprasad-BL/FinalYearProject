"use client"

type Props={
    id:number;
    index:number;
    totalCount:number;
    locked?:boolean;
    current?:boolean;
    percentage:number
}


export const LessonButton=({id,index,totalCount,current,locked,percentage}:Props)=>{
    return (
        <div>
            {id}
        </div>
    )
}