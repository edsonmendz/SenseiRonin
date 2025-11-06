# Sensei Ronin — SPA (React + Vite)

Projeto inicial do website institucional do Sensei Ronin.

Características:
- React SPA (Vite)
- Mobile-first, responsivo
- Sticky header com navegação suave (smooth scrolling)
- Distinção visual entre Seção 1 (Preto/Vermelho) e demais seções (Branco/Cores Suaves)

Instalação e execução (PowerShell no Windows):

```powershell
npm install
npm run dev
```

Observações:
- Substitua `[Link da Imagem da Logo]` na `src/components/Header.jsx` pelo URL real da logo.
- Atualize links de contato no `src/components/Contact.jsx` quando fornecidos.
- O mapa está embutido via iframe conforme solicitado; ajuste se necessário.

Próximos passos sugeridos:
- Ajustar imagens reais e logo.
- Testes de acessibilidade e contraste adicional.
- Adicionar animações sutis e SEO/meta tags conforme o ambiente de deploy.

SEO & Indexação (passos aplicados aqui)
- Adicionei meta tags principais e JSON-LD em `index.html` (title, description, Open Graph, Twitter card, canonical).
- Implementei atualização dinâmica de `document.title` e `meta[name=description]` em `src/App.jsx` usando IntersectionObserver — assim cada seção atualiza título/descrição quando fica visível (útil para motores de busca que executam JS, como Google).
- Criei `robots.txt` e `sitemap.xml` na raiz com entradas iniciais para as seções (substitua `https://example.com` pela URL final).

Recomendações adicionais (altamente recomendado):
1) Prerender / SSR: para máxima indexabilidade e performance, prefira migrar para uma solução com renderização no servidor (Next.js) ou usar uma etapa de prerender (ex.: `vite-plugin-prerender` ou serviços como Render/Netlify prerender). Posso ajudar a migrar ou configurar prerendering.
2) Google Search Console: registre e envie o `sitemap.xml` e monitore cobertura/indexação e problemas de rastreabilidade.
3) Metatags por rota: se você migrar para SSR/SSG, crie metatags específicas por rota/URL para cada seção para melhor resultado em SERPs.
4) Imagens e Open Graph: substitua `og-image.png` e imagens placeholders por recursos reais com 1200x630 para melhor compartilhamento social.

Como testar rapidamente:
1. Substitua `https://example.com` pelo domínio real (ex.: `https://sensei-ronin.vercel.app/`) — já atualizei os arquivos para `https://sensei-ronin.vercel.app/`.
2. Submeta `sitemap.xml` no Google Search Console.
3. Use o Mobile-Friendly test e o URL Inspection no Search Console.
4. Verifique o carregamento de meta tags dinâmicas abrindo o site, navegando entre seções e observando a `document.title` e `meta[name=description]` no DevTools.
