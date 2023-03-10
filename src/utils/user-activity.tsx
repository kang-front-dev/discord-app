import React from "react"

export function getActivity(activity: Array<string> | string){
  if(Array.isArray(activity)){
    return <div>{activity[0]} <span>{activity[1]}</span></div>
  }else{
    return <div>{activity}</div>
  }
}