const onConsultarApi = async ()=>{
    try
    {
        const input = document.getElementById("url")    
        let spinner = document.getElementById("spinner")
        spinner.style.display = "flex"
        const rawResponse = await fetch('https://rim-ug-api.azurewebsites.net/predecir', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({imagen: input.value})
        });
        const content = await rawResponse.json()
        console.log(content)
        if(rawResponse.ok)
        {
            if(!content.error)
            {
                document.getElementById("madurez").innerHTML = content.respuesta
            }
            
        }        
        spinner.style.display = "none"
    }catch(error){
        spinner.style.display = "none"
        console.log(error)
    }
    
    
}

