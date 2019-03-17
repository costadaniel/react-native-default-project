# React Native Default Project

Projeto padrão do React Native, com alguns pacotes adicionais pré-instalados e configurados para facilitar a criação de projetos futuros.

## Pacotes Adicionais

- [EditorConfig](https://editorconfig.org/)
- [Reactotron](https://github.com/infinitered/reactotron)
- [ESLint](https://eslint.org/)
- [Babel-ESLint](https://github.com/babel/babel-eslint)
- [React Developer Tools](https://github.com/facebook/react-devtools)

> Obs: Todos os pacotes foram adicionados como dependências de desenvolvimento.

## Configurações Adicionais

Caso você esteja utilizando o VS Code você vai precisar instalar algumas extensões nele como:

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Após a adição das extensões, você deve alterar o arquivo de configurações do seu VS Code e adicionar estas propriedades:

    "editor.formatOnSave": true,
    "prettier.eslintIntegration": true,

## Instruções de Uso

1.  Clone ou baixe os arquivos do repositório (pode ser [aqui](https://github.com/costadaniel/react-native-default-project/archive/master.zip))
1.  Copie a pasta "rndp" para onde você quiser
1.  Renomeie o projeto para o nome desejado editando o _"name"_ e _"displayName"_ no arquivo "app.json"
1.  Dentro dela dê os seguintes comandos
    1. `yarn`
    1. `react-native eject`
1.  Rode o projeto usando `react-native run-android` ou `react-native run-ios`

> Caso o seu o nome do seu aplicativo tenha espaços, [aqui](https://stackoverflow.com/questions/38548898/how-to-add-space-in-react-native-application-name) tem um breve tutorial de como você pode renomear ele.
