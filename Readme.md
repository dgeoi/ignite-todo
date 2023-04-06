# ToDo

Projeto realizado como desafio do Módulo 1 na trilha ReactJS do curso Ignite, ministrado pelo Diego Fernandes @Rocketseat.
Esse projeto tem como objetivo testar o conhecimento adquirido no decorrer do mesmo.
Foram abordados assuntos como:
> Componentes
> Ciclo de vida de um componente
> Estado
> Propriedade
> Imutabilidade
> TypeScript

## O que é o projeto?
O projeto tem uma premissa simples: uma lista de tarefa. A qual precisa ser capaz de criar, marcar como feita e deletar tarefas.

## Design
O design foi disponibilizado pela Rocketseat, afinal, somos apenas desenvolvedores hehe :D
A designer responsável foi a queridíssima Millena Kupsinskü Martins @millenakmartins.

## Quais as tecnologias utilizadas?
O projeto foi criado utilizando Vite.
O framework utilizado foi o ReactJS, utilizando TypeScript como linguagem.

### Demais bibliotecas
Phosphor Icons
ESLint

## Problemáticas & Considerações
- Achei o projeto bem completo para testar o conhecimento adquirido no primeiro módulo, que é uma introdução ao framework. Claro que tiveram alguns desafios a mais, mas nada que seja impossível.
- Meu cérebro estava coçando para criar um contexto, mas acredito que ia fugir demais da premissa do desafio. Ficaria organizado, em contrapartida, traria uma complexidade desnecessária considerando o tamanho do projeto, como o Diego diz: "Evitem otimizações prematuras".
- Sobre a checkbox de cada tarefa: resolvi por fazer dessa forma porque a estilização do ```html <input type="checkbox" /> ``` é extremamente limitada. Não sei se existe alguma biblioteca que poderia resolver o meu problema (se tiver, por favor me avise). Fiz testes utilizando o Input, mas o check no meio sumia, pesquisei alguma alternativa e a folha de estilo para colocar ele novamente era muito complexa. Considerando que ele não precisa estar necessariamente dentro de um formulário, creio não ter problema algum.
- Sobre o uso do memo e useCallback: fiz testes utilizando o profiler (React DevTools) para checar o tempo de renderização dos componentes com e sem o uso dos hooks, e o uso dos hooks teve o menor tempo de renderização, portanto, mais performático. Afinal, ao digitar um caractere para adicionar uma nova tarefa, o componente App era re-renderizado (estou utilizando um State para salvar o que foi escrito pelo usuário), consequentemente causando uma renderização dos seus filhos (TaskList e Task). E a critério de informação... O maior tempo de renderização vinha dos ícones.