document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const dateNaissance = document.getElementById('dateNaissance');
    const email = document.getElementById('email');
    const codeConfidentiel = document.getElementById('codeConfidentiel');

    const erreurs = {
        nom: document.getElementById('nomErreur'),
        prenom: document.getElementById('prenomErreur'),
        dateNaissance: document.getElementById('dateErreur'),
        email: document.getElementById('emailErreur'),
        codeConfidentiel: document.getElementById('codeErreur'),
    };

    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    const boutonAnnuler = document.querySelector('button[type="button"]');

    // Nom en majuscule auto
    nom.addEventListener('input', function () {
        this.value = this.value.toUpperCase();
    });

    // Prénom premiere lettre en majuscule, le reste en minuscule
    prenom.addEventListener('input', function () {
        this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1).toLowerCase();
    });

    // Format de date avec slashs automatiques
    dateNaissance.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, ''); // Garde uniquement les chiffres
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2);
        }
        if (value.length >= 5) {
            value = value.substring(0, 5) + '/' + value.substring(5);
        }
        this.value = value.substring(0, 10);
    });

    // Validation au blur pour chaque champ
    function validateField(element, validationFn, errorMessage) {
        element.addEventListener('blur', function() {
            if (!this.value) {
                erreurs[element.id].textContent = 'Ce champ est requis';
            } else if (!validationFn(this.value)) {
                erreurs[element.id].textContent = errorMessage;
            } else {
                erreurs[element.id].textContent = '';
            }
        });
    }

    // Fonctions de validation
    function validerNomPrenom(valeur) {
        const regex = /^[a-zà-ÿ]{3,}$/i;
        return regex.test(valeur.trim());
    }

    function validerDateNaissance(valeur) {
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
        return regex.test(valeur.trim());
    }

    function validerEmail(valeur) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(valeur.trim());
    }

    function validerCodeConfidentiel(valeur) {
        const regex = /^FR\d{5}[A-Z._-]{3}x$/;
        return regex.test(valeur.trim());
    }

    // Ajout des validations au blur
    validateField(nom, validerNomPrenom, 'Nom invalide (min. 3 caractères alphabétiques).');
    validateField(prenom, validerNomPrenom, 'Prénom invalide (min. 3 caractères alphabétiques).');
    validateField(dateNaissance, validerDateNaissance, 'Date invalide (format JJ/MM/AAAA).');
    validateField(email, validerEmail, 'Email invalide.');
    validateField(codeConfidentiel, validerCodeConfidentiel, 'Code invalide (format : FR + 5 chiffres + 3 lettres/caractères spéciaux + x).');

    // Gestion du formulaire à la soumission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.submit();
        let valide = true;

        // Réinitialiser les messages d'erreur
        Object.values(erreurs).forEach(erreur => erreur.textContent = '');

        // Vérification de tous les champs
        if (!validerNomPrenom(nom.value)) {
            erreurs.nom.textContent = 'Nom invalide (min. 3 caractères alphabétiques).';
            valide = false;
        }

        if (!validerNomPrenom(prenom.value)) {
            erreurs.prenom.textContent = 'Prénom invalide (min. 3 caractères alphabétiques).';
            valide = false;
        }

        if (!validerDateNaissance(dateNaissance.value)) {
            erreurs.dateNaissance.textContent = 'Date invalide (format JJ/MM/AAAA).';
            valide = false;
        }

        if (!validerEmail(email.value)) {
            erreurs.email.textContent = 'Email invalide.';
            valide = false;
        }

        if (!validerCodeConfidentiel(codeConfidentiel.value)) {
            erreurs.codeConfidentiel.textContent = 'Code invalide (format : FR + 5 chiffres + 3 lettres/caractères spéciaux + x).';
            valide = false;
        }

        // Si tout est valide, afficher la modale
        if (valide) {
            confirmationModal.show();
        }
    });

    // Réinitialisation du formulaire
    boutonAnnuler.addEventListener('click', function () {
        form.reset();
        Object.values(erreurs).forEach(erreur => erreur.textContent = '');
    });
});