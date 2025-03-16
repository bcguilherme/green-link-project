# Guia para Deploy no GitHub

## 1. Criar o Repositório no GitHub

1. Acesse [https://github.com/new](https://github.com/new) no seu navegador
2. Certifique-se de estar logado como 'bcguilherme'
3. Preencha os seguintes campos:
   - **Nome do repositório**: `green-link` (sem espaços)
   - **Descrição**: `Plataforma digital para gestão ambiental, certificação sustentável e compensação de carbono`
   - **Visibilidade**: Escolha entre Público ou Privado
4. **IMPORTANTE**: NÃO marque as opções para inicializar o repositório com README, .gitignore ou licença
5. Clique no botão verde `Create repository`

## 2. Configurar Autenticação no GitHub

Para fazer push para o GitHub, você precisará se autenticar. Há duas opções:

### Opção 1: Usar nome de usuário e senha (ou token)
Quando solicitado durante o push, forneça:
- Nome de usuário: `bcguilherme`
- Senha: sua senha do GitHub OU um token de acesso pessoal (se você tiver autenticação de dois fatores ativada)

### Opção 2: Criar um token de acesso pessoal (recomendado)
1. Acesse [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Clique em "Generate new token" (Classic)
3. Dê um nome ao token (ex: "Green Link Deploy")
4. Selecione o escopo "repo" (acesso completo aos repositórios)
5. Clique em "Generate token"
6. **IMPORTANTE**: Copie o token gerado e guarde-o em um local seguro

## 3. Fazer Push do Código

Depois de criar o repositório, execute o seguinte comando no terminal:

```bash
./push_to_github.sh green-link
```

Se for solicitada autenticação, use seu nome de usuário e o token como senha.

Se você continuar tendo problemas, tente configurar manualmente:

```bash
git remote set-url origin https://bcguilherme:<SEU_TOKEN>@github.com/bcguilherme/green-link.git
git push -u origin main
```

Substitua `<SEU_TOKEN>` pelo token de acesso pessoal que você criou.

## 4. Verificar o Resultado

Após o push bem-sucedido, acesse:
[https://github.com/bcguilherme/green-link](https://github.com/bcguilherme/green-link)

Você deverá ver seu código no GitHub. 