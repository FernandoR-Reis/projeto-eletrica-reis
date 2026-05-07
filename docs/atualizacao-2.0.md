# Atualização 2.0 integrada ao projeto principal

Este projeto (`projeto eletrica`) permanece como base principal.

A pasta de referência `projeto eletrica 2.0/Kimi_Agent_Otimização de Site` foi analisada e aproveitada como **atualização estratégica**.

## O que foi incorporado

### 1) Estrutura de expansão de páginas

Foi integrado o direcionamento para expansão futura com páginas locais e por serviço, inspirado no roteamento do projeto 2.0:

- `/eletricista-campinas`
- `/encanador-campinas`
- `/desentupimento-valinhos`
- `/manutencao-eletrica-campinas`
- `/reparo-hidraulico-campinas`

No projeto atual, isso entrou como planejamento dentro da seção **Atualização 2.0** (sem migração para React).

### 2) Estratégia de conteúdo (blog)

Foi absorvida a ideia de linha editorial com artigos técnicos para SEO e autoridade local.

Temas sugeridos (baseados no 2.0):

- Como evitar curto-circuito em casa
- Sinais de vazamento hidráulico
- Quando trocar disjuntores
- Dicas para evitar entupimentos
- Manutenção elétrica preventiva

### 3) Pacote de SEO técnico

A atualização também consolida o direcionamento para melhorias de SEO já validadas no material 2.0:

- Meta description por página
- Canonical
- Open Graph / Twitter Cards
- Schema.org (`LocalBusiness`, `FAQPage`, `BreadcrumbList`)
- Organização para medição de conversão (GA4 / Pixel)

### 4) Evolução com dados

Entrou como diretriz de crescimento a implementação de eventos e métricas para medir:

- Cliques em WhatsApp
- Conversões por seção
- Páginas com melhor desempenho orgânico

## Alterações aplicadas no projeto atual

- Nova seção no site: `#atualizacao`
- Links da nova seção adicionados em:
  - menu desktop
  - menu mobile
  - links rápidos do rodapé
- Estilos da seção adicionados em `assets/css/styles.css`

## Decisão de arquitetura

Para manter estabilidade e simplicidade, **não foi feita migração para React/Vite** neste momento.

O projeto principal continua estático, com a atualização 2.0 incorporada como planejamento e conteúdo estratégico.
