# Mão Amiga - Guia de Comandos Git

## 📋 Fluxo Básico de Upload (Mais Comum)

```bash
git add .
git commit -m "descrição das mudanças"
git push
```

---

## 📖 Explicação dos Comandos Principais

### `git add .`
Prepara TODAS as mudanças para commit
```bash
git add .                    # Adiciona todos os arquivos modificados
git add arquivo.js           # Adiciona apenas um arquivo específico
git add src/                 # Adiciona apenas arquivos de uma pasta
```

### `git commit -m "mensagem"`
Cria um "snapshot" das mudanças com uma descrição
```bash
git commit -m "Add smooth scroll feature"
git commit -m "Fix typo in hero section"
git commit -m "Update contact form validation"
```

### `git push`
Envia os commits para o repositório remoto (GitHub)
```bash
git push                     # Envia para o branch padrão
git push origin main         # Envia especificamente para main
```

---

## 🔍 Comandos de Verificação

### `git status`
Mostra quais arquivos foram modificados e não foram commitados ainda
```bash
git status
```

### `git log`
Mostra o histórico de commits realizados
```bash
git log                      # Mostra o histórico completo
git log --oneline            # Mostra versão resumida
git log -n 5                 # Mostra os últimos 5 commits
```

### `git diff`
Mostra as mudanças exatas que foram feitas nos arquivos
```bash
git diff                     # Mostra todas as mudanças
git diff arquivo.js          # Mostra mudanças de um arquivo específico
```

---

## ↩️ Desfazendo Mudanças

### `git reset`
Remove arquivos do staging (antes do commit)
```bash
git reset                    # Remove todos os arquivos do staging
git reset arquivo.js         # Remove um arquivo específico
```

### `git checkout`
Descarta mudanças em um arquivo (retorna ao estado anterior)
```bash
git checkout arquivo.js      # Descarta mudanças do arquivo
git checkout -- .            # Descarta todas as mudanças
```

### `git revert`
Desfaz um commit anterior criando um novo commit
```bash
git revert HEAD              # Desfaz o último commit
git revert abc123            # Desfaz um commit específico (use hash do commit)
```

---

## 🌿 Trabalhando com Branches

### `git branch`
Cria e gerencia branches
```bash
git branch                   # Lista branches locais
git branch -a                # Lista todos os branches (local + remoto)
git branch nova-feature      # Cria um novo branch
git branch -d nova-feature   # Deleta um branch
```

### `git checkout` ou `git switch`
Muda para outro branch
```bash
git checkout main            # Muda para o branch main
git switch main              # Mesmo que acima (comando mais novo)
git checkout -b nova-feature # Cria e muda para um novo branch
```

### `git merge`
Mescla um branch em outro
```bash
git merge nova-feature       # Mescla nova-feature no branch atual
```

---

## 📝 Boas Práticas

✅ **Sempre fazer commit com mensagens descritivas:**
- ❌ Ruim: `git commit -m "fixes"`
- ✅ Bom: `git commit -m "Fix contact form validation"`

✅ **Fazer commits pequenos e focados:**
- Cada commit deve resolver um problema específico

✅ **Fazer push regularmente:**
- Não deixe muitos commits sem fazer push

✅ **Verificar status antes de commitar:**
```bash
git status
```

---

## 🆘 Dicas Rápidas

| Situação | Comando |
|----------|---------|
| Verificar mudanças | `git status` |
| Ver o que mudou | `git diff` |
| Preparar arquivo(s) | `git add arquivo.js` |
| Preparar tudo | `git add .` |
| Criar commit | `git commit -m "mensagem"` |
| Enviar para GitHub | `git push` |
| Ver histórico | `git log --oneline` |
| Desfazer mudanças | `git checkout -- arquivo.js` |

---

## 🔗 Referências Úteis

- [Documentação Git Oficial](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**Última atualização:** 24/06/2026
