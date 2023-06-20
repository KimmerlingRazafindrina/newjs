const etudiant = {
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
console.log(etudiant.nomComplet()); 
