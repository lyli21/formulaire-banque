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

    // séparateurs
    dateNaissance.addEventListener('input', function () {
        this.value = this.value.replace(/[.\- ]/g, '/');
    });

    // Validation des champs
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

    // Gestion du formulaire à la soumission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let valide = true;

        // Réinitialiser les messages d'erreur
        Object.values(erreurs).forEach(erreur => erreur.textContent = '');

        // Validation Nom
        if (!validerNomPrenom(nom.value)) {
            erreurs.nom.textContent = 'Nom invalide (min. 3 caractères alphabétiques).';
            valide = false;
        }

        // Validation Prénom
        if (!validerNomPrenom(prenom.value)) {
            erreurs.prenom.textContent = 'Prénom invalide (min. 3 caractères alphabétiques).';
            valide = false;
        }

        // Validation Date de Naissance
        if (!validerDateNaissance(dateNaissance.value)) {
            erreurs.dateNaissance.textContent = 'Date invalide (format JJ/MM/AAAA).';
            valide = false;
        }

        // Validation Email
        if (!validerEmail(email.value)) {
            erreurs.email.textContent = 'Email invalide.';
            valide = false;
        }

        // Validation Code Confidentiel
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
