#!/bin/bash

# Nome do repositório
REPO_NAME="green-link"

echo "Este script irá fazer o push do código para o GitHub com autenticação."
echo "Certifique-se de que você já criou o repositório $REPO_NAME no GitHub."
echo ""

# Solicitar o token de acesso pessoal
echo "Digite seu token de acesso pessoal do GitHub (ou deixe em branco para usar autenticação padrão):"
read -s TOKEN

# Configurar o repositório remoto com ou sem token
if [ -n "$TOKEN" ]; then
  # Com token
  git remote set-url origin "https://bcguilherme:$TOKEN@github.com/bcguilherme/$REPO_NAME.git"
  echo "URL remota configurada com token de autenticação."
else
  # Sem token (autenticação padrão)
  git remote set-url origin "https://github.com/bcguilherme/$REPO_NAME.git"
  echo "URL remota configurada para autenticação padrão."
fi

# Fazer push do código para o GitHub
echo "Tentando fazer push para o repositório..."
git push -u origin main

# Verificar se houve erro
if [ $? -ne 0 ]; then
  echo "Erro ao fazer push. Verifique se:"
  echo "1. O repositório $REPO_NAME existe no GitHub"
  echo "2. Seu token de acesso pessoal está correto e tem as permissões necessárias"
  echo "3. Você está conectado à internet"
  
  # Restaurar a URL remota sem o token para segurança
  if [ -n "$TOKEN" ]; then
    git remote set-url origin "https://github.com/bcguilherme/$REPO_NAME.git"
    echo "URL remota restaurada para formato sem token por segurança."
  fi
else
  echo "Push realizado com sucesso!"
  echo "Seu projeto está disponível em: https://github.com/bcguilherme/$REPO_NAME"
  
  # Restaurar a URL remota sem o token para segurança
  if [ -n "$TOKEN" ]; then
    git remote set-url origin "https://github.com/bcguilherme/$REPO_NAME.git"
    echo "URL remota restaurada para formato sem token por segurança."
  fi
fi 