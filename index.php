<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire banquaire ECF</title>
    <link rel="stylesheet" href="style/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>

    <h1> Formulaire d'Identification</h1>

    <form name="form" action="page1.php" method="POST">

        <div id="css1">
            <label for="nom">Votre Nom :</label>
            <input type="text" id="nom" name="nom" required>
            <span id="nomErreur" class="messageErreur"></span>
        </div>
        <br><br>

        <div id="css1">
            <label for="prenom">Votre Prénom : </label>
            <input type="text" id="prenom" name="prenom" required>
            <span id="prenomErreur" class="messageErreur"></span>
        </div>
        <br><br>

        <div id="css1">
            <label for="dateNaissance">Votre date de naissance :</label>
            <input type="text" id="dateNaissance" name="dateNaissance"  required  placeholder="JJ/MM/AAAA">
            <span id="dateErreur" class="messageErreur"></span>
        </div>
        <br><br>
        <div id="css1">
            <label for="email">Votre Email :</label>
            <input type="text" id="email" name="email" required>
            <span id="emailErreur" class="messageErreur"></span>
        </div>
        <br><br>
        <div id="css1">
            <label for="codeCondidentiel">Votre code condidentiel :</label>
            <input type="text" id="codeConfidentiel" name="codeConfidentiel" required placeholder="FR12345ABCx">
            <span id="codeErreur" class="messageErreur"></span>
        </div>
<br><br>
        <div id="css">
            <input type="submit" class="color">
            <button type="button" class="color">Annuler</button>
        </div>
    </form>
    <!-- Modale Bootstrap -->
    <div class="modal fade" id="confirmationModal" tabindex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="confirmationModalLabel">Confirmation</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Vos informations seront transmises au serveur pour traitement.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>

   
    <script src="script/script.js"></script>
</body>
</html>