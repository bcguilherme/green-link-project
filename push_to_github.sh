#!/bin/bash

# Configurar o repositório remoto
git remote set-url origin https://github.com/bcguilherme/greenlink-project.git

# Fazer push do código para o GitHub
git push -u origin main

echo "Se você encontrar erros de autenticação, tente:"
echo "1. Criar um token de acesso pessoal em https://github.com/settings/tokens"
echo "2. Usar o token como senha quando solicitado"
echo ""
echo "Ou use o formato de URL com credenciais:"
echo "git remote set-url origin https://bcguilherme:<YOUR_TOKEN>@github.com/bcguilherme/greenlink-project.git"
echo "git push -u origin main" 