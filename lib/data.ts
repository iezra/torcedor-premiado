export interface Team {
  name: string;
  abbr: string;
  soon: boolean;
  crest: string; // path in /public/crests/
}

export interface TeamTheme {
  color: string;
  cheer: string;
  of: string;
}

export const themes: Record<string, TeamTheme> = {
  Flamengo: { color: "#E30613", cheer: "Nação Rubro-Negra", of: "do Flamengo" },
  Corinthians: { color: "#111111", cheer: "Fiel Torcida", of: "do Corinthians" },
  Palmeiras: { color: "#026B3F", cheer: "Torcida Alviverde", of: "do Palmeiras" },
  "São Paulo": { color: "#E4002B", cheer: "Torcida Tricolor", of: "do São Paulo" },
  Vasco: { color: "#111111", cheer: "Gigante da Colina", of: "do Vasco" },
  Grêmio: { color: "#0B6FB4", cheer: "Torcida Gremista", of: "do Grêmio" },
  Internacional: { color: "#E5050F", cheer: "Massa Colorada", of: "do Internacional" },
  Cruzeiro: { color: "#003A70", cheer: "Nação Azul", of: "do Cruzeiro" },
  "Atlético-MG": { color: "#111111", cheer: "Massa Atleticana", of: "do Galo" },
  Santos: { color: "#FFD200", cheer: "Torcida Santista", of: "do Santos" },
  Botafogo: { color: "#111111", cheer: "Torcida Alvinegra", of: "do Botafogo" },
  Fluminense: { color: "#7A0C2E", cheer: "Torcida Tricolor", of: "do Fluminense" },
};

export const teams: Team[] = [
  { name: "Flamengo", abbr: "FLA", soon: false, crest: "/crests/escudo-flamengo.webp" },
  { name: "Corinthians", abbr: "COR", soon: false, crest: "/crests/escudo-corinthians.webp" },
  { name: "Palmeiras", abbr: "PAL", soon: false, crest: "/crests/escudo-palmeiras.webp" },
  { name: "São Paulo", abbr: "SPF", soon: false, crest: "/crests/escudo-sao-paulo.webp" },
  { name: "Vasco", abbr: "VAS", soon: false, crest: "/crests/escudo-vasco.webp" },
  { name: "Grêmio", abbr: "GRE", soon: false, crest: "/crests/escudo-gremio.webp" },
  { name: "Internacional", abbr: "INT", soon: false, crest: "/crests/escudo-internacional.webp" },
  { name: "Cruzeiro", abbr: "CRU", soon: false, crest: "/crests/escudo-cruzeiro.webp" },
  { name: "Atlético-MG", abbr: "CAM", soon: false, crest: "/crests/escudo-atletico-mg.webp" },
  { name: "Santos", abbr: "SAN", soon: false, crest: "/crests/escudo-santos.webp" },
  { name: "Botafogo", abbr: "BOT", soon: false, crest: "/crests/escudo-botafogo.webp" },
  { name: "Fluminense", abbr: "FLU", soon: false, crest: "/crests/escudo-fluminense.webp" },
  { name: "Bahia", abbr: "BAH", soon: true, crest: "/crests/escudo-bahia.webp" },
  { name: "Fortaleza", abbr: "FOR", soon: true, crest: "/crests/escudo-fortaleza.webp" },
  { name: "Athletico-PR", abbr: "CAP", soon: true, crest: "/crests/escudo-athletico-pr.webp" },
  { name: "RB Bragantino", abbr: "RBB", soon: true, crest: "/crests/escudo-rb-bragantino.webp" },
  { name: "Sport", abbr: "SPT", soon: true, crest: "/crests/escudo-sport.webp" },
  { name: "Coritiba", abbr: "CFC", soon: true, crest: "/crests/escudo-coritiba.webp" },
  { name: "Juventude", abbr: "JUV", soon: true, crest: "/crests/escudo-juventude.webp" },
  { name: "Goiás", abbr: "GOI", soon: true, crest: "/crests/escudo-goias.webp" },
  { name: "Vitória", abbr: "VIT", soon: true, crest: "/crests/escudo-vitoria.webp" },
  { name: "Remo", abbr: "REM", soon: true, crest: "/crests/escudo-remo.webp" },
  { name: "Ponte Preta", abbr: "PON", soon: true, crest: "/crests/escudo-ponte-preta.webp" },
  { name: "Guarani", abbr: "GUA", soon: true, crest: "/crests/escudo-guarani.webp" },
  { name: "Mirassol", abbr: "MIR", soon: true, crest: "/crests/escudo-mirassol.webp" },
  { name: "Chapecoense", abbr: "CHA", soon: true, crest: "/crests/escudo-chapecoense.webp" },
  { name: "Atlético-GO", abbr: "ACG", soon: true, crest: "/crests/escudo-atletico-go.webp" },
  { name: "Ceará", abbr: "CEA", soon: true, crest: "/crests/escudo-ceara.webp" },
  { name: "Criciúma", abbr: "CRI", soon: true, crest: "/crests/escudo-criciuma.webp" },
  { name: "Vila Nova", abbr: "VIL", soon: true, crest: "/crests/escudo-vila-nova.webp" },
  { name: "CRB", abbr: "CRB", soon: true, crest: "/crests/escudo-crb.webp" },
  { name: "CSA", abbr: "CSA", soon: true, crest: "/crests/escudo-csa.webp" },
  { name: "Novorizontino", abbr: "NOV", soon: true, crest: "/crests/escudo-novorizontino.webp" },
  { name: "Náutico", abbr: "NAU", soon: true, crest: "/crests/escudo-nautico.webp" },
  { name: "Figueirense", abbr: "FIG", soon: true, crest: "/crests/escudo-figueirense.webp" },
  { name: "Paysandu", abbr: "PAY", soon: true, crest: "/crests/escudo-paysandu.webp" },
  { name: "Cuiabá", abbr: "CUI", soon: true, crest: "/crests/escudo-cuiaba.webp" },
  { name: "Operário", abbr: "OPE", soon: true, crest: "/crests/escudo-operario.webp" },
  { name: "São Bernardo", abbr: "SBE", soon: true, crest: "/crests/escudo-sao-bernardo.webp" },
  { name: "América-MG", abbr: "AMG", soon: true, crest: "/crests/escudo-america-mg.webp" },
];

export const faqs = [
  { q: "Quanto custa?", a: "R$1,99 no primeiro mês e R$9,90 por mês depois. Você pode cancelar quando quiser, sem multa." },
  { q: "Como recebo o Vale Bônus?", a: "Você ganha R$100 em Vale Bônus assim que se cadastra, liberados automaticamente na sua conta e avisados pelo WhatsApp." },
  { q: "O que é o prêmio por gol?", a: "A cada gol que o seu time marcar, você ganha mais R$100 em Vale Bônus. Quanto mais o time joga, mais você ganha." },
  { q: "Como funcionam os sorteios de iPhone?", a: "Todos os dias um assinante ativo é sorteado e leva um iPhone 17 novo. Sua assinatura já garante sua participação." },
  { q: "E o sorteio do carro?", a: "Todo mês um torcedor troca a assinatura de R$9,90 por um carro BYD zero km. É um por mês, o ano inteiro." },
  { q: "Preciso torcer para um time específico?", a: "Não. Você escolhe entre os clubes participantes e passa a receber os benefícios ligados a ele." },
  { q: "Meu time não está na lista. E agora?", a: 'Novos clubes entram toda semana. Os que aparecem como "Em breve" estão em processo de adesão.' },
  { q: "Como faço para assinar?", a: "Escolha seu time nesta página, clique em continuar e finalize tudo em segundos pelo WhatsApp." },
  { q: "O pagamento é seguro?", a: "Sim. O pagamento é recorrente e processado com segurança. Seus dados ficam protegidos." },
  { q: "Posso cancelar quando quiser?", a: "Sim. Não há fidelidade nem multa. Você cancela pelo WhatsApp a qualquer momento." },
  { q: "Onde uso o Vale Bônus?", a: "O Vale Bônus pode ser usado nas recompensas e parceiros do clube. As opções aparecem no seu WhatsApp." },
  { q: "Como aumento minhas chances?", a: "Indicando amigos, participando diariamente e torcendo por gols — cada ação vira mais números da sorte." },
  { q: "Preciso instalar algum aplicativo?", a: "Não precisa baixar nada: os avisos de prêmios e sorteios chegam no WhatsApp que você já usa." },
  { q: "Os prêmios são reais?", a: "Sim. Todos os prêmios seguem um regulamento e os vencedores são comunicados oficialmente." },
  { q: "Posso assinar para mais de um time?", a: "Cada assinatura é ligada a um time. Você pode gerenciar suas preferências direto no WhatsApp." },
];

export const stackItems = [
  { title: "R$100 em Vale Bônus de boas-vindas", desc: "Na hora em que você se cadastra", value: "R$100", icon: "banknote" as const },
  { title: "+R$100 em Vale Bônus a cada gol", desc: "Quanto mais gols, mais prêmio", value: "+R$100/gol", icon: "flame" as const },
  { title: "1 iPhone 17 sorteado todo dia", desc: "365 iPhones por ano entre assinantes", value: "Diário", icon: "smartphone" as const },
  { title: "R$100 mil sorteados toda semana", desc: "Dinheiro na conta de assinantes ativos", value: "Semanal", icon: "wallet" as const },
  { title: "1 Carro BYD sorteado todo mês", desc: "Doze carros zero por ano", value: "Mensal", icon: "car" as const },
];
