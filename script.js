// Dados de todos os fisioterapeutas
const fisioterapeutas = [
    {
        id: 1,
        nome: "Alexandra Mellissa Moura de Farias",
        matricula: "85285",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00 / 19:00 às 07:00",
        setor: "CTI / UCO",
        cor: "#3a57e8",
        escala: [
            { day: 4, code: "PCti", description: "Plantão CTI", shift: "full", partners: [2, 3], handoverTo: 5 },
            { day: 7, code: "PUco", description: "Plantão UCO", shift: "full", partners: [4], handoverTo: null },
            { day: 9, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [2, 6], handoverTo: 7 },
            { day: 11, code: "PCti", description: "Plantão CTI", shift: "full", partners: [3, 5], handoverTo: null },
            { day: 14, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [2, 8], handoverTo: 9 },
            { day: 16, code: "PCti", description: "Plantão CTI", shift: "full", partners: [4, 6], handoverTo: 7 },
            { day: 18, code: "PCti", description: "Plantão CTI", shift: "full", partners: [3, 5], handoverTo: null },
            { day: 20, code: "P", description: "Plantão Geral", shift: "full", partners: [2, 4], handoverTo: 8 },
            { day: 23, code: "PCti", description: "Plantão CTI", shift: "full", partners: [5, 6], handoverTo: null },
            { day: 25, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [3, 7], handoverTo: 9 },
            { day: 28, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [2, 8], handoverTo: 4 },
            { day: 30, code: "PCti", description: "Plantão CTI", shift: "full", partners: [6, 7], handoverTo: null }
        ]
    },
    {
        id: 2,
        nome: "Carlos Eduardo Santos",
        matricula: "85286",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00 / 19:00 às 07:00",
        setor: "CTI / UCO",
        cor: "#00acc1",
        escala: [
            { day: 2, code: "PCti", description: "Plantão CTI", shift: "full", partners: [1, 3], handoverTo: 4 },
            { day: 5, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [5, 6], handoverTo: 7 },
            { day: 9, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [1, 6], handoverTo: 8 },
            { day: 12, code: "PCti", description: "Plantão CTI", shift: "full", partners: [3, 4], handoverTo: null },
            { day: 14, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [1, 8], handoverTo: 9 },
            { day: 17, code: "PUco", description: "Plantão UCO", shift: "full", partners: [5, 7], handoverTo: null },
            { day: 20, code: "P", description: "Plantão Geral", shift: "full", partners: [1, 4], handoverTo: 8 },
            { day: 24, code: "PCti", description: "Plantão CTI", shift: "full", partners: [6, 9], handoverTo: null },
            { day: 27, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [3, 7], handoverTo: 5 },
            { day: 28, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [1, 8], handoverTo: 4 },
            { day: 31, code: "PCti", description: "Plantão CTI", shift: "full", partners: [4, 6], handoverTo: null }
        ]
    },
    {
        id: 3,
        nome: "Mariana Costa Oliveira",
        matricula: "85287",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00 / 19:00 às 07:00",
        setor: "CTI / UCO",
        cor: "#4caf50",
        escala: [
            { day: 1, code: "PCti", description: "Plantão CTI", shift: "full", partners: [2, 4], handoverTo: 5 },
            { day: 4, code: "PCti", description: "Plantão CTI", shift: "full", partners: [1, 2], handoverTo: 6 },
            { day: 8, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [5, 7], handoverTo: 9 },
            { day: 11, code: "PCti", description: "Plantão CTI", shift: "full", partners: [1, 5], handoverTo: null },
            { day: 12, code: "PCti", description: "Plantão CTI", shift: "full", partners: [2, 4], handoverTo: null },
            { day: 15, code: "PUco", description: "Plantão UCO", shift: "full", partners: [6, 8], handoverTo: null },
            { day: 18, code: "PCti", description: "Plantão CTI", shift: "full", partners: [1, 5], handoverTo: null },
            { day: 22, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [4, 9], handoverTo: 6 },
            { day: 25, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [1, 7], handoverTo: 9 },
            { day: 27, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [2, 7], handoverTo: 5 },
            { day: 29, code: "PCti", description: "Plantão CTI", shift: "full", partners: [8, 9], handoverTo: null }
        ]
    },
    {
        id: 4,
        nome: "Ricardo Almeida Souza",
        matricula: "85288",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00 / 19:00 às 07:00",
        setor: "CTI / UCO",
        cor: "#ff9800",
        escala: [
            { day: 3, code: "PCti", description: "Plantão CTI", shift: "full", partners: [5, 6], handoverTo: 7 },
            { day: 6, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [2, 8], handoverTo: 9 },
            { day: 7, code: "PUco", description: "Plantão UCO", shift: "full", partners: [1], handoverTo: null },
            { day: 10, code: "PCti", description: "Plantão CTI", shift: "full", partners: [6, 9], handoverTo: null },
            { day: 12, code: "PCti", description: "Plantão CTI", shift: "full", partners: [2, 3], handoverTo: null },
            { day: 16, code: "PCti", description: "Plantão CTI", shift: "full", partners: [1, 6], handoverTo: 7 },
            { day: 19, code: "PUco", description: "Plantão UCO", shift: "full", partners: [5, 8], handoverTo: null },
            { day: 20, code: "P", description: "Plantão Geral", shift: "full", partners: [1, 2], handoverTo: 8 },
            { day: 22, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [3, 9], handoverTo: 6 },
            { day: 26, code: "PCti", description: "Plantão CTI", shift: "full", partners: [7, 9], handoverTo: null },
            { day: 28, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [1, 2], handoverTo: 4 },
            { day: 31, code: "PCti", description: "Plantão CTI", shift: "full", partners: [2, 6], handoverTo: null }
        ]
    },
    {
        id: 5,
        nome: "Fernanda Lima Rodrigues",
        matricula: "85289",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00 / 19:00 às 07:00",
        setor: "CTI / UCO",
        cor: "#9c27b0",
        escala: [
            { day: 2, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [6, 7], handoverTo: 8 },
            { day: 5, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [2, 6], handoverTo: 7 },
            { day: 8, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [3, 7], handoverTo: 9 },
            { day: 11, code: "PCti", description: "Plantão CTI", shift: "full", partners: [1, 3], handoverTo: null },
            { day: 13, code: "PCti", description: "Plantão CTI", shift: "full", partners: [6, 9], handoverTo: null },
            { day: 17, code: "PUco", description: "Plantão UCO", shift: "full", partners: [2, 7], handoverTo: null },
            { day: 18, code: "PCti", description: "Plantão CTI", shift: "full", partners: [1, 3], handoverTo: null },
            { day: 21, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [8, 9], handoverTo: 4 },
            { day: 23, code: "PCti", description: "Plantão CTI", shift: "full", partners: [1, 6], handoverTo: null },
            { day: 26, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [7, 8], handoverTo: 9 },
            { day: 27, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [2, 3], handoverTo: 5 },
            { day: 30, code: "PUco", description: "Plantão UCO", shift: "full", partners: [4, 9], handoverTo: null }
        ]
    },
    {
        id: 6,
        nome: "Rodrigo Silva Pereira",
        matricula: "85290",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00 / 19:00 às 07:00",
        setor: "CTI / UCO",
        cor: "#00bcd4",
        escala: [
            { day: 3, code: "PCti", description: "Plantão CTI", shift: "full", partners: [4, 5], handoverTo: 7 },
            { day: 5, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [2, 5], handoverTo: 7 },
            { day: 9, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [1, 2], handoverTo: 8 },
            { day: 10, code: "PCti", description: "Plantão CTI", shift: "full", partners: [4, 9], handoverTo: null },
            { day: 13, code: "PCti", description: "Plantão CTI", shift: "full", partners: [5, 9], handoverTo: null },
            { day: 16, code: "PCti", description: "Plantão CTI", shift: "full", partners: [1, 4], handoverTo: 7 },
            { day: 19, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [7, 8], handoverTo: 9 },
            { day: 22, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [3, 4], handoverTo: 6 },
            { day: 23, code: "PCti", description: "Plantão CTI", shift: "full", partners: [1, 5], handoverTo: null },
            { day: 24, code: "PCti", description: "Plantão CTI", shift: "full", partners: [2, 9], handoverTo: null },
            { day: 27, code: "PUco", description: "Plantão UCO", shift: "full", partners: [8, 9], handoverTo: null },
            { day: 30, code: "PCti", description: "Plantão CTI", shift: "full", partners: [1, 7], handoverTo: null },
            { day: 31, code: "PCti", description: "Plantão CTI", shift: "full", partners: [2, 4], handoverTo: null }
        ]
    },
    {
        id: 7,
        nome: "Juliana Santos Alves",
        matricula: "85291",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00 / 19:00 às 07:00",
        setor: "CTI / UCO",
        cor: "#ff5722",
        escala: [
            { day: 1, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [8, 9], handoverTo: 2 },
            { day: 4, code: "PCti", description: "Plantão CTI", shift: "full", partners: [3, 9], handoverTo: null },
            { day: 8, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [3, 5], handoverTo: 9 },
            { day: 11, code: "PUco", description: "Plantão UCO", shift: "full", partners: [2, 8], handoverTo: null },
            { day: 14, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [5, 9], handoverTo: 3 },
            { day: 16, code: "PCti", description: "Plantão CTI", shift: "full", partners: [1, 4], handoverTo: 7 },
            { day: 17, code: "PUco", description: "Plantão UCO", shift: "full", partners: [2, 5], handoverTo: null },
            { day: 19, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [6, 8], handoverTo: 9 },
            { day: 22, code: "PCti", description: "Plantão CTI", shift: "full", partners: [4, 8], handoverTo: null },
            { day: 25, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [1, 3], handoverTo: 9 },
            { day: 26, code: "PCti", description: "Plantão CTI", shift: "full", partners: [4, 9], handoverTo: null },
            { day: 29, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [8, 9], handoverTo: 2 },
            { day: 30, code: "PCti", description: "Plantão CTI", shift: "full", partners: [1, 6], handoverTo: null }
        ]
    },
    {
        id: 8,
        nome: "Lucas Mendes Costa",
        matricula: "85292",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00 / 19:00 às 07:00",
        setor: "CTI / UCO",
        cor: "#8bc34a",
        escala: [
            { day: 2, code: "PCti", description: "Plantão CTI", shift: "full", partners: [9, 3], handoverTo: 4 },
            { day: 6, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [2, 4], handoverTo: 9 },
            { day: 9, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [1, 2], handoverTo: 8 },
            { day: 13, code: "PUco", description: "Plantão UCO", shift: "full", partners: [5, 7], handoverTo: null },
            { day: 14, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [1, 2], handoverTo: 9 },
            { day: 17, code: "PCti", description: "Plantão CTI", shift: "full", partners: [3, 9], handoverTo: null },
            { day: 19, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [6, 7], handoverTo: 9 },
            { day: 20, code: "P", description: "Plantão Geral", shift: "full", partners: [1, 2], handoverTo: 8 },
            { day: 22, code: "PCti", description: "Plantão CTI", shift: "full", partners: [4, 7], handoverTo: null },
            { day: 25, code: "PUco", description: "Plantão UCO", shift: "full", partners: [3, 6], handoverTo: null },
            { day: 26, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [5, 7], handoverTo: 9 },
            { day: 28, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [1, 2], handoverTo: 4 },
            { day: 31, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [4, 9], handoverTo: 2 }
        ]
    },
    {
        id: 9,
        nome: "Amanda Oliveira Ferreira",
        matricula: "85293",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00 / 19:00 às 07:00",
        setor: "CTI / UCO",
        cor: "#e91e63",
        escala: [
            { day: 1, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [7, 8], handoverTo: 2 },
            { day: 4, code: "PCti", description: "Plantão CTI", shift: "full", partners: [3, 7], handoverTo: null },
            { day: 8, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [3, 5], handoverTo: 9 },
            { day: 10, code: "PCti", description: "Plantão CTI", shift: "full", partners: [4, 6], handoverTo: null },
            { day: 13, code: "PCti", description: "Plantão CTI", shift: "full", partners: [5, 6], handoverTo: null },
            { day: 14, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [5, 7], handoverTo: 3 },
            { day: 17, code: "PCti", description: "Plantão CTI", shift: "full", partners: [3, 8], handoverTo: null },
            { day: 19, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [6, 7], handoverTo: 9 },
            { day: 21, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [5, 8], handoverTo: 4 },
            { day: 22, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [3, 4], handoverTo: 6 },
            { day: 25, code: "MCti", description: "Manhã CTI", shift: "morning", partners: [1, 3], handoverTo: 9 },
            { day: 26, code: "PCti", description: "Plantão CTI", shift: "full", partners: [4, 7], handoverTo: null },
            { day: 29, code: "PCti", description: "Plantão CTI", shift: "full", partners: [3, 8], handoverTo: null },
            { day: 30, code: "PUco", description: "Plantão UCO", shift: "full", partners: [4, 5], handoverTo: null }
        ]
    }
];

// Mapeamento de códigos para descrições completas
const codeDescriptions = {
    "F": "Folga",
    "P": "Plantão Geral",
    "PCti": "Plantão CTI",
    "MCti": "Manhã CTI",
    "PUco": "Plantão UCO",
    "M": "Manhã",
    "T": "Tarde",
    "N": "Noite",
    "***": "Férias"
};

// Configurações - Janeiro 2026 começa na QUINTA-FEIRA (4)
const firstDayOfMonth = 4; // Quinta-feira
const daysInMonth = 31;

// Estado da aplicação
let currentEmployee = fisioterapeutas[0]; // Começa com Alexandra
let allWorkDays = {};

// Elementos DOM
const employeeSelectEl = document.getElementById('employee-select');
const currentEmployeeNameEl = document.getElementById('current-employee-name');
const calendarEl = document.getElementById('calendar');
const workDaysListEl = document.getElementById('work-days-list');
const nextWorkDaysEl = document.getElementById('next-work-days');
const currentStatusContainer = document.getElementById('current-status-container');
const partnerInfoEl = document.getElementById('partner-info');
const handoverInfoEl = document.getElementById('handover-info');
const employeeDetailsEl = document.getElementById('employee-details');
const statisticsContainer = document.getElementById('statistics-container');
const legendCodesEl = document.getElementById('legend-codes');
const tabs = document.querySelectorAll('.tab');
const navItems = document.querySelectorAll('.nav-item');
const tabContents = document.querySelectorAll('.tab-content');
const totalWorkDaysEl = document.getElementById('total-work-days');
const totalOffDaysEl = document.getElementById('total-off-days');
const nextWorkInEl = document.getElementById('next-work-in');
const nextWorkLabelEl = document.getElementById('next-work-label');
const calendarUpdatedEl = document.getElementById('calendar-updated');
const nextWorkUpdatedEl = document.getElementById('next-work-updated');
const workDaysUpdatedEl = document.getElementById('work-days-updated');
const partnersUpdatedEl = document.getElementById('partners-updated');

// Obter data atual REAL
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth(); // 0 = janeiro
const currentDay = today.getDate();
const currentHour = today.getHours();

// Timer para atualização em tempo real
let updateInterval;

// Inicializar dados de todos os dias de trabalho
function initializeAllWorkDays() {
    allWorkDays = {};
    fisioterapeutas.forEach(employee => {
        allWorkDays[employee.id] = employee.escala;
    });
}

// Formatar data para exibição
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}

// Formatar hora para exibição
function formatTime(date) {
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

// Atualizar timestamp
function updateTimestamps() {
    const now = new Date();
    const timeStr = formatTime(now);
    
    if (calendarUpdatedEl) calendarUpdatedEl.textContent = `Atualizado: ${timeStr}`;
    if (nextWorkUpdatedEl) nextWorkUpdatedEl.textContent = `Atualizado: ${timeStr}`;
    if (workDaysUpdatedEl) workDaysUpdatedEl.textContent = `Atualizado: ${timeStr}`;
    if (partnersUpdatedEl) partnersUpdatedEl.textContent = `Atualizado: ${timeStr}`;
}

// Obter nome do funcionário pelo ID
function getEmployeeNameById(id) {
    const employee = fisioterapeutas.find(e => e.id === id);
    return employee ? employee.nome.split(' ')[0] + ' ' + employee.nome.split(' ')[1] : `Funcionário ${id}`;
}

// Obter funcionário completo pelo ID
function getEmployeeById(id) {
    return fisioterapeutas.find(e => e.id === id);
}

// Verificar se é janeiro 2026
function isJanuary2026() {
    return currentYear === 2026 && currentMonth === 0;
}

// Calcular próximo dia de trabalho
function getNextWorkDays(employee) {
    if (!isJanuary2026() || !employee) {
        return { nextDays: [], daysUntilNext: null, isTodayWorkDay: false };
    }
    
    const todayDay = currentDay;
    const workDays = employee.escala;
    
    // Verificar se hoje é dia de trabalho
    const todayWorkDay = workDays.find(d => d.day === todayDay);
    const isTodayWorkDay = !!todayWorkDay;
    
    // Filtrar dias de trabalho futuros
    const futureWorkDays = workDays.filter(workDay => workDay.day > todayDay);
    futureWorkDays.sort((a, b) => a.day - b.day);
    
    // Pegar próximos 3 dias de trabalho
    const nextDays = futureWorkDays.slice(0, 3);
    
    // Calcular dias até o próximo trabalho
    let daysUntilNext = null;
    if (nextDays.length > 0) {
        daysUntilNext = nextDays[0].day - todayDay;
    }
    
    return { nextDays, daysUntilNext, isTodayWorkDay, todayWorkDay };
}

// Criar status atual
function createCurrentStatus(employee) {
    currentStatusContainer.innerHTML = '';
    
    if (!employee) return;
    
    if (!isJanuary2026()) {
        const currentDate = formatDate(today);
        const statusEl = document.createElement('div');
        statusEl.className = 'current-status off';
        statusEl.innerHTML = `
            <div class="status-text">Escala para Janeiro 2026</div>
            <div class="status-subtext">Data atual: ${currentDate}</div>
            <div class="status-subtext">Mostrando escala do mês de referência</div>
        `;
        currentStatusContainer.appendChild(statusEl);
        return;
    }
    
    const { isTodayWorkDay, todayWorkDay } = getNextWorkDays(employee);
    
    const statusEl = document.createElement('div');
    
    if (isTodayWorkDay) {
        // Verificar turno
        const isNightShift = todayWorkDay.shift === "full" && currentHour >= 19;
        const isWorkingHours = (todayWorkDay.shift === "morning" && currentHour >= 7 && currentHour < 19) ||
                             (todayWorkDay.shift === "full" && (currentHour >= 7 && currentHour < 19 || currentHour >= 19 || currentHour < 7));
        
        statusEl.className = `current-status ${isNightShift ? 'night' : ''} ${isWorkingHours ? 'pulse' : ''}`;
        
        let statusText = "";
        if (isNightShift) {
            statusText = '🌙 PLANTÃO NOTURNO';
        } else if (isWorkingHours) {
            statusText = '🏥 EM TRABALHO AGORA';
        } else {
            statusText = '✅ DIA DE TRABALHO';
        }
        
        statusEl.innerHTML = `
            <div class="status-text">${statusText}</div>
            <div class="status-subtext">${todayWorkDay.description} (${todayWorkDay.code})</div>
            <div class="status-subtext">Horário: ${employee.horario}</div>
        `;
    } else {
        statusEl.className = 'current-status off';
        statusEl.innerHTML = `
            <div class="status-text">😴 DIA DE FOLGA</div>
            <div class="status-subtext">Aproveite o descanso!</div>
        `;
    }
    
    currentStatusContainer.appendChild(statusEl);
}

// Inicializar calendário
function initCalendar(employee) {
    if (!employee) return;
    
    calendarEl.innerHTML = '';
    
    // Adicionar dias vazios para alinhar o primeiro dia
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'day empty';
        calendarEl.appendChild(emptyDay);
    }
    
    // Adicionar dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
        const dayEl = document.createElement('div');
        const workDay = employee.escala.find(d => d.day === day);
        
        // Verificar se é hoje
        const isToday = isJanuary2026() && (day === currentDay);
        
        let className = 'day off';
        let code = "F";
        let description = "Folga";
        
        if (workDay) {
            code = workDay.code;
            description = workDay.description;
            
            if (workDay.shift === "morning") {
                className = 'day work-morning';
            } else if (workDay.shift === "night") {
                className = 'day work-night';
            } else {
                className = 'day work';
            }
        }
        
        if (isToday) className += ' today';
        
        dayEl.className = className;
        dayEl.dataset.day = day;
        
        dayEl.innerHTML = `
            <div class="day-number">${day}</div>
            <div class="day-code">${code}</div>
        `;
        
        // Adicionar evento de toque
        dayEl.addEventListener('click', () => {
            document.querySelectorAll('.day.selected').forEach(d => {
                d.classList.remove('selected');
            });
            
            dayEl.classList.add('selected');
            
            if (workDay) {
                showWorkDayDetails(workDay, employee);
            } else {
                showDayDetails(day, code);
            }
        });
        
        calendarEl.appendChild(dayEl);
    }
    
    // Atualizar estatísticas
    updateStatistics(employee);
}

// Inicializar lista de dias de trabalho
function initWorkDaysList(employee) {
    if (!employee) return;
    
    workDaysListEl.innerHTML = '';
    
    const sortedWorkDays = [...employee.escala].sort((a, b) => a.day - b.day);
    
    if (sortedWorkDays.length === 0) {
        workDaysListEl.innerHTML = '<div class="no-work-days">Nenhum dia de trabalho neste mês</div>';
        return;
    }
    
    sortedWorkDays.forEach(workDay => {
        const date = new Date(2026, 0, workDay.day);
        const dayOfWeek = date.toLocaleDateString('pt-BR', { weekday: 'long' });
        const capitalizedDay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
        
        // Verificar se é hoje
        const isToday = isJanuary2026() && (workDay.day === currentDay);
        
        // Obter nomes dos companheiros
        const partnerNames = workDay.partners.map(id => getEmployeeNameById(id)).join(', ');
        
        // Obter nome de quem recebe o plantão
        const handoverName = workDay.handoverTo ? getEmployeeNameById(workDay.handoverTo) : null;
        
        const workDayItem = document.createElement('div');
        workDayItem.className = `work-day-item ${workDay.shift === 'morning' ? 'morning' : workDay.shift === 'night' ? 'night' : ''} ${isToday ? 'today' : ''}`;
        workDayItem.dataset.day = workDay.day;
        
        if (isToday) {
            workDayItem.style.borderLeftColor = '#4caf50';
            workDayItem.style.backgroundColor = 'rgba(76, 175, 80, 0.05)';
        }
        
        workDayItem.innerHTML = `
            <div class="work-day-date">
                <div class="work-day-number" style="${isToday ? 'color: #4caf50;' : ''}">${workDay.day}</div>
                <div class="work-day-weekday">${capitalizedDay.substring(0, 3)}</div>
            </div>
            <div class="work-day-details">
                <div class="work-day-code" style="${isToday ? 'background-color: #4caf50;' : ''}">${workDay.code}</div>
                <div class="work-day-description">${workDay.description}</div>
                
                ${partnerNames ? `
                    <div class="work-day-partners">
                        <span style="font-size: 0.7rem; color: #666;">Com:</span>
                        <span class="partner-badge">${partnerNames}</span>
                    </div>
                ` : ''}
                
                ${handoverName ? `
                    <div class="handover-badge">Passa plantão para: ${handoverName}</div>
                ` : ''}
                
                <div style="font-size: 0.7rem; color: #666; margin-top: 4px;">
                    ${workDay.day} de Janeiro de 2026${isToday ? ' - HOJE' : ''}
                </div>
            </div>
        `;
        
        workDayItem.addEventListener('click', () => {
            document.querySelectorAll('.day.selected').forEach(d => {
                d.classList.remove('selected');
            });
            
            const dayEl = document.querySelector(`.day[data-day="${workDay.day}"]`);
            if (dayEl) {
                dayEl.classList.add('selected');
                setTimeout(() => {
                    dayEl.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                }, 100);
            }
            
            switchTab('calendar');
        });
        
        workDaysListEl.appendChild(workDayItem);
    });
}

// Inicializar próximos dias de trabalho (COM NOVO ESTILO)
function initNextWorkDays(employee) {
    if (!employee) return;
    
    nextWorkDaysEl.innerHTML = '';
    
    const { nextDays, daysUntilNext, isTodayWorkDay, todayWorkDay } = getNextWorkDays(employee);
    
    // Atualizar contador no resumo
    if (daysUntilNext !== null) {
        nextWorkInEl.textContent = daysUntilNext;
        nextWorkLabelEl.textContent = daysUntilNext === 1 ? "Próximo trabalho (amanhã)" : "Próximo trabalho";
    } else if (isTodayWorkDay) {
        nextWorkInEl.textContent = "HOJE";
        nextWorkLabelEl.textContent = "Trabalhando agora";
    } else {
        nextWorkInEl.textContent = "-";
        nextWorkLabelEl.textContent = "Próximo trabalho";
    }
    
    // Se for janeiro de 2026
    if (isJanuary2026()) {
        // Se hoje for dia de trabalho, mostrar primeiro
        if (isTodayWorkDay) {
            const date = new Date(2026, 0, currentDay);
            const dayOfWeek = date.toLocaleDateString('pt-BR', { weekday: 'long' });
            const capitalizedDay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
            
            // Obter nomes dos companheiros
            const partnerNames = todayWorkDay.partners.map(id => getEmployeeNameById(id));
            
            // Obter nome de quem recebe o plantão
            const handoverName = todayWorkDay.handoverTo ? getEmployeeNameById(todayWorkDay.handoverTo) : null;
            
            const todayItem = document.createElement('div');
            todayItem.className = 'next-day-item today';
            
            // Determinar classe do código baseado no tipo
            let codeClass = '';
            if (todayWorkDay.code === "PCti") codeClass = 'pcti';
            if (todayWorkDay.code === "MCti") codeClass = 'mcti';
            if (todayWorkDay.code === "PUco") codeClass = 'puco';
            if (todayWorkDay.code === "P") codeClass = 'p';
            
            todayItem.innerHTML = `
                <div class="next-day-date">
                    <div class="next-day-number">${currentDay}</div>
                    <div class="next-day-weekday">${capitalizedDay.substring(0, 3)}</div>
                </div>
                <div class="next-day-content">
                    <div class="next-day-header">
                        <div class="next-day-code ${codeClass}">${todayWorkDay.code}</div>
                        <div class="next-day-shift">${todayWorkDay.description}</div>
                    </div>
                    <div class="next-day-description">${todayWorkDay.description}</div>
                    
                    ${partnerNames.length > 0 ? `
                        <div class="next-day-partners">
                            <span class="partner-label">Com:</span>
                            ${partnerNames.map(name => `
                                <span class="partner-badge">
                                    <i class="fas fa-user"></i> ${name}
                                </span>
                            `).join('')}
                        </div>
                    ` : ''}
                    
                    ${handoverName ? `
                        <div class="handover-section">
                            <i class="fas fa-exchange-alt handover-icon"></i>
                            <div class="handover-text">
                                Passa plantão para: <span class="handover-name">${handoverName}</span>
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="next-day-footer">
                        <div class="next-day-distance">HOJE</div>
                        <div class="next-day-time">
                            <i class="far fa-clock"></i> ${formatTime(today)}
                        </div>
                    </div>
                </div>
            `;
            
            nextWorkDaysEl.appendChild(todayItem);
        }
        
        // Adicionar próximos dias
        if (nextDays.length === 0 && !isTodayWorkDay) {
            nextWorkDaysEl.innerHTML = '<div class="no-work-days">Não há mais dias de trabalho este mês</div>';
        } else {
            nextDays.forEach(workDay => {
                const date = new Date(2026, 0, workDay.day);
                const dayOfWeek = date.toLocaleDateString('pt-BR', { weekday: 'long' });
                const capitalizedDay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
                
                // Calcular dias até este trabalho
                const daysUntil = workDay.day - currentDay;
                let distanceText = "";
                
                if (daysUntil === 1) {
                    distanceText = "Amanhã";
                } else {
                    distanceText = `Em ${daysUntil} dias`;
                }
                
                // Obter nomes dos companheiros
                const partnerNames = workDay.partners.map(id => getEmployeeNameById(id));
                
                // Obter nome de quem recebe o plantão
                const handoverName = workDay.handoverTo ? getEmployeeNameById(workDay.handoverTo) : null;
                
                // Determinar classe do código baseado no tipo
                let codeClass = '';
                if (workDay.code === "PCti") codeClass = 'pcti';
                if (workDay.code === "MCti") codeClass = 'mcti';
                if (workDay.code === "PUco") codeClass = 'puco';
                if (workDay.code === "P") codeClass = 'p';
                
                const dayItem = document.createElement('div');
                dayItem.className = 'next-day-item';
                
                dayItem.innerHTML = `
                    <div class="next-day-date">
                        <div class="next-day-number">${workDay.day}</div>
                        <div class="next-day-weekday">${capitalizedDay.substring(0, 3)}</div>
                    </div>
                    <div class="next-day-content">
                        <div class="next-day-header">
                            <div class="next-day-code ${codeClass}">${workDay.code}</div>
                            <div class="next-day-shift">${workDay.description}</div>
                        </div>
                        <div class="next-day-description">${workDay.description}</div>
                        
                        ${partnerNames.length > 0 ? `
                            <div class="next-day-partners">
                                <span class="partner-label">Com:</span>
                                ${partnerNames.map(name => `
                                    <span class="partner-badge">
                                        <i class="fas fa-user"></i> ${name}
                                    </span>
                                `).join('')}
                            </div>
                        ` : ''}
                        
                        ${handoverName ? `
                            <div class="handover-section">
                                <i class="fas fa-exchange-alt handover-icon"></i>
                                <div class="handover-text">
                                    Passa plantão para: <span class="handover-name">${handoverName}</span>
                                </div>
                            </div>
                        ` : ''}
                        
                        <div class="next-day-footer">
                            <div class="next-day-distance">${distanceText}</div>
                            <div class="next-day-time">${workDay.day} de Jan</div>
                        </div>
                    </div>
                `;
                
                nextWorkDaysEl.appendChild(dayItem);
            });
        }
    } else {
        // Se não for janeiro de 2026
        const currentDate = formatDate(today);
        nextWorkDaysEl.innerHTML = `
            <div class="no-work-days">
                Esta escala é para Janeiro 2026<br>
                Data atual: ${currentDate}<br>
                Próximos dias de trabalho serão calculados quando for Janeiro 2026
            </div>
        `;
    }
}

// Inicializar informações de companheiros
function initPartnerInfo(employee) {
    if (!employee) return;
    
    partnerInfoEl.innerHTML = '';
    handoverInfoEl.innerHTML = '';
    
    // Coletar todos os companheiros únicos
    const allPartners = new Set();
    const handovers = new Set();
    
    employee.escala.forEach(workDay => {
        workDay.partners.forEach(partnerId => {
            allPartners.add(partnerId);
        });
        
        if (workDay.handoverTo) {
            handovers.add(workDay.handoverTo);
        }
    });
    
    // Adicionar companheiros
    if (allPartners.size === 0) {
        partnerInfoEl.innerHTML = '<div class="no-work-days">Não há companheiros de trabalho registrados</div>';
    } else {
        allPartners.forEach(partnerId => {
            const partner = getEmployeeById(partnerId);
            if (partner) {
                const partnerItem = document.createElement('div');
                partnerItem.className = 'partner-item';
                
                // Contar quantos dias trabalham juntos
                const daysTogether = employee.escala.filter(workDay => 
                    workDay.partners.includes(partnerId)
                ).length;
                
                partnerItem.innerHTML = `
                    <div style="flex: 1;">
                        <div class="partner-name">${partner.nome}</div>
                        <div class="partner-shift">Matrícula: ${partner.matricula} | Trabalham juntos em ${daysTogether} dia(s)</div>
                    </div>
                `;
                
                partnerInfoEl.appendChild(partnerItem);
            }
        });
    }
    
    // Adicionar informações de passagem de plantão
    if (handovers.size === 0) {
        handoverInfoEl.innerHTML = '<div class="no-work-days">Não há registros de passagem de plantão</div>';
    } else {
        let handoverHTML = '<div class="handover-label">Este mês você passará o plantão para:</div><ul style="margin-top: 8px; padding-left: 20px;">';
        
        handovers.forEach(handoverId => {
            const handoverEmployee = getEmployeeById(handoverId);
            if (handoverEmployee) {
                // Contar quantas vezes passa plantão para esta pessoa
                const handoverCount = employee.escala.filter(workDay => 
                    workDay.handoverTo === handoverId
                ).length;
                
                handoverHTML += `<li style="margin-bottom: 5px;"><strong>${handoverEmployee.nome.split(' ')[0]}</strong> - ${handoverCount} vez(es)</li>`;
            }
        });
        
        handoverHTML += '</ul>';
        handoverInfoEl.innerHTML = handoverHTML;
    }
}

// Atualizar informações do funcionário
function updateEmployeeInfo(employee) {
    if (!employee) return;
    
    employeeDetailsEl.innerHTML = '';
    
    const infoItems = [
        { label: "Nome:", value: employee.nome },
        { label: "Matrícula:", value: employee.matricula },
        { label: "Função:", value: employee.funcao },
        { label: "Horário:", value: employee.horario },
        { label: "Setor:", value: employee.setor },
        { label: "Dias de Trabalho:", value: employee.escala.length }
    ];
    
    infoItems.forEach(item => {
        const infoItem = document.createElement('div');
        infoItem.className = 'info-item';
        infoItem.innerHTML = `
            <div class="info-label">${item.label}</div>
            <div class="info-value">${item.value}</div>
        `;
        employeeDetailsEl.appendChild(infoItem);
    });
    
    // Atualizar estatísticas
    updateStatisticsDisplay(employee);
    
    // Atualizar legenda
    updateLegendDisplay();
}

// Atualizar estatísticas
function updateStatistics(employee) {
    if (!employee) return;
    
    const workDaysCount = employee.escala.length;
    const offDaysCount = daysInMonth - workDaysCount;
    
    totalWorkDaysEl.textContent = workDaysCount;
    totalOffDaysEl.textContent = offDaysCount;
}

// Atualizar exibição de estatísticas
function updateStatisticsDisplay(employee) {
    if (!employee) return;
    
    statisticsContainer.innerHTML = '';
    
    // Contar códigos
    const codeCounts = {};
    employee.escala.forEach(workDay => {
        if (!codeCounts[workDay.code]) {
            codeCounts[workDay.code] = 0;
        }
        codeCounts[workDay.code]++;
    });
    
    // Criar grid de estatísticas
    const codesGrid = document.createElement('div');
    codesGrid.className = 'codes-grid';
    
    Object.keys(codeCounts).forEach(code => {
        const codeItem = document.createElement('div');
        codeItem.className = 'code-item';
        
        // Gerar cor baseada no código
        let color = employee.cor;
        if (code === "PCti") color = "#00acc1";
        if (code === "MCti") color = "#4caf50";
        if (code === "PUco") color = "#ff9800";
        if (code === "P") color = "#3a57e8";
        
        codeItem.innerHTML = `
            <div class="code-badge" style="background-color: ${color};">${code}</div>
            <div class="code-desc">${codeCounts[code]} ${codeCounts[code] === 1 ? 'dia' : 'dias'}</div>
        `;
        
        codesGrid.appendChild(codeItem);
    });
    
    statisticsContainer.appendChild(codesGrid);
}

// Atualizar exibição da legenda
function updateLegendDisplay() {
    legendCodesEl.innerHTML = '';
    
    Object.keys(codeDescriptions).forEach(code => {
        const codeItem = document.createElement('div');
        codeItem.className = 'code-item';
        
        // Gerar cor baseada no código
        let color = "#3a57e8";
        if (code === "F") color = "#6c757d";
        if (code === "PCti") color = "#00acc1";
        if (code === "MCti") color = "#4caf50";
        if (code === "PUco") color = "#ff9800";
        if (code === "M") color = "#4caf50";
        if (code === "T") color = "#ff9800";
        if (code === "N") color = "#9c27b0";
        if (code === "***") color = "#e91e63";
        
        codeItem.innerHTML = `
            <div class="code-badge" style="background-color: ${color};">${code}</div>
            <div class="code-desc">${codeDescriptions[code]}</div>
        `;
        
        legendCodesEl.appendChild(codeItem);
    });
}

// Mostrar detalhes de um dia de trabalho
function showWorkDayDetails(workDay, employee) {
    const date = new Date(2026, 0, workDay.day);
    const dayOfWeek = date.toLocaleDateString('pt-BR', { weekday: 'long' });
    const capitalizedDay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
    
    // Obter nomes dos companheiros
    const partnerNames = workDay.partners.map(id => getEmployeeNameById(id)).join(', ');
    
    // Obter nome de quem recebe o plantão
    const handoverName = workDay.handoverTo ? getEmployeeNameById(workDay.handoverTo) : null;
    
    let details = `📅 ${capitalizedDay}, ${workDay.day} de Janeiro de 2026\n\n`;
    details += `🏥 ${workDay.description} (${workDay.code})\n`;
    details += `⏰ Horário: ${employee.horario}\n`;
    details += `📍 Setor: ${employee.setor}\n`;
    
    if (partnerNames) {
        details += `\n👥 Trabalha com: ${partnerNames}\n`;
    }
    
    if (handoverName) {
        details += `\n🔄 Passa plantão para: ${handoverName}\n`;
    }
    
    alert(details);
}

function showDayDetails(day, code) {
    const date = new Date(2026, 0, day);
    const dayOfWeek = date.toLocaleDateString('pt-BR', { weekday: 'long' });
    const capitalizedDay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
    const description = codeDescriptions[code] || "Desconhecido";
    
    alert(`📅 ${capitalizedDay}, ${day} de Janeiro de 2026\n\n${description} (${code})`);
}

// Alternar entre abas
function switchTab(tabName) {
    // Atualizar abas superiores
    tabs.forEach(tab => {
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // Atualizar navegação inferior
    navItems.forEach(item => {
        if (item.dataset.tab === tabName) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Mostrar conteúdo da aba
    tabContents.forEach(content => {
        if (content.id === `${tabName}-tab`) {
            content.classList.add('active', 'fade-in');
            content.style.display = 'block';
        } else {
            content.classList.remove('active', 'fade-in');
            content.style.display = 'none';
        }
    });
    
    // Remover classe de animação após a animação
    setTimeout(() => {
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('fade-in');
        });
    }, 400);
}

// Atualizar todos os dados em tempo real
function updateAllData() {
    // Atualizar data/hora atual
    const now = new Date();
    
    // Atualizar timestamps
    updateTimestamps();
    
    // Atualizar status atual (se for janeiro 2026)
    if (isJanuary2026()) {
        createCurrentStatus(currentEmployee);
    }
    
    // Atualizar próximos dias de trabalho
    initNextWorkDays(currentEmployee);
}

// Carregar dados do funcionário selecionado
function loadEmployeeData(employeeId) {
    const employee = fisioterapeutas.find(e => e.id === parseInt(employeeId));
    
    if (employee) {
        currentEmployee = employee;
        currentEmployeeNameEl.textContent = employee.nome.split(' ')[0] + ' ' + employee.nome.split(' ')[1];
        
        // Atualizar todas as visualizações
        createCurrentStatus(employee);
        initCalendar(employee);
        initWorkDaysList(employee);
        initNextWorkDays(employee);
        initPartnerInfo(employee);
        updateEmployeeInfo(employee);
        updateTimestamps();
    }
}

// Configurar eventos
function setupEventListeners() {
    // Configurar seletor de funcionário
    employeeSelectEl.addEventListener('change', (e) => {
        loadEmployeeData(e.target.value);
    });
    
    // Configurar eventos das abas
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            switchTab(tabName);
        });
    });
    
    // Configurar eventos da navegação inferior
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const tabName = item.dataset.tab;
            switchTab(tabName);
        });
    });
    
    // Configurar navegação de meses
    document.getElementById('prev-month').addEventListener('click', () => {
        alert("Janeiro é o primeiro mês da escala. Não há mês anterior disponível.");
    });
    
    document.getElementById('next-month').addEventListener('click', () => {
        alert("Esta escala mostra apenas janeiro de 2026. Para meses futuros, consulte a escala atualizada.");
    });
}

// Popular seletor de funcionários
function populateEmployeeSelector() {
    fisioterapeutas.forEach(employee => {
        const option = document.createElement('option');
        option.value = employee.id;
        option.textContent = employee.nome.split(' ')[0] + ' ' + employee.nome.split(' ')[1];
        employeeSelectEl.appendChild(option);
    });
    
    // Selecionar Alexandra por padrão
    employeeSelectEl.value = "1";
}

// Inicializar a aplicação
function initApp() {
    // Inicializar dados
    initializeAllWorkDays();
    populateEmployeeSelector();
    
    // Carregar dados do primeiro funcionário
    loadEmployeeData(1);
    
    // Configurar eventos
    setupEventListeners();
    
    // Iniciar atualização em tempo real (a cada minuto)
    updateInterval = setInterval(updateAllData, 60000); // 60 segundos
}

// Iniciar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initApp);

// Limpar intervalo ao sair da página
window.addEventListener('beforeunload', () => {
    if (updateInterval) {
        clearInterval(updateInterval);
    }
});

// Atualizar ao voltar para a página
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        updateAllData();
    }
});