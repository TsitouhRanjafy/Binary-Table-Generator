
# 🛠️ Générateur de Table Binaire CLI

## 📜 Description

Ce programme est un générateur de table binaire en ligne de commande. Il permet d'évaluer des expressions logiques et de générer automatiquement la table de vérité correspondante. [demo](https://web.facebook.com/share/v/16JKwbzxgj/)



## 🖋️ Syntax expression

$V_0  \theta_0 V_1 \theta_1 V_2 ... \theta_n V_i$

  - $V=$ {`a-z`} (variable)

  - $\theta=$ { `&`,`|`,`=>`,`<=>`} (opérateur)

 
## 🔍 Exemple


  - **exemple 1:**
    ```shell
    ✔ Entrer expression › p => q <=> ~p => ~q
      expression:  (p=>q<=>~p=>~q)
    ┌─────────┬───┬───┬────────┬────┬────┬──────────┬─────────┬─────┐
    │ (index) │ p │ q │ (p=>q) │ ~p │ ~q │ (~p=>~q) │ (Z<=>Y) │ (X) │
    ├─────────┼───┼───┼────────┼────┼────┼──────────┼─────────┼─────┤
    │ 0       │ 0 │ 0 │ 1      │ 1  │ 1  │ 1        │ 1       │ 1   │
    │ 1       │ 0 │ 1 │ 1      │ 1  │ 0  │ 0        │ 0       │ 0   │
    │ 2       │ 1 │ 0 │ 0      │ 0  │ 1  │ 1        │ 0       │ 0   │
    │ 3       │ 1 │ 1 │ 1      │ 0  │ 0  │ 1        │ 1       │ 1   │
    └─────────┴───┴───┴────────┴────┴────┴──────────┴─────────┴─────┘
    pseudo:
         Z  =  (p=>q)
         Y  =  (~p=>~q)
         X  =  (Z<=>Y)
         W  =  (X)
    ```
    - $V=$ {p,q} (variables)      
    - $\theta=$ {=>,<=>} (opérateurs)
      
    ![binaire1](https://github.com/user-attachments/assets/b44bd549-9985-4a20-abdf-0275fb7f31a4)

    

  - **exemple 2:**
    ```shell
    ✔ Entrer expression … ((r & p) | r) <=> ((r <=> p) & p | (o & ~p))
     expression:  (((r&p)|r)<=>((r<=>p)&p|(o&~p)))
    ┌─────────┬───┬───┬───┬───────┬─────┬────────┬─────┬───────┬─────┬───────┬─────┬─────┬───────┬─────┬─────┬─────┬─────────┬─────────┬─────┬─────┬─────┐
    │ (index) │ r │ p │ o │ (r&p) │ (p) │ (o&~p) │ (Z) │ (Y&p) │ (X) │ (W|r) │ (U) │ (S) │ (R|T) │ (Q) │ (r) │ (M) │ (N<=>L) │ (K<=>P) │ (J) │ (F) │ (E) │
    ├─────────┼───┼───┼───┼───────┼─────┼────────┼─────┼───────┼─────┼───────┼─────┼─────┼───────┼─────┼─────┼─────┼─────────┼─────────┼─────┼─────┼─────┤
    │ 0       │ 0 │ 0 │ 0 │ 0     │ 0   │ 0      │ 0   │ 0     │ 0   │ 0     │ 0   │ 0   │ 0     │ 0   │ 0   │ 0   │ 1       │ 0       │ 0   │ 0   │ 0   │
    │ 1       │ 0 │ 0 │ 1 │ 0     │ 0   │ 1      │ 0   │ 0     │ 1   │ 0     │ 0   │ 0   │ 1     │ 0   │ 0   │ 0   │ 1       │ 1       │ 1   │ 1   │ 1   │
    │ 2       │ 0 │ 1 │ 0 │ 0     │ 1   │ 0      │ 0   │ 1     │ 0   │ 0     │ 1   │ 0   │ 1     │ 0   │ 0   │ 0   │ 1       │ 1       │ 1   │ 1   │ 1   │
    │ 3       │ 0 │ 1 │ 1 │ 0     │ 1   │ 0      │ 0   │ 1     │ 0   │ 0     │ 1   │ 0   │ 1     │ 0   │ 0   │ 0   │ 1       │ 1       │ 1   │ 1   │ 1   │
    │ 4       │ 1 │ 0 │ 0 │ 0     │ 0   │ 0      │ 0   │ 0     │ 0   │ 1     │ 0   │ 1   │ 0     │ 1   │ 1   │ 1   │ 1       │ 0       │ 0   │ 0   │ 0   │
    │ 5       │ 1 │ 0 │ 1 │ 0     │ 0   │ 0      │ 0   │ 0     │ 0   │ 1     │ 0   │ 1   │ 0     │ 1   │ 1   │ 1   │ 1       │ 0       │ 0   │ 0   │ 0   │
    │ 6       │ 1 │ 1 │ 0 │ 1     │ 1   │ 0      │ 1   │ 1     │ 0   │ 1     │ 1   │ 1   │ 1     │ 1   │ 1   │ 1   │ 1       │ 1       │ 1   │ 1   │ 1   │
    │ 7       │ 1 │ 1 │ 1 │ 1     │ 1   │ 0      │ 1   │ 1     │ 0   │ 1     │ 1   │ 1   │ 1     │ 1   │ 1   │ 1   │ 1       │ 1       │ 1   │ 1   │ 1   │
    └─────────┴───┴───┴───┴───────┴─────┴────────┴─────┴───────┴─────┴───────┴─────┴─────┴───────┴─────┴─────┴─────┴─────────┴─────────┴─────┴─────┴─────┘
    
     pseudo:
             Z  =  (r&p)
             Y  =  (p)
             X  =  (o&~p)
             W  =  (Z)
             U  =  (Y&p)
             T  =  (X)
             S  =  (W|r)
             R  =  (U)
             Q  =  (S)
             P  =  (R|T)
             N  =  (Q)
             M  =  (r)
             L  =  (M)
             K  =  (N<=>L)
             J  =  (K<=>P)
             F  =  (J)
             E  =  (F)
             D  =  (E)
    ```
    - $V=$ {r,p,o} (variables)    
    - $\Theta=$ {&,|,<=>} (opérateurs)
      
    ![binaire2](https://github.com/user-attachments/assets/7271071b-80db-40f4-b1fe-3041ca2dd0fa)

## 📦 Installation

```shell
git clone https://github.com/TsitouhRanjafy/Binary-Table-Generator.git
cd Binary-Table-Generator
npm install
npm run start 
```

## 🤝 Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, n'hésitez pas à créer une issue ou une pull request.






  
  
