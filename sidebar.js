// sidebar.js

// =================================================================================
// 1. CSS PARA A SIDEBAR (sem alterações)
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

    /* Estilos para a barra de rolagem */
    .sidebar-nav::-webkit-scrollbar { width: 6px; }
    .sidebar-nav::-webkit-scrollbar-track { background: transparent; }
    .sidebar-nav::-webkit-scrollbar-thumb { background-color: rgba(255, 255, 255, 0.3); border-radius: 10px; }
    .sidebar-nav::-webkit-scrollbar-thumb:hover { background-color: rgba(255, 255, 255, 0.5); }

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

    .sidebar-toggle:hover { background-color: rgba(255, 255, 255, 0.15); }
    
    /* Estilos para o perfil de usuário */
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

    .profile-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    .profile-text p { margin: 0; font-size: 14px; line-height: 1.4; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
    .profile-text p:first-child { font-weight: 600; color: #fff; }
    .profile-text p:last-child { font-size: 12px; color: rgba(255, 255, 255, 0.7); }

    /* Estilos para navegação e botão sair */
    .sidebar-footer { padding-top: 16px; border-top: 1px solid rgba(255, 255, 255, 0.2); flex-shrink: 0; }
    .sidebar-nav ul, .sidebar-footer ul { list-style: none; padding: 0; margin: 0; }
    .sidebar-nav a, .sidebar-footer a { color: rgba(255, 255, 255, 0.85); text-decoration: none; font-size: 16px; font-weight: 500; padding: 14px 18px; display: flex; align-items: center; border-radius: 10px; transition: all 0.3s ease; }
    .sidebar-nav a i, .sidebar-footer a i { width: 22px; margin-right: 16px; text-align: center; font-size: 1.1em; }
    .sidebar-nav a:hover, .sidebar-footer a:hover { background-color: rgba(255, 255, 255, 0.1); color: #fff; }
    .sidebar-nav a.active { background-color: #fff; color: var(--primary-accent, #2EC4B6); font-weight: 600; }
    
    .nav-divider { height: 1px; background-color: rgba(255, 255, 255, 0.2); margin: 16px 0; }

    /* Estilos para o menu dropdown (pasta) */
    .dropdown-toggle { width: 100%; justify-content: space-between; }
    .dropdown-toggle .chevron-icon { margin-right: 0; transition: transform 0.3s ease; }
    .dropdown-menu { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-in-out; padding-left: 20px; }
    .nav-item-dropdown.open > .dropdown-menu { max-height: 500px; }
    .nav-item-dropdown.open > .dropdown-toggle .chevron-icon { transform: rotate(180deg); }
    
    /* Comportamento quando a sidebar está colapsada */
    .sidebar.sidebar-collapsed { width: 90px; }
    .sidebar.sidebar-collapsed .nav-text,
    .sidebar.sidebar-collapsed .sidebar-header .logo-container span,
    .sidebar.sidebar-collapsed .user-profile .profile-text,
    .sidebar.sidebar-collapsed .nav-divider { display: none; }
    .sidebar.sidebar-collapsed .sidebar-header, .sidebar.sidebar-collapsed .user-profile { justify-content: center; }
    .sidebar.sidebar-collapsed .sidebar-nav a, .sidebar.sidebar-collapsed .sidebar-footer a { justify-content: center; padding-left: 0; padding-right: 0; }
    .sidebar.sidebar-collapsed .dropdown-menu { max-height: 500px; overflow: visible; padding-left: 0; }
    .sidebar.sidebar-collapsed .chevron-icon { display: none !important; }
    .sidebar.sidebar-collapsed .sidebar-nav a i, .sidebar.sidebar-collapsed .sidebar-footer a i { margin-right: 0; }
`;

// =================================================================================
// 2. HTML DA SIDEBAR (sem alterações)
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
                    <a href="#" id="logout-btn">
                        <i class="fa-solid fa-right-from-bracket"></i> 
                        <span class="nav-text">Sair</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="user-profile">
             <div id="user-profile-avatar" class="profile-avatar">
                </div>
            <div class="profile-text">
                <p id="user-profile-name">Carregando...</p>
                <p id="user-profile-role">...</p>
            </div>
        </div>
    </aside>
`;

// =================================================================================
// 3. FUNÇÕES JAVASCRIPT (COM LÓGICA DE USUÁRIO E LOGOUT)
// =================================================================================

/**
 * ### NOVO: Função para pegar as iniciais do nome do usuário.
 * @param {string} name - O nome completo do usuário.
 * @returns {string} As iniciais (ex: "Carlos Silva" -> "CS").
 */
function getInitials(name) {
    if (!name) return '?';
    const names = name.split(' ');
    const firstInitial = names[0][0] || '';
    const lastInitial = names.length > 1 ? names[names.length - 1][0] : '';
    return `${firstInitial}${lastInitial}`.toUpperCase();
}

/**
 * ### MODIFICADO: Função para buscar dados do localStorage e atualizar o perfil.
 */
function updateUserProfile() {
    const userDataString = localStorage.getItem('mindtrackUser');
    if (!userDataString) {
        console.error('Usuário não autenticado. Redirecionando para login.');
        window.location.href = './index.html';
        return;
    }

    try {
        const user = JSON.parse(userDataString);
        const avatarContainer = document.getElementById('user-profile-avatar');
        const userName = document.getElementById('user-profile-name');
        const userRole = document.getElementById('user-profile-role');

        if (userName) userName.textContent = user.Nome || 'Usuário Anônimo';
        if (userRole) userRole.textContent = user.Cargo || 'Cargo não definido';

        // Lógica para exibir a imagem de perfil
        if (avatarContainer) {
            if (user.Profile_Pic_ID) {
                // Se tiver um ID de foto, cria a URL do thumbnail do Google Drive e insere a imagem
                const thumbnailUrl = `https://drive.google.com/thumbnail?id=${user.Profile_Pic_ID}&sz=w200`;
                avatarContainer.innerHTML = `<img src="${thumbnailUrl}" alt="Foto de Perfil">`;
            } else {
                // Se não tiver, exibe as iniciais
                avatarContainer.textContent = getInitials(user.Nome);
            }
        }
    } catch (error) {
        console.error('Erro ao processar dados do usuário:', error);
        localStorage.clear();
        window.location.href = './index.html';
    }
}


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

    // Chama a função para preencher os dados do usuário
    updateUserProfile();

    // --- Lógica para ativar o link da página atual ---
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        if (!link.classList.contains('dropdown-toggle')) {
            if (link.getAttribute('href').endsWith(currentPage)) {
                link.classList.add('active');
            }
        }
    });

    // --- Lógica para o menu dropdown ---
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', event => {
            event.preventDefault();
            if (!document.querySelector('.sidebar').classList.contains('sidebar-collapsed')) {
                toggle.closest('.nav-item-dropdown').classList.toggle('open');
            }
        });
    });

    // --- Abre o dropdown se um item filho estiver ativo ---
    const activeLink = document.querySelector('.sidebar-nav a.active');
    if (activeLink && activeLink.closest('.dropdown-menu')) {
        activeLink.closest('.nav-item-dropdown').classList.add('open');
    }

    // --- Lógica para o botão de resumir/expandir a sidebar ---
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle-btn');
    if (toggleBtn) {
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
            if (sidebar.classList.contains('sidebar-collapsed')) {
                document.querySelectorAll('.nav-item-dropdown.open').forEach(d => d.classList.remove('open'));
            }
        });
    }

    // --- Lógica para o botão de logout ---
    const logoutButton = document.getElementById('logout-btn');
    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault(); // Impede a navegação padrão
            console.log("Realizando logout...");
            // Limpa os dados do usuário do armazenamento local
            localStorage.removeItem('mindtrackUser');
            localStorage.removeItem('mindtrackToken'); // Limpa o token também
            // Redireciona para a página de login
            window.location.href = './index.html';
        });
    }
}

// Garante que o script seja executado após o carregamento do DOM
document.addEventListener('DOMContentLoaded', loadSidebar);