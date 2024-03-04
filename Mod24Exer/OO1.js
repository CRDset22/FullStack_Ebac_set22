function Pessoa(nome, idade, cor, genero) {
    // Atributos privados
    let _nome = nome;
    let _idade = idade;
    let _cor = cor;
    let _genero = genero;

    // Getters e setters
    this.getNome = function() { return _nome; };
    this.setNome = function(nome) { _nome = nome; };
    this.getIdade = function() { return _idade; };
    this.setIdade = function(idade) { _idade = idade; };
    this.getCor = function() { return _cor; };
    this.setCor = function(cor) { _cor = cor; };
    this.getGenero = function() { return _genero; };
    this.setGenero = function(genero) { _genero = genero; };

    
}

const johnSmith = new Pessoa("John Smith",35,"branca","masculino");
const monicaCurie = new Pessoa("Monica Curie",54,"branca","feminino");
const nelsonMandela = new Pessoa("Nelson Mandela",79,"negra","masculino");
//console.log("nome = "+johnSmith.getNome()+", ","idade = " + johnSmith.getIdade()+", ","cor = " +  johnSmith.getCor()+", ","genero = " + johnSmith.getGenero());
//console.log("nome = "+monicaCurie.getNome()+", ","idade = " + monicaCurie.getIdade()+", ","cor = " +  monicaCurie.getCor()+", ","genero = " + monicaCurie.getGenero());
//console.log("nome = "+nelsonMandela.getNome()+", ","idade = " + nelsonMandela.getIdade()+", ","cor = " +  nelsonMandela.getCor()+", ","genero = " + nelsonMandela.getGenero());
    


function Funcionario(nome, idade, cor, genero, participacaoLucros, nivel, experiencia) {
    // Herança da classe Pessoa
    Pessoa.call(this, nome, idade, cor, genero);

    // Atributos privados
    let _participacaoLucros = participacaoLucros;
    let _nivel = nivel;
    let _experiencia = experiencia;

    // Getters e setters
    this.getParticipacaoLucros = function() { return _participacaoLucros; };
    this.setParticipacaoLucros = function(participacaoLucros) { _participacaoLucros = participacaoLucros; };
    this.getNivel = function() { return _nivel; };
    this.setNivel = function(nivel) { _nivel = nivel; };
    this.getExperiencia = function() { return _experiencia; };
    this.setExperiencia = function(experiencia) { _experiencia = experiencia; };//anos

}

const Func_Smith = new Funcionario("John Smith",35,"branca","masculino", "10%", 5, 8);
const Func_Curie = new Funcionario("Monica Curie",54,"branca","feminino", "11%", 7, 14);
const Func_Mandela = new Funcionario("Nelson Mandela",79,"negra","masculino", "10%", 6, 15);
//console.log("nome = "+Func_Smith.getNome()+", ","idade = " + Func_Smith.getIdade()+", ","cor = " +  Func_Smith.getCor()+", ","genero = " + Func_Smith.getGenero()+", ","participacaoLucros = " + Func_Smith.getParticipacaoLucros()+", ","nivel = " + Func_Smith.getNivel()+", ", "experiencia = " + Func_Smith.getExperiencia());
//console.log("nome = "+Func_Curie.getNome()+", ","idade = " + Func_Curie.getIdade()+", ","cor = " +  Func_Curie.getCor()+", ","genero = " + Func_Curie.getGenero(),"participacaoLucros = " + Func_Curie.getParticipacaoLucros(),"nivel = " + Func_Curie.getNivel(), "experiencia = " + Func_Curie.getExperiencia());
//console.log("nome = "+Func_Mandela.getNome()+", ","idade = " + Func_Mandela.getIdade()+", ","cor = " +  Func_Mandela.getCor()+", ","genero = " + Func_Mandela.getGenero(),"participacaoLucros = " + Func_Mandela.getParticipacaoLucros(),"nivel = " + Func_Mandela.getNivel(), "experiencia = " + Func_Mandela.getExperiencia());




function Cargo(nome, idade, cor, genero, participacaoLucros, nivel, experiencia,cargo, setor, chefe, aumentoAnual, salario) {
    // Herança da classe Funcionario
    Funcionario.call(this, nome, idade, cor, genero, participacaoLucros, nivel, experiencia);

    // Atributos privados
    var _cargo = cargo
    var _setor = setor;
    var _chefe = chefe;
    var _aumentoAnual = aumentoAnual;
    var _salario = salario;
    var _aumentoAnual = aumentoAnual;


    // Getters e setters
    this.getCargo = function() { return _cargo; };
    this.setCargo = function(cargo) { _cargo = cargo; };
    this.getSetor = function() { return _setor; };
    this.setSetor = function(setor) { _setor = setor; };
    this.getChefe = function() { return _chefe; };
    this.setChefe = function(chefe) { _chefe = chefe; };
    this.getAumentoAnual = function() { return _aumentoAnual; };
    this.setAumentoAnual = function(aumentoAnual) { _aumentoAnual = aumentoAnual; };//(%)
    this.getSalario = function() { return _salario; };
    this.setSalario = function(salario) { _salario = salario; };



    this.baterPonto = function() {
        console.log("bater ponto");
    };

    this.dizerOi = function() {
        console.log("Olá");
    };

    this.aumentoReal = function() {
        return this.getSalario() * (this.getAumentoAnual() / 100);
    };
}

const Smith_Setor = new Cargo("John Smith",35,"branca","masculino", "10%", 5, 8,"Engenheiro de Software", "TI", "Osbaldo",8, 14000);
console.log("nome = "+Smith_Setor.getNome()+", ","idade = " + Smith_Setor.getIdade()+", ","cor = " +  Smith_Setor.getCor()+", ","genero = " + Smith_Setor.getGenero()+", ","participacaoLucros = " + Smith_Setor.getParticipacaoLucros()+", ","nivel = " + Smith_Setor.getNivel()+", ", "experiencia = " + Smith_Setor.getExperiencia()+", ", "cargo = " + Smith_Setor.getCargo()+", ", "setor = " + Smith_Setor.getSetor()+", ", "chefe = " + Smith_Setor.getChefe()+", ", "aumento anual = " + Smith_Setor.getAumentoAnual()+", ", "salário = " + Smith_Setor.getSalario()+", ",Smith_Setor.aumentoReal());

const Setor_Monica = new Cargo("Monica Curie",54,"branca","feminino", "11%", 7, 14,"Analista de Sistema","TI","Osbaldo",14,15000);
console.log("nome = "+Setor_Monica.getNome()+", ","idade = " + Setor_Monica.getIdade()+", ","cor = " +  Setor_Monica.getCor()+", ","genero = " + Setor_Monica.getGenero()+", ","participacaoLucros = " + Setor_Monica.getParticipacaoLucros()+", ","nivel = " + Setor_Monica.getNivel()+", ", "experiencia = " + Setor_Monica.getExperiencia()+", ", "cargo = " + Setor_Monica.getCargo()+", ", "setor = " + Setor_Monica.getSetor()+", ", "chefe = " + Setor_Monica.getChefe()+", ", "aumento anual = " + Setor_Monica.getAumentoAnual()+", ", "salário = " + Setor_Monica.getSalario()+", ",Setor_Monica.aumentoReal());

const Setor_Mandela = new Cargo("Nelson Mandela",79,"negra","masculino", "10%", 6, 15,"Gerente RH","ADM","Asnésio",15,15000);
console.log("nome = "+Setor_Mandela.getNome()+", ","idade = " + Setor_Mandela.getIdade()+", ","cor = " +  Setor_Mandela.getCor()+", ","genero = " + Setor_Mandela.getGenero()+", ","participacaoLucros = " + Setor_Mandela.getParticipacaoLucros()+", ","nivel = " + Setor_Mandela.getNivel()+", ", "experiencia = " + Setor_Mandela.getExperiencia()+", ", "cargo = " + Setor_Mandela.getCargo()+", ", "setor = " + Setor_Mandela.getSetor()+", ", "chefe = " + Setor_Mandela.getChefe()+", ", "aumento anual = " + Setor_Mandela.getAumentoAnual()+", ", "salário = " + Setor_Mandela.getSalario()+", ",Setor_Mandela.aumentoReal());
