
# 🛠️ Générateur de Table Binaire CLI

## 📜 Description

Ce programme est un générateur de table binaire en ligne de commande. Il permet d'évaluer des expressions logiques et de générer automatiquement la table de vérité correspondante.

## 🖋️ Syntax expression

$V_0 \theta V_1 \theta V_2 ... \theta V_i$

  - $V=$ variable = `a-z` ou/et `A-Z`

  - $\theta=$ opérateur  { `&` (ET), `|` (OU), `=>` (IMPLICATION), `<=>` (ÉQUIVALENCE) }

 
## 🔍 Exemple

- expression:

  - input:
  ```shell
  p => q <=> ~p => ~q
  ```
  $V=$ {p,q}

  $\theta=$ {=>,<=>}
  - output:
![1](https://github.com/user-attachments/assets/f42fd679-3a7c-499b-bb39-7d6d05d95754)

  

- expression:

  - input:
  ```shell
  ((r & p) | r) <=> ((r <=> p) & p | (o & ~p))
  ```
  $V=$ {r,p,o}

  $\Theta=$ {&,|,<=>}

  - output:
  ![2](https://github.com/user-attachments/assets/1b2046bb-d68b-4b26-9a97-c226f18a98f4)



## 📦 Installation

```shell
git clone https://github.com/TsitouhRanjafy/Binary-Table-Generator.git
cd Binary-Table-Generator
npm install
npm run start 
```

- aper

## 🤝 Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, n'hésitez pas à créer une issue ou une pull request.






  
  
