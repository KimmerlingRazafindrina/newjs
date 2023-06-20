var famille = function(nom, prenom, annee){
    this.nom = nom;
    this.prenom = prenom;
    this.annee = annee; 
    this.nomComplet = function(){
        return this.nom + ' ' + this.prenom;
    }
    this.age = function(){
        const d = new Date();
        return d.getFullYear() - this.annee;
    }
}

var mere = new famille('Madeleine', 'Jeanne', 1967);
console.log(mere.age());