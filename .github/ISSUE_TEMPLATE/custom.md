---
name: Custom issue template
about: Describe this issue template's purpose here.
title: ''
labels: ''
assignees: ''

---

name: "📝 Test Case Template"
description: "Détaillez les étapes nécessaires pour effectuer un cas de test spécifique dans l'application OSRD."
title: "[TEST]"
labels:
  - kind:test-case

body:
  - type: markdown
    attributes:
      value: |
        Merci de prendre le temps de remplir ce modèle de cas de test! Veuillez fournir des étapes détaillées et les résultats attendus pour garantir un test approfondi.

  - type: textarea
    id: description
    attributes:
      label: "Description"
      description: |
        "Brève description de ce que ce cas de test est censé vérifier."
      placeholder: "e.g., Ce cas de test vérifie la création d'une étude."
    validations:
      required: true

  - type: textarea
    id: preconditions
    attributes:
      label: "Préconditions"
      description: |
        "Listez toutes les conditions ou configurations qui doivent être réalisées avant d'exécuter ce cas de test."
      placeholder: "e.g., Les points remarquables sont bien importés."
    validations:
      required: false

  - type: textarea
    id: test_data
    attributes:
      label: "Données de test"
      description: |
        "Spécifiez les valeurs de données nécessaires pour exécuter ce test."
      placeholder: "e.g., Matériel roulant: TGV"
    validations:
      required: false

  - type: textarea
    id: steps_and_results
    attributes:
      label: "Étapes et résultats attendus"
      description: |
        "Veuillez entrer les étapes du cas de test et leurs résultats attendus en utilisant le format de tableau Markdown ci-dessous. Numérotez chaque étape et spécifiez clairement le résultat attendu pour chaque étape dans la ligne correspondante. Ce format aide à organiser les informations clairement et les rend plus lisibles pour tous.
        
        **Guide de tableau Markdown:** Utilisez | pour séparer les colonnes et - pour créer les en-têtes. Un exemple est fourni ci-dessous.
        
        ```
        | Étape | Résultat attendu |
        |-------|-------------------|
        | Détail de l'étape ici | Résultat attendu ici |
        ```

        Veuillez remplacer le contenu de l'espace réservé par les étapes spécifiques et les résultats attendus pour votre cas de test."
      placeholder: |
        | Étape | Résultat attendu |
        |-------|-------------------|
        | Exemple : Naviguer vers la section spécifiée de l'application. | La page ou section appropriée se charge avec succès. |
        | Ajouter plus de lignes selon les besoins pour chaque étape et son résultat attendu. | Résultat attendu correspondant à l'étape. |
    validations:
      required: true

  - type: textarea
    id: notes
    attributes:
      label: "Notes"
      description: |
        "Toute information supplémentaire que les testeurs doivent connaître, telle que des configurations spéciales, des instructions spécifiques à l'environnement, etc."
      placeholder: "ex., Ce test ne peut être lancé que sur l'environnement de recette."
    validations:
      required: false
