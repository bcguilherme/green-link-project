# Instruções para Criar um Repositório no GitHub

## 1. Criar um Token de Acesso Pessoal (PAT)

1. Acesse https://github.com/settings/tokens
2. Clique em "Generate new token" (Generate new token (classic))
3. Dê um nome ao token, como "Green Link Project"
4. Selecione os escopos: `repo`, `workflow`, `admin:org`
5. Clique em "Generate token"
6. **IMPORTANTE**: Copie o token gerado, pois ele não será mostrado novamente

## 2. Criar o Repositório usando o Token

Execute o seguinte comando no terminal, substituindo `YOUR_TOKEN` pelo token que você acabou de criar:

```bash
curl -X POST -H "Authorization: token YOUR_TOKEN" -H "Accept: application/vnd.github.v3+json" https://api.github.com/user/repos -d '{"name":"greenlink-project", "description":"Plataforma digital para gestão ambiental, certificação sustentável e compensação de carbono", "private":false}'
```

## 3. Conectar o Repositório Local ao Remoto

Após criar o repositório, execute:

```bash
git remote set-url origin https://github.com/bcguilherme/greenlink-project.git
git push -u origin main
```

## 4. Autenticação ao fazer Push

Quando solicitado, use seu nome de usuário do GitHub e o token de acesso pessoal como senha.

## Alternativa: Criar o Repositório pela Interface Web

Se preferir, você pode criar o repositório diretamente no GitHub:

1. Acesse https://github.com/new
2. Preencha o nome do repositório como "greenlink-project"
3. Adicione a descrição: "Plataforma digital para gestão ambiental, certificação sustentável e compensação de carbono"
4. Escolha se o repositório será público ou privado
5. NÃO inicialize o repositório com README, .gitignore ou licença
6. Clique em "Create repository"
7. Siga as instruções na tela para conectar seu repositório local ao remoto 