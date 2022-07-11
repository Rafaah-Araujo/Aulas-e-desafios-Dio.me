// Como podemos melhorar o esse código usando TS? 

interface pessoas{
    nome: string;
    idade: number;
    profissao: string;
}

let pessoa1: pessoas = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"   
};


let pessoa2: pessoas = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
}

let pessoa3: pessoas = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4: pessoas = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}

//--------------------------------------------------

enum profissao {
    P = "Padeiro",
    A = "Atriz"
}

let pessoa5 = {
nome: "maria",
idade: 29,
profissao: profissao.A};

let pessoa6 = {
nome: "roberto",
idade: 19,
profissao: profissao.P};

let pessoa7 = {
    nome: "laura",
    idade: "32",
    profissao: profissao.A
};

let pessoa8 = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.P
}