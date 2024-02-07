import { useEffect, useState } from 'react';


function saveValue(key,initialValue){
  const x = JSON.parse(localStorage.getItem(key));
  const period = JSON.parse(sessionStorage.getItem(key));

  if(x){
    return x;
  }

  if(period){
    return period;
  }

  else{
    return initialValue;
  }
}

export default function useLocalStorage(key,initialValue) {
  
  const [content, setContent] = useState(()=>{
    return saveValue(key,initialValue);
  })

  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(content))
    sessionStorage.setItem(key,JSON.stringify(content))
  },[key,content])

  return (
    [content,setContent]
  )
}