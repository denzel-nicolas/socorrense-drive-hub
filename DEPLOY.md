# 🚀 Guia de Deploy - Autoescola Socorrense

## 📋 Instruções para Exportar e Hospedar o Site

### 1️⃣ Preparar o Projeto para Deploy

Primeiro, certifique-se de que todas as dependências estão instaladas:

```bash
npm install
```

### 2️⃣ Gerar Build de Produção

Execute o comando para criar a versão otimizada do site:

```bash
npm run build
```

Este comando irá:
- ✅ Compilar todo o código React/TypeScript
- ✅ Otimizar e minificar arquivos CSS e JavaScript
- ✅ Comprimir imagens e assets
- ✅ Gerar a pasta `dist/` com todos os arquivos prontos para produção

### 3️⃣ Testar Localmente (Opcional)

Antes de fazer o deploy, você pode testar o build localmente:

```bash
npm run preview
```

Acesse `http://localhost:4173` para ver como o site funcionará em produção.

---

## 🌐 Opções de Hospedagem

### A) Netlify (Recomendado - GRÁTIS)

**Deploy Automático via Git:**
1. Crie conta em [netlify.com](https://netlify.com)
2. Clique em "Add new site" → "Import an existing project"
3. Conecte seu repositório GitHub/GitLab
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Clique em "Deploy site"

**Deploy Manual:**
1. Entre em [netlify.com](https://netlify.com)
2. Arraste a pasta `dist/` para a área de upload
3. Site no ar em segundos!

✅ O arquivo `netlify.toml` já está configurado

---

### B) Vercel (GRÁTIS)

1. Crie conta em [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Conecte seu repositório ou faça upload da pasta `dist/`
4. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em "Deploy"

✅ O arquivo `vercel.json` já está configurado

---

### C) GitHub Pages (GRÁTIS)

1. No seu repositório, vá em Settings → Pages
2. Em "Source", selecione "GitHub Actions"
3. Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. Faça push do código e o deploy será automático!

---

### D) Servidor Próprio (Apache/Nginx)

**Apache:**
1. Faça upload da pasta `dist/` para o servidor
2. O arquivo `.htaccess` já está incluído e configurado
3. Certifique-se de que o `mod_rewrite` está ativado

**Nginx:**
Adicione ao arquivo de configuração:

```nginx
server {
    listen 80;
    server_name seudominio.com;
    root /caminho/para/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache para assets estáticos
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

### E) Hostinger / cPanel

1. Faça login no painel de controle
2. Vá em "File Manager" ou "Gerenciador de Arquivos"
3. Navegue até a pasta `public_html`
4. Faça upload de **todos os arquivos** da pasta `dist/`
5. O arquivo `.htaccess` garantirá o funcionamento correto

---

## ✅ Checklist Pós-Deploy

Após fazer o deploy, verifique:

- [ ] Site carrega corretamente na home
- [ ] Navegação entre seções funciona
- [ ] Formulário de agendamento funciona
- [ ] Botão flutuante do WhatsApp funciona
- [ ] Redirecionamento para WhatsApp funciona
- [ ] Site responsivo em mobile/tablet/desktop
- [ ] Todas as imagens carregam
- [ ] SEO: verifique meta tags com [metatags.io](https://metatags.io)
- [ ] Performance: teste em [PageSpeed Insights](https://pagespeed.web.dev)

---

## 🔧 Solução de Problemas Comuns

### Problema: Página em branco após deploy
**Solução:** Verifique se a configuração de SPA está ativa (redirects para index.html)

### Problema: 404 ao recarregar página
**Solução:** Configure o servidor para redirecionar todas as rotas para `/index.html`

### Problema: Assets não carregam
**Solução:** Verifique se o `base: './'` está configurado no `vite.config.ts`

### Problema: Formulário não funciona
**Solução:** Abra o console do navegador (F12) e verifique erros JavaScript

---

## 📞 Suporte

Se tiver dúvidas sobre o deploy:
- Verifique o console do navegador (F12 → Console)
- Teste o site em diferentes navegadores
- Verifique os logs do servidor de hospedagem

---

## 🎉 Site Pronto!

Após seguir este guia, seu site estará 100% funcional em produção!

**Tecnologias utilizadas:**
- ⚛️ React 18 + TypeScript
- ⚡ Vite (build otimizado)
- 🎨 TailwindCSS
- 📱 100% Responsivo
- 🚀 Otimizado para Performance
