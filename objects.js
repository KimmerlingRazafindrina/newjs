const etudiantliterals = {
    prenom : "Kim",
    nom : "Razafi",
    age : 27,
    modules : {
        module1 : "HTML",
        module2 : "Sass",
        module3 : "JS"
    },
    nomComplet: function(){
        return this.nom + ' ' + this.prenom;
    }
}


// constructeur

var etudiant = function(classe){
    this.classe = classe;
    this.prenom = "Marcellin",
    this.nom = "Willy",
    this.age = 34,
    nomComplet = function(){
        return this.nom + ' ' + this.prenom;
    }

}
// class animal -> couleur, taille, cri 
// Le chat, le chien

var etudiant1 = new etudiant('4em');
etudiant1.taille = 1.65;

console.log(etudiant1); 