# Reis Elétrica & Hidráulica

Site institucional estático com foco em apresentação comercial, captação de contatos e acesso rápido ao WhatsApp.

## Estrutura do projeto

```text
.
├── index.html
├── assets
│   ├── css
│   │   └── styles.css
│   └── js
│       └── main.js
├── docs
│   └── manutencao.md
└── imagens na raiz (identidade visual)
```

## Como rodar localmente

Basta abrir o arquivo `index.html` no navegador.

Opcionalmente, usando servidor local:

```bash
python -m http.server 5500
```

Depois acesse: `http://localhost:5500`

## Personalização rápida

- Telefone/WhatsApp: buscar por `5519991986100` em `index.html`
- E-mail: buscar por `eletricahidraulicareis@gmail.com` em `index.html`
- Textos das seções: editar diretamente em `index.html`
- Estilo visual (cores, espaçamentos): editar `:root` e classes em `assets/css/styles.css`

## Publicação no GitHub

### 1) Inicializar e subir repositório

```bash
git init
git add .
git commit -m "feat: estrutura inicial do site institucional"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

### 2) Criar domínio provisório (GitHub Pages)

1. No GitHub, abra **Settings** do repositório.
2. Vá em **Pages**.
3. Em **Build and deployment**, selecione:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` e pasta `/ (root)`
4. Salve.

URL provisória ficará no formato:

`https://SEU_USUARIO.github.io/SEU_REPOSITORIO/`

## Próximos passos recomendados

- Configurar Google Analytics / Meta Pixel (se necessário)
- Criar formulário com envio real (Formspree, Resend ou backend próprio)
- Comprimir imagens para melhorar carregamento
