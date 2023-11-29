# software-catalog-utfpr-gp

Este projeto tem como objetivo auxiliar no cadastro de softwares que serão utilizados nas aulas da UTFPR-GP.

O frontend da aplicação está sendo desenvolvido com Angular, Tailwind CSS e DaisyUI, e - a título de estudo - será implementado banco de dados MongoDB.

## Instrução para execução

- Após descompactar o projeto, entrar através do terminal no diretório /backend/
- Utilizar "npm i" para instalar as dependências
- Dentro do diretório /backend/, exercutar o comando: npx ts-node src/server.ts
- Entrar através do terminal no diretório /frontend/
- Utilizar "npm i" para instalar as dependências
- Executar o comando "ng serve"

## Endereço de Deploy

https://adnir-andrade.github.io/software-catalog-utfpr-gp/

## Protótipo

[Figma](https://www.figma.com/proto/eBYTusD77cIX8OTMMVfRoK/Projeto-Web-Dev-III?type=design&node-id=94-517&t=VXDvWgVTvlyD9Z0p-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A104&mode=design)

## Checklist

#### RA1 - Prototipar e projetar interfaces gráficas de usuário, considerando princípios de usabilidade e experiência do usuário.

- [x] ID1: O aluno desenvolveu protótipos de interfaces que demonstram compreensão das diretrizes de usabilidade.
- [x] ID2: O aluno projetou interfaces responsivas que se adaptam a diferentes tamanhos de tela.

#### RA2 - Criar e reutilizar componentes em frameworks frontend, desenvolvendo interfaces modulares, responsivas e estilizadas.

- [x] ID3: O aluno desenvolveu componentes reutilizáveis que são aplicáveis em diferentes contextos da aplicação, garantindo que se adaptem de maneira responsiva em vários tamanhos de tela.
- [x] ID4: O aluno incorporou componentes de frameworks CSS para aprimorar a aparência e funcionalidade da aplicação de maneira consistente.
      // Tailwind com DaisyUI
- [x] ID5: O aluno aplicou diretivas estruturais para renderizar elementos de forma condicional, permitindo a exibição ou ocultação de conteúdo com base em condições dinâmicas.
      // ng-if na listagem de softwares
- [x] ID6: O aluno utilizou diretivas estruturais para repetir elementos de interface de maneira dinâmica, a fim de criar listas, galerias ou outras visualizações baseadas em conjuntos de dados.
      // ng-for em quase todas as paginas
- [x] ID7: O aluno aplicou Pipes de maneira eficaz para formatar a apresentação de dados, garantindo que as informações exibidas sejam legíveis, esteticamente agradáveis e atendam aos requisitos de apresentação específicos para cada contexto.
      // Filtragem da Date() que vem no banco de dados para mostrar apenas data

#### RA3 - Sincronizar dados entre a interface gráfica e o modelo de dados, aplicando técnicas de binding para manter a consistência.

- [x] ID8: O aluno demonstrou a compreensão e a aplicação de técnicas de one-way data binding, como Interpolation e Property Binding, para exibir e atualizar dados na interface gráfica de maneira unidirecional.
      // Utilizado em varios momentos para mudar titulo dos componentes
- [x] ID9: O aluno demonstrou a aplicação de técnicas de event binding para capturar eventos do usuário na interface e interagir com o modelo de dados, mantendo a consistência e a sincronização entre os dois.
      // Utilizado no formulario e exibicao de software

- [x] ID10: O aluno implementou a técnica de two-way data binding para criar uma sincronização bidirecional automática entre a interface e o modelo de dados, permitindo uma atualização eficiente dos dados em ambos os lados.
      // utilizado no formulario ngmodel e FormsModule
- [x] ID11: O aluno fez uso eficaz de variáveis de template para manipulação dinâmica dos dados na interface gráfica, demonstrando a capacidade de exibir informações de maneira flexível e adaptável.
      // Varios momentos

#### RA4 - Implementar comunicação eficaz entre componentes, utilizando padrões de comunicação e serviços para compartilhar lógica e dados.

- [x] ID12: O aluno criou comunicação entre componentes não relacionados hierarquivamente por meio de serviços através do mecanismo de injeção de dependência, compartilhando lógica ou informações.
      // Injetado informacoes em Lista de Software adquira do forms e do background
- [x] ID13: O aluno utilizou efetivamente as diretivas @Input e/ou @Output para estabelecer uma comunicanção em uma hierarquia de componentes, passando e recebendo dados entre componentes de maneira segura e consistente.

#### RA5 - Criar interfaces de navegação intuitivas e responsivas, implementando roteamento em aplicações de página única (SPA).

- [x] ID14: O aluno configurou rotas para diferentes partes da aplicação, permitindo a navegação entre páginas distintas.
- [x] ID15: O aluno demonstrou a habilidade de passar dados entre componentes que representam diferentes telas usando parâmetros de rotas, garantindo uma troca eficiente de informações.
- [x] ID16: O aluno criou uma estrutura de navegação aninhada para representar hierarquias de conteúdo.
- [ ] ID17: O aluno aplicou guardas de rotas para controlar o acesso a rotas específicas da aplicação, assegurando que somente usuários autorizados possam acessar determinadas partes da interface.

#### RA6 - Realizar requisições assíncronas para serviços web, compreendendo os protocolos e formatos de troca de dados, tratando respostas e erros.

- [x] ID18: O aluno fez requisições assíncronas a uma API simulada, compreendendo os protocolos HTTP e formatos de dados para as operações GET, POST, PUT, PATCH e DELETE.
- [x] ID19: O aluno tratou respostas de sucesso e erros das requisições assíncronas de forma apropriada.
- [x] ID20: O aluno aplicou validações de entrada nos campos do formulário, utilizando técnicas como expressões regulares (REGEX), e apresentou mensagens de erro claras e informativas para auxiliar os usuários a corrigir entradas incorretas.
- [x] ID21: O aluno desabilitou adequadamente o botão de submit enquanto o formulário continha campos inválidos, promovendo uma experiência de usuário mais intuitiva e evitando a submissão de dados incorretos.
- [x] ID22: O aluno demonstrou a capacidade de utilizar Promises e Observables para tratar respostas assíncronas.

#### RA7 - Efetuar o build e deploy da aplicação em ambientes de produção.

- [x] ID23: Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [x] ID24: O aluno planejou, configurou e executou o processo de build da aplicação, preparando-a para produção e realizou o deploy em um ambiente de hospedagem, tornando-a prontamente acessível para uso.

#### RA8 - Gerenciar o código-fonte de maneira eficiente, implementar boas práticas de controle de versão e colaborar em projetos de desenvolvimento.

- [x] ID25: O aluno criou um repositório no GitHub utilizando a estrutura do Gitflow, estabelecendo as branches "main" e "develop", demonstrando proficiência em boas práticas de controle de versão e organização do projeto.
- [x] ID26: O aluno colaborou de maneira efetiva com outros membros do projeto, realizando fusões (merges) e resolução de conflitos de código de forma adequada e alinhada às práticas de desenvolvimento colaborativo.
