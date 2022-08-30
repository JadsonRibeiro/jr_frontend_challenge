# NextJS Challenge

## Inicializando o projeto
1. Clonar repositorio
```
git clone https://github.com/worklab1/jr_frontend_challenge.git
``` 
2. Instalar dependencias 
```
cd jr_frontend_challenge
yarn
```
3. Executar projeto
```
yarn dev
```

## Consumir API do Github
[ ] página / - pesquisa por usuário e mostrar seus dados em tela. Mostra link para próxima página
  - recurso https://api.github.com/users/{username}
  - deve ter um input para informar o username e um botão. Ao clicar no botão deve aparecer abaixo as informações da resposta

[ ] página /repos/[userName] - lista os repositorios de um usuário
  - recurso https://api.github.com/users/{username}/repos

### Libs
- axios - para requests
- react-toastify - para toasts de notificações de erro
- styled-components - para estilização

### Enviando alterações
- Para enviar suas alterações, [crie uma Pull Request](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
