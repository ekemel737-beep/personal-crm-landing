# Промпт для Claude Code

Положите папку `kesh-landing-handoff` в корень пустого репозитория, откройте в нём Claude Code и вставьте текст ниже.

---

Сверстай лендинг продукта «КЭШ» (личная CRM) по материалам в папке `kesh-landing-handoff/`.

Стек: Astro 5 + Tailwind CSS 4 (через `@tailwindcss/vite`, `npx astro add tailwind`), статическая сборка, без клиентского JS. Шрифты Unbounded и Onest — self-hosted через `@fontsource-variable/*`.

Порядок:
1. Прочитай `kesh-landing-handoff/SPEC.md` целиком — это источник правды по токенам, типографике, раскладке и текстам.
2. Отрендери `reference/mobile.html` (viewport 390) и `reference/desktop.html` (viewport 1440) в full-page PNG через Playwright, дождавшись загрузки шрифтов, и посмотри на них — так должна выглядеть страница. Сами html используй как справку по точным отступам, не копируй разметку.
3. Создай проект Astro, подключи Tailwind 4, перенеси `tokens.css` в `src/styles/global.css`.
4. Структура: `src/layouts/Base.astro` (head, мета, шрифты), `src/components/` — `Button.astro` (варианты dark / signal), `SectionLabel.astro`, `SearchPill.astro`, по компоненту на секцию (`Hero`, `Problem`, `Solution`, `Features`, `Benefits`, `FinalCta`), тексты — в `src/content/landing.ts`.
5. Mobile-first, десктопная раскладка с `lg`. Ссылка кнопок — `PUBLIC_APP_URL` из `.env` (создай `.env.example`).
6. Запусти `npm run build` и проверь, что нет ошибок. Сделай скриншоты страницы на 390 и 1440 px (Playwright) и сравни с PNG референсов из шага 2; поправь расхождения.
7. Проверь критерии приёмки из раздела 7 спецификации и коротко отчитайся, что сделано и что осталось открытым.

Тексты не переписывай и не добавляй новых блоков, ссылок или кнопок.
