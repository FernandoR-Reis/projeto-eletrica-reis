# Guia de manutenção

## Visão geral

Este projeto é um site estático com:

- `index.html`: estrutura e conteúdo
- `assets/css/styles.css`: identidade visual e responsividade
- `assets/js/main.js`: interações (menu, animações, scroll)

## Convenções usadas

- Classes CSS descritivas por seção (`hero-*`, `sobre-*`, `footer-*`)
- Variáveis globais em `:root` para cores e sombras
- JavaScript sem dependências externas

## Checklist antes de publicar alterações

1. Verificar links de WhatsApp, e-mail e âncoras
2. Testar no desktop e no mobile
3. Confirmar carregamento de imagens da galeria
4. Validar se não há erro no console do navegador

## Como alterar o tema visual

No arquivo `assets/css/styles.css`, ajuste variáveis em `:root`:

- `--navy`, `--navy-mid` (fundo)
- `--blue`, `--blue-bright`, `--blue-light` (cores de destaque)
- `--amber`, `--amber-bright` (botões e destaques)

## Como adicionar novos serviços

No `index.html`, dentro de `#servicos .services-grid`, duplicar um bloco:

```html
<div class="service-card reveal">
  <div class="card-icon amber"><i class="fas fa-bolt"></i></div>
  <h3>Título do Serviço</h3>
  <p>Descrição do serviço.</p>
</div>
```

## Como atualizar a galeria

No `index.html`, em `#galeria .galeria-grid`, atualizar `src` e `alt`:

```html
<div class="galeria-item"><img src="./sua-imagem.jpg" alt="Descrição da imagem" /></div>
```

## Acessibilidade mínima já aplicada

- Botão de menu mobile com `aria-label`, `aria-controls` e `aria-expanded`
- `alt` em todas as imagens da galeria
- Contraste alto no texto principal

## Erros comuns e solução rápida

- **Menu mobile não fecha**: verificar se links internos começam com `#`
- **Imagem não aparece**: validar nome do arquivo e espaços no caminho
- **Animação não dispara**: conferir se elemento tem classe `reveal`
