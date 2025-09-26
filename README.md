#  MindTrack 🌿

MindTrack é uma plataforma de bem-estar projetada para monitorar indicadores de saúde mental no ambiente de trabalho, como humor, estresse e energia. A aplicação permite que os colaboradores realizem check-ins diários de forma anônima e oferece aos gestores um painel com dados agregados para a tomada de decisões estratégicas, visando um ambiente mais saudável e produtivo.

## ✨ Funcionalidades

- **👤 Autenticação de Usuário:** Sistema de cadastro e login.
- **🗓️ Check-in Diário:** Formulário interativo para registrar humor, energia e qualidade do sono.
- **🌱 Jornada Visual:** Uma "planta" que cresce e floresce conforme a consistência dos check-ins do usuário.
- **💡 Ações de Bem-Estar:** Sugestões de micro-ações para melhorar o dia (respiração, foco, etc.).
- **🏆 Conquistas:** Gamificação para incentivar o engajamento contínuo.
- ** dashboards para Gestores:**
    - **Painel Geral:** Visão agregada do bem-estar da equipe.
    - **Relatórios:** Geração de relatórios detalhados com filtros por período e departamento.
    - **Central de Alertas:** Insights proativos sobre tendências de estresse ou queda no bem-estar.
    - **Gestão de Acessos:** Gerenciamento de departamentos e colaboradores.

## 🚀 Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3 e JavaScript (Vanilla JS).
- **Backend:** Google Apps Script, utilizando uma Planilha Google como banco de dados.
- **Ícones:** Font Awesome.
- **Fontes:** Google Fonts (Montserrat e Inter).

## ⚙️ Como Usar

1.  **Backend:**
    - Crie uma Planilha Google com as abas e colunas necessárias (`Usuarios`, `Departamentos`, `Dados`).
    - Crie um projeto Google Apps Script e cole o código da API (`Code.gs`).
    - Implante o script como um "Aplicativo da Web" e copie a URL gerada.

2.  **Frontend:**
    - Clone ou baixe este repositório.
    - Em cada arquivo (`index.html`, `Cadastro.html`, etc.), substitua a constante `API_URL` pela URL do seu aplicativo da web publicado.
    - Para testar localmente, você pode precisar de uma extensão de servidor web simples (como o "Live Server" para VS Code).

---

Ao fazer essas três coisas (renomear, atualizar os links e melhorar o README), seu projeto estará perfeitamente configurado para ser identificado e apresentado pelo GitHub.