import { useEffect } from "react";
import { useState } from "react";

export function App(){

    const API_FACTS = 'https://catfact.ninja/fact';
    const API_IMAGES = 'https://cataas.com/cat/says/';

    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();

    const getFirstWord = (sentence)=>{
        if(sentence == null){return }
        return sentence.split(' ')[0];
    }

    useEffect(()=>{
        try{
          fetch(API_FACTS)
          .then(data => data.json())
          .then(response => setFact(response.fact));
        }catch(e){
            console.error(e);
        }
    },[]);

    useEffect(()=>{

      const firstWord = getFirstWord(fact);
    
      setImageUrl(`${API_IMAGES}${firstWord}`);
    }, [fact]);

    return (
        <main>
            <h1>Prueba tecnica</h1>
            <p>{fact}</p>
            <img src={imageUrl} alt="cat image" />
        </main>
    );
}