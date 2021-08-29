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
            
        }else{
            alert("Al parecer la url que ingreso no es una imagen o el servio no esta disponible")
            document.getElementById("madurez").innerHTML = "-1"
        }        
        spinner.style.display = "none"
    }catch(error){
        alert("Al parecer la url que ingreso no es una imagen o el servio no esta disponible")
        spinner.style.display = "none"
        document.getElementById("madurez").innerHTML = "-1"
        console.log(error)
    }
    
    
}

