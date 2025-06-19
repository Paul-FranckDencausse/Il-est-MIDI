# Jouer une note MIDI en JavaScript

Ce projet propose une page HTML simple permettant de jouer une note MIDI (Do4) sur un périphérique MIDI connecté, en utilisant l’API Web MIDI.

## Fonctionnalités

- Interface web avec un bouton pour jouer une note MIDI.
- Affichage de l’état de la connexion MIDI.
- Utilisation de l’API Web MIDI (compatible Chrome).

## Utilisation

1. **Prérequis** :  
   Utilisez un navigateur compatible avec l’API Web MIDI (Google Chrome recommandé).  
   Connectez un périphérique MIDI à votre ordinateur.

2. **Lancement** :  
   Ouvrez le fichier `midi-note.html` dans votre navigateur.

3. **Jouer une note** :  
   Cliquez sur le bouton **Jouer Do4** pour envoyer la note MIDI au périphérique connecté.

## Fichiers

- `midi-note.html` : page HTML principale avec le script JavaScript et le style CSS.

## Remarques

- Si aucun périphérique MIDI n’est détecté, un message d’erreur s’affichera.
- L’API Web MIDI n’est pas supportée par tous les navigateurs.

## Références

- [Web MIDI API sur MDN](https://developer.mozilla.org/fr/docs/Web/API/Web_MIDI_API)