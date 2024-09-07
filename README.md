# task-management-prisma
Task Management é uma aplicação de gerenciamento de tarefas para uso individual ou em grupo. Desenvolvida com Node.js e Prisma no backend e React.js no frontend, oferece uma interface intuitiva para criação, edição e monitoramento de tarefas, facilitando a organização e colaboração.


Uma tarefa tem:
1. title
2. description
3. status
4. lembretes (diario, de dias em dias, semanal, mensal, anual)
5. data de conlusão
6. steps
7. membros
8. created_at
9. ficheiros (pdf, word, excel, docs, e mais)

Um Passo de uma tarefa pode ter:
1. title
2. status
3. membros


## Routers
1. inicial (tarfas com duração de 1 dia) - / 
2. definições - /settings
3. gerenciamento de conta - /settings/account

4. marcadas como importantes
5. Planeados (com duração de mais de 1 dia) - /plans
6. Todas as tarefas - /all-tasks


## Status das Tasks
1. **Tarefas em processamento**: `IN_PROGRESS`
2. **Tarefa Pendente**: `PENDING`
3. **Tarefa Concluída**: `COMPLETED`
4. **Tarefa Interrompida**: `INTERRUPTED`

Esses slugs seguem o padrão `UPPERCASE` e com o formato de palavras separadas por underscore (`_`).