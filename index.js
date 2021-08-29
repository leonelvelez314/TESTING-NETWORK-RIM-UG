const onConsultarApi = async ()=>{
    try
    {

    }catch(error){
        console.log("")
    }
    const input = document.getElementById("url")    
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
    document.getElementById("madurez").innerHTML = content.respuesta
    
}