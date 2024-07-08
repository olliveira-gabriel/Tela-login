function Enviar(){

    
    let emailUsuario = document.getElementById("Email").value
    let senhaUsuario = document.getElementById("Senha").value
    let sexoUsuario = document.querySelector("input[name='sexo']:checked").value
    
    alert(`Seu email é: ${emailUsuario}\n Sua senha é: ${senhaUsuario}\nSeu genero é ${sexoUsuario}`)
    
    
    
    
}
    