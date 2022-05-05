# UI WEB
  - npm create vite@latest (escolher a versão)

  - npm install (para instalar os arquivos)


  - no src só precisa ter os arquivos:
    - APP
    - MAIN
    - VITE-ENV


  - npm install -D tailwindcss
    - npx tailwindcss init
    - npx tailwindcss -p
    - npm install -D tailwindcss postcss autoprefixer


  - biblioteca de acessibilidade
    - npm install @headlessui/react


  - formulários
    - npm i -D @tailwindcss/forms
    - npm install --save-dev tailwind-scrowllbar


  - print da tela
    - npm install html2canvas


# SERVER
  - criar o package.json sem framework
    - npm init -y
    - npm i typescript @types/node ts-node-dev -D
    - npx tsc --init

- mudar o target no tsconfig.json para 2020
- adicionar no "rootDir" src
- adicionar no "outDir" dist

  - criar um script no package.json
    - "dev": "ts-node-dev src/server.ts"

  - instalar o express
    - npm i express
    - npm i -D @types/express

  - instalar o prisma
    - npm i prisma -D
    - npm i @prisma/client
      - para executar o prisma 
        >npx prisma init
    - despois de configurar as tabelas precisa criar a tabela
      >npx prisma migrate dev
    - ver a tabela
      >npx prisma studio
    
  - envio de e-mail
    - npm i nodemailer
    - npm i @types/nodemailer


hora 1:08:47
https://www.youtube.com/watch?v=bm2dnsPqcek&t=284s