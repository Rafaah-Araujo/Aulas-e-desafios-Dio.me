let employee: {code: number, name: string} = {
    code: 10,
    name: "John",
}

console.log(employee)

//-------ou--------

interface parameter{
    Code: number,
    Name: string
}


function funcionario(profissinal: parameter){
    return console.log("Code: ", profissinal.Code, "Name: ", profissinal.Name)
}

funcionario({Code: 10, Name: "John"})
