<?php
//récupération des données du formulaire
$nom = htmlspecialchars($_POST['nom']);
$prenom = htmlspecialchars($_POST['prenom']);
$dateNaissance = htmlspecialchars($_POST['dateNaissance']);
$email = htmlspecialchars($_POST['email']);
$codeConfidentiel = htmlspecialchars($_POST['codeConfidentiel']);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (
        isset($_POST['nom']) && !empty(trim($_POST['nom']))
        && isset($_POST['prenom']) && !empty(trim($_POST['prenom']))
        && isset($_POST['dateNaissance']) && !empty(trim($_POST['dateNaissance']))
        && isset($_POST['email']) && !empty(trim($_POST['email']))
        && isset($_POST['codeConfidentiel']) && !empty(trim($_POST['codeConfidentiel']))
    ) {
        echo " <h2> voici les information du formulaire </h2> <br>" .
            "<h4>" . $nom . "<br>" .
            $prenom . "<br> " .
            $dateNaissance . "<br>" .
            $email . "<br>" .
            $codeConfidentiel . "</h4>";
    } else {
        header("Location: index.php");
    }
} else {
    header("Location: index.php");
    exit;
}
