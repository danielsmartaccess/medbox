/medbox-project
│
├── /frontend               # Código da aplicação mobile
│   ├── /src
│   │   ├── /components     # Componentes reutilizáveis do app
│   │   ├── /screens        # Telas principais do app
│   │   ├── /services       # Comunicação com API e lógica de negócios
│   │   ├── /assets         # Imagens, ícones, fontes
│   │   └── App.js          # Arquivo principal do app
│   └── package.json        # Dependências e scripts do projeto mobile
│
├── /backend                # Código do servidor (API e banco de dados)
│   ├── /src
│   │   ├── /controllers    # Controladores das rotas da API
│   │   ├── /models         # Modelos de dados (ex.: Mongoose, SQL)
│   │   ├── /routes         # Definições de rotas
│   │   ├── /services       # Lógica de negócio e integrações
│   │   ├── /config         # Arquivos de configuração (ex.: .env)
│   │   └── app.js          # Arquivo principal do back-end
│   ├── /tests              # Testes automatizados do backend
│   └── package.json        # Dependências e scripts do back-end
│
├── /arduino                # Código da caixa inteligente (firmware Arduino)
│   ├── /src
│   │   └── main.ino        # Código principal do Arduino
│   ├── /libs               # Bibliotecas externas usadas no Arduino
│   └── /drivers            # Drivers específicos (ex.: sensores, módulos)
│
├── /docs                   # Documentação do projeto
│   ├── README.md           # Informações gerais do projeto
│   ├── API.md              # Detalhamento das rotas da API
│   └── mobile-guide.md     # Guia de uso do aplicativo mobile
│
└── /scripts                # Scripts para automação de tarefas
    ├── deploy.sh           # Script de deploy do servidor
    └── build.sh            # Script de build do app mobile e Arduino
