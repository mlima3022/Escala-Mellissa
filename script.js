// Sistema inteligente de previsão de companheiros e passagem de plantão

// Mapeamento de códigos para descrições e turnos
const codeMap = {
    "F": { description: "Folga", shift: null, category: "off", time: null },
    "M": { description: "Manhã", shift: "morning", category: "work", time: "7:00-13:00" },
    "T": { description: "Tarde", shift: "afternoon", category: "work", time: "13:00-19:00" },
    "MT": { description: "Manhã e Tarde", shift: "full", category: "work", time: "7:00-15:00" },
    "P": { description: "Plantão", shift: "full", category: "work", time: "7:00-19:00" },
    "MCti": { description: "Manhã CTI", shift: "morning", category: "work", time: "7:00-13:00" },
    "PCti": { description: "Plantão CTI", shift: "full", category: "work", time: "7:00-19:00" },
    "PUco": { description: "Plantão UCO", shift: "full", category: "work", time: "7:00-19:00" },
    "TUco": { description: "Tarde UCO", shift: "afternoon", category: "work", time: "13:00-19:00" },
    "MUco": { description: "Manhã UCO", shift: "morning", category: "work", time: "7:00-13:00" },
    "PUn": { description: "Plantão Noturno", shift: "night", category: "work", time: "19:00-7:00" },
    "TUn": { description: "Tarde Noturno", shift: "afternoon", category: "work", time: "13:00-19:00" },
    "***": { description: "Férias", shift: null, category: "vacation", time: null }
};

// Mapeamento de setores para códigos
const sectorMap = {
    "MCti": "CTI",
    "PCti": "CTI",
    "PUn": "CTI/Noturno",
    "TUn": "CTI/Noturno",
    "PUco": "UCO",
    "TUco": "UCO",
    "MUco": "UCO",
    "MT": "CTI/UCO",
    "M": "Geral",
    "T": "Geral",
    "P": "Geral"
};

// Dados de todos os fisioterapeutas do PDF
const fisioterapeutas = [
    {
        id: 1,
        nome: "Joicyara da Silva Souza",
        matricula: "83297",
        funcao: "Fisioterapeuta Supervisora",
        horario: "2ª a 6ª - 7:00 às 13:00",
        setor: "Supervisão",
        cor: "#3a57e8",
        escala: ["F", "M", "F", "F", "M", "M", "M", "M", "M", "F", "F", "M", "M", "M", "M", "M", "F", "F", "M", "F", "M", "M", "M", "F", "F", "M", "M", "M", "M", "M", "F"]
    },
    {
        id: 2,
        nome: "Jean Leobons Pereira",
        matricula: "83136",
        funcao: "Fisioterapeuta Diarista Andar",
        horario: "2ª a 6ª - 7:00 às 13:00",
        setor: "Diarista Andar",
        cor: "#00acc1",
        escala: ["***", "***", "***", "***", "***", "***", "***", "***", "M", "F", "F", "M", "T", "M", "M", "M", "F", "F", "M", "F", "M", "M", "M", "F", "F", "M", "T", "M", "M", "M", "F"]
    },
    {
        id: 3,
        nome: "Thainá Ferreira Sant'anna",
        matricula: "84309",
        funcao: "Fisioterapeuta Diarista CTI/UCO",
        horario: "2ª a 5ª - 7:00 às 15:00",
        setor: "CTI/UCO Diurno",
        cor: "#4caf50",
        escala: ["F", "F", "F", "F", "MT", "MT", "MT", "MT", "F", "F", "F", "MT", "MT", "MT", "M", "F", "F", "F", "MT", "F", "MT", "M", "F", "F", "F", "MT", "MT", "MT", "M", "F", "F"]
    },
    {
        id: 4,
        nome: "Jefferson Ribeiro de Abreu",
        matricula: "83178",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00",
        setor: "CTI/UCO",
        cor: "#ff9800",
        escala: ["F", "P", "M", "F", "F", "P", "F", "F", "P", "M", "F", "F", "P", "F", "F", "P", "M", "F", "F", "P", "F", "F", "P", "M", "F", "F", "P", "F", "F", "P", "M"]
    },
    {
        id: 5,
        nome: "Rhayane da Silva Baence",
        matricula: "85025",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00",
        setor: "CTI/UCO",
        cor: "#9c27b0",
        escala: ["F", "F", "F", "MCti", "P", "F", "P", "F", "F", "F", "MCti", "P", "F", "P", "F", "F", "F", "P", "P", "F", "P", "F", "F", "F", "F", "P", "F", "P", "F", "F", "F"]
    },
    {
        id: 6,
        nome: "Pamela Cristina S. Souza Freite",
        matricula: "85225",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00",
        setor: "CTI/UCO",
        cor: "#00bcd4",
        escala: ["P", "F", "F", "P", "M", "F", "F", "P", "F", "F", "P", "M", "F", "F", "P", "F", "F", "P", "M", "F", "P", "F", "F", "F", "P", "M", "F", "F", "P", "F", "F"]
    },
    {
        id: 7,
        nome: "Francivaldo do Nascimento Mota",
        matricula: "85245",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00",
        setor: "CTI/UCO",
        cor: "#ff5722",
        escala: ["M", "P", "F", "P", "F", "F", "F", "M", "P", "P", "F", "F", "P", "F", "F", "M", "P", "F", "F", "P", "F", "F", "M", "P", "F", "F", "P", "F", "F", "M", "P"]
    },
    {
        id: 8,
        nome: "Alexandra Mellissa Moura de Farias",
        matricula: "85285",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00",
        setor: "CTI/UCO",
        cor: "#8bc34a",
        escala: ["F", "F", "F", "PCti", "F", "F", "PUco", "F", "MCti", "F", "PCti", "F", "F", "MCti", "F", "PCti", "F", "PCti", "F", "P", "F", "F", "PCti", "F", "MCti", "F", "F", "MCti", "F", "PCti", "F"]
    },
    {
        id: 9,
        nome: "Luciana Cordeiro Amaral",
        matricula: "85042",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00",
        setor: "CTI/UCO",
        cor: "#e91e63",
        escala: ["MCti", "F", "PCti", "F", "F", "P", "F", "MCti", "F", "PCti", "F", "F", "PCti", "F", "MCti", "F", "PCti", "F", "F", "PCti", "F", "MCti", "F", "PCti", "F", "F", "PCti", "F", "MCti", "F", "PCti"]
    },
    {
        id: 10,
        nome: "Nivaldo da Silva de Souza",
        matricula: "85390",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00",
        setor: "CTI/UCO",
        cor: "#795548",
        escala: ["P", "M", "F", "P", "F", "F", "F", "F", "P", "F", "P", "F", "M", "F", "F", "P", "F", "P", "F", "MCti", "F", "F", "P", "F", "P", "F", "M", "F", "F", "P", "F"]
    },
    {
        id: 11,
        nome: "Carolayne Mattos Rodriguez",
        matricula: "85052",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00",
        setor: "CTI/UCO",
        cor: "#607d8b",
        escala: ["F", "F", "P", "F", "P", "M", "F", "F", "F", "F", "P", "F", "F", "P", "F", "MCti", "P", "F", "P", "F", "F", "F", "MCti", "F", "P", "F", "F", "P", "F", "MCti", "F"]
    },
    {
        id: 12,
        nome: "Sabrina de Almeida da Silva",
        matricula: "84568",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00",
        setor: "CTI/UCO Diurno",
        cor: "#2196f3",
        escala: ["F", "F", "TUco", "F", "PCti", "F", "PCti", "F", "F", "TUco", "F", "PCti", "F", "PCti", "F", "F", "TUco", "F", "PCti", "F", "PCti", "F", "F", "TUco", "F", "PCti", "F", "PCti", "F", "F", "TUco"]
    },
    {
        id: 13,
        nome: "Tayssa Dias Vieira dos Santos",
        matricula: "84331",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00",
        setor: "CTI/UCO Diurno",
        cor: "#009688",
        escala: ["PUco", "F", "F", "PUco", "F", "PUco", "F", "PUco", "F", "F", "F", "F", "PUco", "F", "PUco", "F", "F", "F", "F", "PUco", "F", "PUco", "F", "F", "PUco", "F", "PUco", "F", "PUco", "F", "F"]
    },
    {
        id: 14,
        nome: "Ingrid Fernandes Nogueira",
        matricula: "84945",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00",
        setor: "CTI/UCO Diurno",
        cor: "#673ab7",
        escala: ["***", "***", "***", "***", "***", "***", "***", "***", "***", "MUco", "F", "PUco", "F", "F", "PCti", "F", "MUco", "F", "PUco", "F", "F", "PCti", "F", "MUco", "F", "PUco", "F", "F", "PCti", "F", "MUco"]
    },
    {
        id: 15,
        nome: "Fellipe Soares dos Santos Cardoso",
        matricula: "84313",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00",
        setor: "CTI/UCO Diurno",
        cor: "#3f51b5",
        escala: ["F", "PCti", "MCti", "F", "F", "PCti", "F", "F", "PCti", "***", "***", "***", "***", "***", "***", "***", "***", "***", "***", "***", "***", "***", "***", "***", "***", "***", "***", "***", "***", "***", "***"]
    },
    {
        id: 16,
        nome: "Mateus Rangel de Araújo",
        matricula: "85232",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00",
        setor: "CTI/UCO Diurno",
        cor: "#00bcd4",
        escala: ["F", "F", "PUn", "F", "F", "F", "TUn", "PCti", "F", "PUn", "F", "F", "F", "TUn", "PUn", "F", "F", "PUco", "F", "F", "TUn", "PUn", "F", "PUn", "F", "F", "F", "TUn", "PUn", "F", "PUn"]
    },
    {
        id: 17,
        nome: "Iris Nascimento de Souza",
        matricula: "84557",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00",
        setor: "CTI/UCO Diurno",
        cor: "#ff9800",
        escala: ["F", "PUco", "F", "F", "PUco", "F", "F", "F", "PUco", "F", "PUco", "PUn", "F", "F", "F", "PUco", "F", "F", "F", "F", "F", "PUn", "PUco", "F", "PCti", "PUn", "F", "F", "F", "PUco", "F"]
    },
    {
        id: 18,
        nome: "Vitor Celestino da Silva",
        matricula: "85009",
        funcao: "Fisioterapeuta",
        horario: "07:00 às 19:00",
        setor: "CTI/UCO Diurno",
        cor: "#4caf50",
        escala: ["PCti", "F", "MUco", "F", "F", "F", "PUn", "PUn", "F", "MCti", "F", "F", "F", "PUco", "PUn", "F", "MCti", "F", "F", "F", "PUco", "PUn", "F", "MCti", "F", "F", "F", "PUco", "PUn", "F", "MCti"]
    },
    {
        id: 19,
        nome: "Janaína da Silva Rozas",
        matricula: "52134",
        funcao: "Fisioterapeuta",
        horario: "19:00 às 07:00",
        setor: "CTI/UCO Noturno",
        cor: "#9c27b0",
        escala: ["F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F"]
    },
    {
        id: 20,
        nome: "Juan Carlos de Lima",
        matricula: "80424",
        funcao: "Fisioterapeuta",
        horario: "19:00 às 07:00",
        setor: "CTI/UCO Noturno",
        cor: "#2196f3",
        escala: ["F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F"]
    },
    {
        id: 21,
        nome: "Monique Marques de Mendonça Simões",
        matricula: "82764",
        funcao: "Fisioterapeuta",
        horario: "19:00 às 07:00",
        setor: "CTI/UCO Noturno",
        cor: "#ff5722",
        escala: ["F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F"]
    },
    {
        id: 22,
        nome: "David Clark de Freitas",
        matricula: "84442",
        funcao: "Fisioterapeuta",
        horario: "19:00 às 07:00",
        setor: "CTI/UCO Noturno",
        cor: "#795548",
        escala: ["F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F"]
    },
    {
        id: 23,
        nome: "Eloisa Priscila Batista Farias",
        matricula: "84466",
        funcao: "Fisioterapeuta",
        horario: "19:00 às 07:00",
        setor: "CTI/UCO Noturno",
        cor: "#607d8b",
        escala: ["P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P"]
    },
    {
        id: 24,
        nome: "Tatiane Cristina Thomé Ximenes",
        matricula: "84446",
        funcao: "Fisioterapeuta",
        horario: "19:00 às 07:00",
        setor: "CTI/UCO Noturno",
        cor: "#673ab7",
        escala: ["P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "F", "P", "F", "P", "F", "F", "P", "F"]
    }
];

// Sistema inteligente de previsão

// 1. Função para determinar o setor baseado no código
function getSectorFromCode(code) {
    if (code.includes("Cti")) return "CTI";
    if (code.includes("Uco")) return "UCO";
    if (code === "PUn" || code === "TUn") return "CTI/Noturno";
    if (code === "P") return "Geral";
    if (code === "M" || code === "T") return "Geral";
    if (code === "MT") return "CTI/UCO";
    return "Geral";
}

// 2. Função para determinar compatibilidade de turnos
function areShiftsCompatible(shift1, shift2) {
    if (!shift1 || !shift2) return false;
    
    // Turnos compatíveis para trabalhar juntos
    const compatibleShifts = {
        "morning": ["morning", "full"],
        "afternoon": ["afternoon", "full"],
        "full": ["morning", "afternoon", "full"],
        "night": ["night"] // Plantonistas noturnos só trabalham com outros noturnos
    };
    
    return compatibleShifts[shift1]?.includes(shift2) || false;
}

// 3. Função para encontrar companheiros de trabalho em um dia específico
function findWorkPartners(employeeId, day) {
    const employee = fisioterapeutas.find(e => e.id === employeeId);
    if (!employee) return [];
    
    const employeeCode = employee.escala[day - 1];
    const employeeCodeInfo = codeMap[employeeCode];
    
    // Se não é dia de trabalho, não há companheiros
    if (!employeeCodeInfo || employeeCodeInfo.category !== "work") return [];
    
    const employeeSector = getSectorFromCode(employeeCode);
    const employeeShift = employeeCodeInfo.shift;
    
    const partners = [];
    
    // Procurar outros funcionários trabalhando no mesmo dia, mesmo setor e turno compatível
    fisioterapeutas.forEach(otherEmployee => {
        if (otherEmployee.id === employeeId) return; // Não comparar consigo mesmo
        
        const otherCode = otherEmployee.escala[day - 1];
        const otherCodeInfo = codeMap[otherCode];
        
        if (!otherCodeInfo || otherCodeInfo.category !== "work") return;
        
        const otherSector = getSectorFromCode(otherCode);
        const otherShift = otherCodeInfo.shift;
        
        // Verificar compatibilidade
        const sectorsCompatible = 
            employeeSector === otherSector || 
            employeeSector === "Geral" || 
            otherSector === "Geral" ||
            (employeeSector.includes("CTI") && otherSector.includes("CTI")) ||
            (employeeSector.includes("UCO") && otherSector.includes("UCO"));
        
        const shiftsCompatible = areShiftsCompatible(employeeShift, otherShift);
        
        if (sectorsCompatible && shiftsCompatible) {
            partners.push({
                id: otherEmployee.id,
                nome: otherEmployee.nome,
                code: otherCode,
                shift: otherShift,
                time: otherCodeInfo.time
            });
        }
    });
    
    return partners;
}

// 4. Função para prever passagem de plantão
function findHandoverInfo(employeeId, day) {
    const employee = fisioterapeutas.find(e => e.id === employeeId);
    if (!employee) return null;
    
    const employeeCode = employee.escala[day - 1];
    const employeeCodeInfo = codeMap[employeeCode];
    
    // Só há passagem de plantão se for um turno que termina
    if (!employeeCodeInfo || employeeCodeInfo.category !== "work") return null;
    
    // Para plantonistas noturnos (19:00-7:00), a passagem é para quem trabalha de manhã
    if (employeeCodeInfo.shift === "night") {
        // Procurar quem trabalha no próximo dia de manhã no mesmo setor
        const nextDay = day + 1;
        if (nextDay > 31) return null; // Fim do mês
        
        const employeeSector = getSectorFromCode(employeeCode);
        
        for (const otherEmployee of fisioterapeutas) {
            if (otherEmployee.id === employeeId) continue;
            
            const otherCode = otherEmployee.escala[nextDay - 1];
            const otherCodeInfo = codeMap[otherCode];
            
            if (!otherCodeInfo || otherCodeInfo.category !== "work") continue;
            
            const otherSector = getSectorFromCode(otherCode);
            
            // Verificar se é turno da manhã no mesmo setor
            if (otherCodeInfo.shift === "morning" && 
                (employeeSector === otherSector || 
                 employeeSector.includes("CTI") && otherSector.includes("CTI") ||
                 employeeSector.includes("UCO") && otherSector.includes("UCO"))) {
                return {
                    toEmployeeId: otherEmployee.id,
                    nome: otherEmployee.nome,
                    day: nextDay,
                    shift: "Manhã"
                };
            }
        }
    }
    
    // Para plantonistas diurnos (7:00-19:00), a passagem é para quem trabalha à noite
    if (employeeCodeInfo.shift === "full" && employeeCodeInfo.time === "7:00-19:00") {
        // Procurar quem trabalha à noite no mesmo setor
        const employeeSector = getSectorFromCode(employeeCode);
        
        for (const otherEmployee of fisioterapeutas) {
            if (otherEmployee.id === employeeId) continue;
            
            const otherCode = otherEmployee.escala[day - 1]; // Mesmo dia, turno diferente
            const otherCodeInfo = codeMap[otherCode];
            
            if (!otherCodeInfo || otherCodeInfo.category !== "work") continue;
            
            const otherSector = getSectorFromCode(otherCode);
            
            // Verificar se é turno da noite no mesmo setor
            if (otherCodeInfo.shift === "night" && 
                (employeeSector === otherSector || 
                 employeeSector.includes("CTI") && otherSector.includes("CTI") ||
                 employeeSector.includes("UCO") && otherSector.includes("UCO"))) {
                return {
                    toEmployeeId: otherEmployee.id,
                    nome: otherEmployee.nome,
                    day: day,
                    shift: "Noite"
                };
            }
        }
    }
    
    // Para quem trabalha apenas de manhã (7:00-13:00), a passagem é para quem trabalha à tarde
    if (employeeCodeInfo.shift === "morning" && employeeCodeInfo.time === "7:00-13:00") {
        // Procurar quem trabalha à tarde no mesmo setor
        const employeeSector = getSectorFromCode(employeeCode);
        
        for (const otherEmployee of fisioterapeutas) {
            if (otherEmployee.id === employeeId) continue;
            
            const otherCode = otherEmployee.escala[day - 1]; // Mesmo dia
            const otherCodeInfo = codeMap[otherCode];
            
            if (!otherCodeInfo || otherCodeInfo.category !== "work") continue;
            
            const otherSector = getSectorFromCode(otherCode);
            
            // Verificar se é turno da tarde no mesmo setor
            if (otherCodeInfo.shift === "afternoon" && 
                (employeeSector === otherSector || 
                 employeeSector.includes("CTI") && otherSector.includes("CTI") ||
                 employeeSector.includes("UCO") && otherSector.includes("UCO"))) {
                return {
                    toEmployeeId: otherEmployee.id,
                    nome: otherEmployee.nome,
                    day: day,
                    shift: "Tarde"
                };
            }
        }
    }
    
    return null;
}

// Configurações - Janeiro 2026 começa na QUINTA-FEIRA (4)
const firstDayOfMonth = 4; // Quinta-feira
const daysInMonth = 31;

// Estado da aplicação
let currentEmployee = fisioterapeutas[7]; // Começa com Alexandra (índice 7)
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

// Função para converter escala de array de códigos para formato do sistema
function convertEscala(escalaArray) {
    const workDays = [];
    
    for (let day = 1; day <= escalaArray.length; day++) {
        const code = escalaArray[day - 1];
        const codeInfo = codeMap[code];
        
        if (codeInfo && codeInfo.category === "work") {
            // Encontrar companheiros para este dia
            const partners = findWorkPartners(currentEmployee.id, day);
            
            // Encontrar passagem de plantão para este dia
            const handoverTo = findHandoverInfo(currentEmployee.id, day);
            
            workDays.push({
                day: day,
                code: code,
                description: codeInfo.description,
                shift: codeInfo.shift,
                time: codeInfo.time,
                partners: partners.map(p => p.id),
                handoverTo: handoverTo ? handoverTo.toEmployeeId : null,
                handoverInfo: handoverTo
            });
        }
    }
    
    return workDays;
}

// Inicializar dados de todos os dias de trabalho
function initializeAllWorkDays() {
    allWorkDays = {};
    fisioterapeutas.forEach(employee => {
        // Temporariamente definir como employee atual para calcular companheiros
        const tempCurrent = currentEmployee;
        currentEmployee = employee;
        
        // Converter a escala do formato PDF para o formato do sistema
        employee.escalaConvertida = convertEscala(employee.escala);
        allWorkDays[employee.id] = employee.escalaConvertida;
        
        currentEmployee = tempCurrent;
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
    const workDays = employee.escalaConvertida;
    
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
        const isNightShift = todayWorkDay.shift === "night";
        const isWorkingHours = (todayWorkDay.shift === "morning" && currentHour >= 7 && currentHour < 13) ||
                             (todayWorkDay.shift === "afternoon" && currentHour >= 13 && currentHour < 19) ||
                             (todayWorkDay.shift === "full" && employee.horario.includes("7:00") && currentHour >= 7 && currentHour < 19) ||
                             (todayWorkDay.shift === "night" && (currentHour >= 19 || currentHour < 7));
        
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
        const code = employee.escala[day - 1];
        const codeInfo = codeMap[code];
        
        // Verificar se é dia de trabalho
        const isWorkDay = codeInfo && codeInfo.category === "work";
        
        // Verificar se é hoje
        const isToday = isJanuary2026() && (day === currentDay);
        
        let className = 'day off';
        if (isWorkDay) {
            if (codeInfo.shift === "morning") {
                className = 'day work-morning';
            } else if (codeInfo.shift === "afternoon") {
                className = 'day work-afternoon';
            } else if (codeInfo.shift === "night") {
                className = 'day work-night';
            } else {
                className = 'day work';
            }
        } else if (code === "***") {
            className = 'day vacation';
            dayEl.style.backgroundColor = 'rgba(233, 30, 99, 0.1)';
            dayEl.style.borderColor = '#e91e63';
            dayEl.style.color = '#c2185b';
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
            
            const workDay = employee.escalaConvertida.find(d => d.day === day);
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
    
    const sortedWorkDays = [...employee.escalaConvertida].sort((a, b) => a.day - b.day);
    
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
        
        // Determinar classe baseada no turno
        let itemClass = 'work-day-item';
        if (workDay.shift === "morning") itemClass += ' morning';
        else if (workDay.shift === "afternoon") itemClass += ' afternoon';
        else if (workDay.shift === "night") itemClass += ' night';
        else if (workDay.shift === "full") itemClass += ' full';
        
        if (isToday) itemClass += ' today';
        
        // Obter nomes dos companheiros
        const partnerNames = workDay.partners.map(id => getEmployeeNameById(id)).join(', ');
        
        // Obter informação de passagem de plantão
        const handoverInfo = workDay.handoverInfo;
        
        const workDayItem = document.createElement('div');
        workDayItem.className = itemClass;
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
                <span class="shift-badge ${workDay.shift || ''}">${workDay.time || ''}</span>
                
                ${partnerNames ? `
                    <div class="work-day-partners">
                        <span style="font-size: 0.7rem; color: #666;">Provavelmente com:</span>
                        <span class="partner-badge">${partnerNames}</span>
                    </div>
                ` : ''}
                
                ${handoverInfo ? `
                    <div class="handover-badge">Passa plantão para: ${handoverInfo.nome} (${handoverInfo.shift})</div>
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

// Inicializar próximos dias de trabalho
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
            
            const todayItem = document.createElement('div');
            todayItem.className = 'next-day-item today';
            
            // Determinar classe do código baseado no tipo
            let codeClass = '';
            if (todayWorkDay.code === "PCti" || todayWorkDay.code === "P" || todayWorkDay.code === "PUco" || todayWorkDay.code === "PUn") {
                codeClass = todayWorkDay.code.toLowerCase();
            } else if (todayWorkDay.code === "MCti" || todayWorkDay.code === "M" || todayWorkDay.code === "MUco") {
                codeClass = 'm';
            } else if (todayWorkDay.code === "T" || todayWorkDay.code === "TUco" || todayWorkDay.code === "TUn") {
                codeClass = 't';
            } else if (todayWorkDay.code === "MT") {
                codeClass = 'mt';
            }
            
            // Obter nomes dos companheiros
            const partnerNames = todayWorkDay.partners.map(id => getEmployeeNameById(id));
            
            // Obter informação de passagem de plantão
            const handoverInfo = todayWorkDay.handoverInfo;
            
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
                    <div class="next-day-description">${todayWorkDay.description} • ${todayWorkDay.time}</div>
                    
                    ${partnerNames.length > 0 ? `
                        <div class="next-day-partners">
                            <span class="partner-label">Provavelmente com:</span>
                            ${partnerNames.map(name => `
                                <span class="partner-badge">
                                    <i class="fas fa-user"></i> ${name}
                                </span>
                            `).join('')}
                        </div>
                    ` : ''}
                    
                    ${handoverInfo ? `
                        <div class="handover-section">
                            <i class="fas fa-exchange-alt handover-icon"></i>
                            <div class="handover-text">
                                Passa plantão para: <span class="handover-name">${handoverInfo.nome}</span> (${handoverInfo.shift})
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
                
                // Determinar classe do código baseado no tipo
                let codeClass = '';
                if (workDay.code === "PCti" || workDay.code === "P" || workDay.code === "PUco" || workDay.code === "PUn") {
                    codeClass = workDay.code.toLowerCase();
                } else if (workDay.code === "MCti" || workDay.code === "M" || workDay.code === "MUco") {
                    codeClass = 'm';
                } else if (workDay.code === "T" || workDay.code === "TUco" || workDay.code === "TUn") {
                    codeClass = 't';
                } else if (workDay.code === "MT") {
                    codeClass = 'mt';
                }
                
                // Obter nomes dos companheiros
                const partnerNames = workDay.partners.map(id => getEmployeeNameById(id));
                
                // Obter informação de passagem de plantão
                const handoverInfo = workDay.handoverInfo;
                
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
                        <div class="next-day-description">${workDay.description} • ${workDay.time}</div>
                        
                        ${partnerNames.length > 0 ? `
                            <div class="next-day-partners">
                                <span class="partner-label">Provavelmente com:</span>
                                ${partnerNames.map(name => `
                                    <span class="partner-badge">
                                        <i class="fas fa-user"></i> ${name}
                                    </span>
                                `).join('')}
                            </div>
                        ` : ''}
                        
                        ${handoverInfo ? `
                            <div class="handover-section">
                                <i class="fas fa-exchange-alt handover-icon"></i>
                                <div class="handover-text">
                                    Passa plantão para: <span class="handover-name">${handoverInfo.nome}</span> (${handoverInfo.shift})
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

// Inicializar informações de companheiros (com sistema de previsão)
function initPartnerInfo(employee) {
    if (!employee) return;
    
    partnerInfoEl.innerHTML = '';
    handoverInfoEl.innerHTML = '';
    
    // Coletar todos os companheiros únicos com informações detalhadas
    const allPartners = {};
    const handovers = {};
    
    employee.escalaConvertida.forEach(workDay => {
        // Companheiros
        workDay.partners.forEach(partnerId => {
            if (!allPartners[partnerId]) {
                const partner = getEmployeeById(partnerId);
                if (partner) {
                    allPartners[partnerId] = {
                        ...partner,
                        daysWith: [],
                        totalDays: 0
                    };
                }
            }
            
            if (allPartners[partnerId]) {
                allPartners[partnerId].daysWith.push(workDay.day);
                allPartners[partnerId].totalDays++;
            }
        });
        
        // Passagem de plantão
        if (workDay.handoverInfo) {
            const handoverId = workDay.handoverInfo.toEmployeeId;
            if (!handovers[handoverId]) {
                const handoverEmployee = getEmployeeById(handoverId);
                if (handoverEmployee) {
                    handovers[handoverId] = {
                        ...handoverEmployee,
                        days: [],
                        totalDays: 0
                    };
                }
            }
            
            if (handovers[handoverId]) {
                handovers[handoverId].days.push({
                    day: workDay.day,
                    shift: workDay.handoverInfo.shift
                });
                handovers[handoverId].totalDays++;
            }
        }
    });
    
    // Adicionar companheiros
    const partnerKeys = Object.keys(allPartners);
    if (partnerKeys.length === 0) {
        partnerInfoEl.innerHTML = `
            <div class="no-work-days">
                Com base na escala, não foi possível identificar companheiros de trabalho regulares.<br>
                Isso pode ocorrer por turnos diferentes ou setores distintos.
            </div>
        `;
    } else {
        partnerInfoEl.innerHTML = `
            <div style="margin-bottom: 15px;">
                <h4 style="color: var(--primary); font-size: 0.9rem; margin-bottom: 8px;">
                    <i class="fas fa-users"></i> Companheiros de Trabalho Previstos
                </h4>
                <p style="font-size: 0.75rem; color: var(--gray); margin-bottom: 10px;">
                    Com base nas escalas, estes são os colegas que provavelmente trabalham com você:
                </p>
            </div>
        `;
        
        Object.values(allPartners).forEach(partner => {
            const partnerItem = document.createElement('div');
            partnerItem.className = 'partner-item';
            
            partnerItem.innerHTML = `
                <div style="flex: 1;">
                    <div class="partner-name">${partner.nome}</div>
                    <div class="partner-shift">Matrícula: ${partner.matricula} | Trabalham juntos em ${partner.totalDays} dia(s)</div>
                    
                    <div class="partner-details">
                        <div style="font-size: 0.7rem; color: var(--primary); margin-bottom: 5px;">
                            Dias: ${partner.daysWith.join(', ')}
                        </div>
                        <div style="font-size: 0.7rem; color: var(--gray);">
                            Setor: ${partner.setor} | Horário: ${partner.horario}
                        </div>
                    </div>
                </div>
            `;
            
            partnerInfoEl.appendChild(partnerItem);
        });
    }
    
    // Adicionar informações de passagem de plantão
    const handoverKeys = Object.keys(handovers);
    if (handoverKeys.length === 0) {
        handoverInfoEl.innerHTML = `
            <div class="no-work-days">
                Com base na escala, não foi identificada passagem regular de plantão.<br>
                Isso pode ocorrer por ser o único plantonista no setor ou turno.
            </div>
        `;
    } else {
        let handoverHTML = `
            <div class="handover-label" style="font-size: 0.9rem; margin-bottom: 10px;">
                <i class="fas fa-exchange-alt"></i> Previsão de Passagem de Plantão
            </div>
            <p style="font-size: 0.75rem; color: var(--gray); margin-bottom: 15px;">
                Com base nos turnos e setores, você provavelmente passará o plantão para:
            </p>
        `;
        
        Object.values(handovers).forEach(handover => {
            const daysList = handover.days.map(d => `Dia ${d.day} (${d.shift})`).join(', ');
            
            handoverHTML += `
                <div class="partner-item" style="margin-bottom: 10px;">
                    <div style="flex: 1;">
                        <div class="partner-name">${handover.nome}</div>
                        <div class="partner-shift">Matrícula: ${handover.matricula} | ${handover.totalDays} vez(es) no mês</div>
                        <div style="font-size: 0.7rem; color: var(--gray); margin-top: 5px;">
                            Dias previstos: ${daysList}
                        </div>
                    </div>
                </div>
            `;
        });
        
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
        { label: "Dias de Trabalho:", value: employee.escalaConvertida.length }
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
    
    const workDaysCount = employee.escalaConvertida.length;
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
    employee.escalaConvertida.forEach(workDay => {
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
        const codeInfo = codeMap[code];
        if (codeInfo) {
            if (codeInfo.shift === "morning") color = "#4caf50";
            else if (codeInfo.shift === "afternoon") color = "#ff9800";
            else if (codeInfo.shift === "night") color = "#9c27b0";
            else if (codeInfo.shift === "full") color = "#3a57e8";
        }
        
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
    
    // Legenda completa baseada no PDF
    const legendCodes = {
        "F": "Folga",
        "M": "Manhã",
        "T": "Tarde", 
        "MT": "Manhã e Tarde",
        "P": "Plantão Geral",
        "MCti": "Manhã CTI",
        "PCti": "Plantão CTI",
        "PUco": "Plantão UCO",
        "TUco": "Tarde UCO",
        "MUco": "Manhã UCO",
        "PUn": "Plantão Noturno",
        "TUn": "Tarde Noturno",
        "***": "Férias"
    };
    
    Object.keys(legendCodes).forEach(code => {
        const codeItem = document.createElement('div');
        codeItem.className = 'code-item';
        
        // Gerar cor baseada no código
        let color = "#3a57e8";
        if (code === "F") color = "#6c757d";
        else if (code === "M" || code === "MCti" || code === "MUco") color = "#4caf50";
        else if (code === "T" || code === "TUco" || code === "TUn") color = "#ff9800";
        else if (code === "MT") color = "#4caf50";
        else if (code === "P" || code === "PCti" || code === "PUco" || code === "PUn") color = "#3a57e8";
        else if (code === "***") color = "#e91e63";
        
        codeItem.innerHTML = `
            <div class="code-badge" style="background-color: ${color};">${code}</div>
            <div class="code-desc">${legendCodes[code]}</div>
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
    
    // Obter informação de passagem de plantão
    const handoverInfo = workDay.handoverInfo;
    
    let details = `📅 ${capitalizedDay}, ${workDay.day} de Janeiro de 2026\n\n`;
    details += `🏥 ${workDay.description} (${workDay.code})\n`;
    details += `⏰ Horário: ${workDay.time || employee.horario}\n`;
    details += `📍 Setor: ${employee.setor}\n`;
    
    if (partnerNames) {
        details += `\n👥 Provavelmente trabalha com: ${partnerNames}\n`;
    }
    
    if (handoverInfo) {
        details += `\n🔄 Previsão de passagem de plantão para: ${handoverInfo.nome} (${handoverInfo.shift})\n`;
    }
    
    alert(details);
}

function showDayDetails(day, code) {
    const date = new Date(2026, 0, day);
    const dayOfWeek = date.toLocaleDateString('pt-BR', { weekday: 'long' });
    const capitalizedDay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
    const codeInfo = codeMap[code];
    const description = codeInfo ? codeInfo.description : "Desconhecido";
    
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
        
        // Converter escala para o formato do sistema com previsões
        employee.escalaConvertida = convertEscala(employee.escala);
        
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
    
    // Selecionar Alexandra por padrão (id 8)
    employeeSelectEl.value = "8";
}

// Inicializar a aplicação
function initApp() {
    // Popular seletor
    populateEmployeeSelector();
    
    // Carregar dados do primeiro funcionário (Alexandra)
    loadEmployeeData(8);
    
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