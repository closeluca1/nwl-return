# UI WEB
  - Escolher a versão
    >npm create vite@latest

 
  - para instalar os arquivos
    >npm install

  - no src só precisa ter os arquivos:
    - APP
    - MAIN
    - VITE-ENV


  - tailwindcss
    >npm install -D tailwindcss
    >npx tailwindcss init
    >npx tailwindcss -p
    >npm install -D tailwindcss postcss autoprefixer


  - biblioteca de acessibilidade
    >npm install @headlessui/react


  - formulários
    >npm i -D @tailwindcss/forms
    >npm install --save-dev tailwind-scrowllbar


  - print da tela
    >npm install html2canvas


# SERVER
  - criar o package.json sem framework
    >npm init -y
    >npm i typescript @types/node ts-node-dev -D
    >npx tsc --init

- mudar o target no tsconfig.json para 2020
- adicionar no "rootDir" src
- adicionar no "outDir" dist

  - criar um script no package.json
    - "dev": "ts-node-dev src/server.ts"

  - instalar o express
    >npm i express
    >npm i -D @types/express

  - instalar o prisma
    >npm i prisma -D
    >npm i @prisma/client
    - para executar o prisma 
        >npx prisma init
    - depois de configurar as tabelas precisa criar a tabela
      >npx prisma migrate dev
    - ver a tabela
      >npx prisma studio
    
  - envio de e-mail
    >npm i nodemailer
    >npm i @types/nodemailer

  - instalar o jest
    >npm install jest -D
  - fazer a inicialização da configuração
    >npx jest --init
  - tipagens do jest
    >npm i @types/jest -D
  - arquivos ts do jest
    >npm install ts-node -D
  - interpretador jest.js para ts
    >npm i -D jest @swc/jest
  - adicionar no jest transform
    -  "^.+\\.(t|j)sx?$": ["@swc/jest"]
  
  - controle de segunrança backend
    >npm i cors
    >npm i @types/cors -D
  