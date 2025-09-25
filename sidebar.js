// sidebar.js

// =================================================================================
// 1. CSS PARA A SIDEBAR (COM O BOTÃO NO CABEÇALHO)
// =================================================================================
const sidebarCSS = `
    /* Garante que a sidebar ocupe 100% da altura */
    .sidebar {
        height: 100vh;
        transition: width 0.3s ease; /* Animação suave da largura */
        display: flex;
        flex-direction: column;
    }

    .sidebar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 8px;
        flex-shrink: 0;
    }

    .logo-container {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .sidebar-nav {
        flex-grow: 1;
        overflow-y: auto; /* Permite rolagem se os menus forem grandes */
    }

    /* --- INÍCIO DA MODIFICAÇÃO: ESTILOS PARA A BARRA DE ROLAGEM --- */
    .sidebar-nav::-webkit-scrollbar {
        width: 6px;
    }
    .sidebar-nav::-webkit-scrollbar-track {
        background: transparent;
    }
    .sidebar-nav::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 10px;
    }
    .sidebar-nav::-webkit-scrollbar-thumb:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
    /* --- FIM DA MODIFICAÇÃO --- */

    .sidebar-toggle {
        width: 32px;
        height: 32px;
        background-color: transparent;
        border: none;
        border-radius: 6px;
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease;
    }

    .sidebar-toggle:hover {
        background-color: rgba(255, 255, 255, 0.15);
    }
    
    /* --- ESTILOS PARA O PERFIL DE USUÁRIO --- */
    .user-profile {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        display: flex;
        align-items: center;
        gap: 12px;
        transition: all 0.3s ease;
        flex-shrink: 0;
    }

    .profile-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.2);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 14px;
        flex-shrink: 0; 
    }

    .profile-text p { margin: 0; font-size: 14px; line-height: 1.4; }
    .profile-text p:first-child { font-weight: 600; color: #fff; }
    .profile-text p:last-child { font-size: 12px; color: rgba(255, 255, 255, 0.7); }

    /* --- ESTILOS PARA NAVEGAÇÃO E BOTÃO SAIR --- */
    .sidebar-footer {
        padding-top: 16px;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        flex-shrink: 0;
    }

    .sidebar-nav ul,
    .sidebar-footer ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .sidebar-nav a,
    .sidebar-footer a {
        color: rgba(255, 255, 255, 0.85);
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        padding: 14px 18px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        transition: all 0.3s ease;
    }

    .sidebar-nav a i,
    .sidebar-footer a i {
        width: 22px;
        margin-right: 16px;
        text-align: center;
        font-size: 1.1em;
    }

    .sidebar-nav a:hover,
    .sidebar-footer a:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: #fff;
    }

    .sidebar-nav a.active {
        background-color: #fff;
        color: var(--primary-accent, #2EC4B6);
        font-weight: 600;
    }
    
    /* --- NOVO: Divisor visual entre seções --- */
    .nav-divider {
        height: 1px;
        background-color: rgba(255, 255, 255, 0.2);
        margin: 16px 0;
    }

    /* --- ESTILOS PARA O MENU DROPDOWN (PASTA) --- */
    .dropdown-toggle {
        width: 100%;
        justify-content: space-between;
    }

    .dropdown-toggle .chevron-icon {
        margin-right: 0;
        transition: transform 0.3s ease;
    }

    .dropdown-menu {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out;
        padding-left: 20px; /* Indentação dos sub-itens */
    }

    .nav-item-dropdown.open > .dropdown-menu {
        max-height: 500px; /* Altura suficiente para todos os itens */
    }

    .nav-item-dropdown.open > .dropdown-toggle .chevron-icon {
        transform: rotate(180deg);
    }
    
    /* --- COMPORTAMENTO QUANDO A SIDEBAR ESTÁ COLAPSADA --- */
    .sidebar.sidebar-collapsed { width: 90px; }

    .sidebar.sidebar-collapsed .nav-text,
    .sidebar.sidebar-collapsed .sidebar-header .logo-container span,
    .sidebar.sidebar-collapsed .user-profile .profile-text,
    .sidebar.sidebar-collapsed .nav-divider {
        display: none;
    }
    
    .sidebar.sidebar-collapsed .sidebar-header,
    .sidebar.sidebar-collapsed .user-profile {
        justify-content: center;
    }
    
    .sidebar.sidebar-collapsed .sidebar-nav a,
    .sidebar.sidebar-collapsed .sidebar-footer a {
        justify-content: center;
        padding-left: 0;
        padding-right: 0;
    }

    /* --- INÍCIO DA MODIFICAÇÃO: REGRAS PARA O DROPDOWN COLAPSADO --- */
    .sidebar.sidebar-collapsed .dropdown-menu {
        max-height: 500px; /* Permite que o menu seja visível */
        overflow: visible;
        padding-left: 0; /* Remove a indentação */
    }

    .sidebar.sidebar-collapsed .chevron-icon {
        display: none !important; /* Esconde apenas a seta do dropdown */
    }
    /* --- FIM DA MODIFICAÇÃO --- */

    .sidebar.sidebar-collapsed .sidebar-nav a i,
    .sidebar.sidebar-collapsed .sidebar-footer a i {
        margin-right: 0;
    }
`;

// =================================================================================
// 2. HTML DA SIDEBAR (COM O BOTÃO NO CABEÇALHO)
// =================================================================================
const sidebarHTML = `
    <aside class="sidebar">
        <div class="sidebar-header">
            <div class="logo-container">
                <i class="fa-solid fa-leaf"></i>
                <span class="nav-text">MindTrack</span>
            </div>
            <button id="sidebar-toggle-btn" class="sidebar-toggle">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
        </div>

        <nav class="sidebar-nav">
            <ul>
                <li><a href="./Jornada.html"><i class="fa-solid fa-seedling"></i> <span class="nav-text">Minha Jornada</span></a></li>
                <li><a href="./Acoes.html"><i class="fa-solid fa-sun"></i> <span class="nav-text">Ações Diárias</span></a></li>
                <li><a href="./Conquistas.html"><i class="fa-solid fa-trophy"></i> <span class="nav-text">Conquistas</span></a></li>
                <li><a href="./Alertas.html"><i class="fa-solid fa-bell"></i> <span class="nav-text">Alertas</span></a></li>
                <li><a href="./Configuracoes.html"><i class="fa-solid fa-cog"></i> <span class="nav-text">Configurações</span></a></li>

                <li class="nav-divider"></li>

                <li class="nav-item-dropdown">
                    <a href="#" class="dropdown-toggle">
                        <span style="display: flex; align-items: center;">
                           <i class="fa-solid fa-shield-halved"></i>
                           <span class="nav-text">Gestão da Equipe</span>
                        </span>
                        <i class="fa-solid fa-chevron-down nav-text chevron-icon"></i>
                    </a>
                    
                    <ul class="dropdown-menu">
                        <li><a href="./Gerente.html"><i class="fa-solid fa-chart-pie"></i> <span class="nav-text">Painel de Bem-Estar</span></a></li>
                        <li><a href="./Relatorios.html"><i class="fa-solid fa-file-lines"></i> <span class="nav-text">Relatórios</span></a></li>
                        <li><a href="./Colaboradores.html"><i class="fa-solid fa-users"></i> <span class="nav-text">Colaboradores</span></a></li>
                    </ul>
                </li>
            </ul>
        </nav>

        <div class="sidebar-footer">
             <ul>
                <li>
                    <a href="./Login.html">
                        <i class="fa-solid fa-right-from-bracket"></i> 
                        <span class="nav-text">Sair</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="user-profile">
            <div class="profile-avatar">CS</div>
            <div class="profile-text">
                <p>Carlos Silva</p>
                <p>Diretor de RH</p>
            </div>
        </div>
    </aside>
`;

// =================================================================================
// 3. FUNÇÕES JAVASCRIPT (COM LÓGICA PARA DROPDOWN)
// =================================================================================
function injectCSS(css) {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
}

function loadSidebar() {
    injectCSS(sidebarCSS);

    const placeholder = document.getElementById('sidebar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = sidebarHTML;
    }

    // --- Lógica para ativar o link da página atual ---
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    navLinks.forEach(link => {
        if (!link.classList.contains('dropdown-toggle')) {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        }
    });

    // --- Lógica para o menu dropdown ---
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', event => {
            event.preventDefault();
            // Apenas executa a ação de abrir/fechar se a sidebar não estiver colapsada
            if (!document.querySelector('.sidebar').classList.contains('sidebar-collapsed')) {
                const dropdown = toggle.closest('.nav-item-dropdown');
                dropdown.classList.toggle('open');
            }
        });
    });

    // --- Abre o dropdown se um item filho estiver ativo ---
    const activeLink = document.querySelector('.sidebar-nav a.active');
    if (activeLink && activeLink.closest('.dropdown-menu')) {
        const dropdown = activeLink.closest('.nav-item-dropdown');
        if (dropdown) {
            dropdown.classList.add('open');
            // Não adiciona 'active' ao toggle, pois ele não é uma página
        }
    }

    // --- Lógica para o botão de resumir/expandir a sidebar inteira ---
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle-btn');
    const toggleIcon = toggleBtn.querySelector('i');

    const updateIcon = () => {
        if (sidebar.classList.contains('sidebar-collapsed')) {
            toggleIcon.classList.remove('fa-chevron-left');
            toggleIcon.classList.add('fa-chevron-right');
        } else {
            toggleIcon.classList.remove('fa-chevron-right');
            toggleIcon.classList.add('fa-chevron-left');
        }
    };

    if (localStorage.getItem('sidebarState') === 'collapsed') {
        sidebar.classList.add('sidebar-collapsed');
    }
    updateIcon();

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-collapsed');
        localStorage.setItem('sidebarState', sidebar.classList.contains('sidebar-collapsed') ? 'collapsed' : 'expanded');
        updateIcon();

        // Garante que o dropdown não fique 'aberto' no estado colapsado
        if (sidebar.classList.contains('sidebar-collapsed')) {
            document.querySelectorAll('.nav-item-dropdown.open').forEach(d => {
                d.classList.remove('open');
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', loadSidebar);