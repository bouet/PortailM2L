var db = require('../databases/db.js');

exports.affr_create = function(req, res) {
    res.render('prestations/affranchissements')
};

exports.repr_create = function(req, res) {
    res.render('prestations/reproductions')
};


exports.affr_store = function(req, res) {
    var nom = req.body.nom;
    var adresse = req.body.adresse;
    var ville = req.body.ville;
    var cp = req.body.cp;
    var courriel = req.body.courriel;
    var id = 7;

    const query =  {
        name: 'enregistrer-affranchissement',
        text: 'INSERT INTO ligue (id, nom, cp, ville, courriel, adresse) VALUES ($1, $2, $3, $4, $5, $6)',
        values: [id, nom, cp, ville, courriel, adresse]
    };

    db.get().query(query, function(err, result){
        if (err) {
            console.log(err.stack);
            res.send('ERROR');
        } else {
            res.redirect('../../');
        }
    });

};