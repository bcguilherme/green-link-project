#!/bin/bash

# Verificar se o token foi fornecido
if [ -z "$1" ]; then
  echo "Uso: ./create_repo.sh <YOUR_TOKEN>"
  echo "Obtenha um token em https://github.com/settings/tokens"
  exit 1
fi

TOKEN=$1

# Criar o repositório no GitHub
echo "Criando repositório no GitHub..."
curl -X POST -H "Authorization: token $TOKEN" -H "Accept: application/vnd.github.v3+json" https://api.github.com/user/repos -d '{"name":"greenlink-project", "description":"Plataforma digital para gestão ambiental, certificação sustentável e compensação de carbono", "private":false}'

# Verificar se o repositório foi criado com sucesso
if [ $? -eq 0 ]; then
  echo "Repositório criado com sucesso!"
  echo "Configurando o repositório remoto..."
  git remote set-url origin https://github.com/bcguilherme/greenlink-project.git
  
  echo "Fazendo push do código para o GitHub..."
  git push -u origin main
else
  echo "Erro ao criar o repositório. Verifique o token e tente novamente."
  exit 1
fi 