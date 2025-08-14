# curso-js

📋 Mais 15 exercícios avançados de if
1) Média ponderada com recuperação e bônus
Peça três notas: N1 (peso 2), N2 (peso 3) e N3 (peso 5).

Calcule a média ponderada.

Se média ≥ 7 → “Aprovado”.

Se 5 ≤ média < 7 → peça nota do exame; se (média+exame)/2 ≥ 6 → “Aprovado em exame”, senão “Reprovado”.

Se o aluno tiver trabalho extra (sim/não) e a média estiver entre 6.8 e 6.99, some 0.2 (máx. 10) antes de decidir.

2) Desconto progressivo + cupom
Peça valor da compra e cupom ("FRETEGRATIS" ou "DESC10" ou vazio).

Desconto: ≥ 500 → 15%; ≥ 300 → 10%; ≥ 150 → 5%; senão 0%.

Cupom: "DESC10" aplica +10% (acumulativo), "FRETEGRATIS" zera frete (R$ 25 padrão).

Se depois dos descontos o valor < 0, ajuste para 0 e avise.

3) Estacionamento por faixas
Peça horas (pode ser decimal).

Até 1h → R$ 12

1h até 4h → R$ 12 + R$ 6 por hora adicional (arredonde para cima a fração)

4h → R$ 30 fixo

Se pernoite (sim/não) e horas > 10 → +R$ 20.
Valide horas > 0.

4) Triângulo: validade e tipo
Peça três lados.

Primeiro valide a desigualdade triangular.

Se válido:

Todos iguais → Equilátero

Dois iguais → Isósceles

Todos diferentes → Escaleno

Se inválido → “Triângulo inválido”.

5) Quadrante no plano cartesiano
Peça x e y.

x = 0 e y = 0 → Origem

x = 0 → Eixo Y

y = 0 → Eixo X

x > 0 && y > 0 → Q1; x < 0 && y > 0 → Q2; x < 0 && y < 0 → Q3; x > 0 && y < 0 → Q4.

6) Bolsa de estudos (múltiplos critérios)
Peça média, renda familiar e nº de moradores.

Calcule renda per capita = renda / moradores.

Conceda bolsa:

Integral se média ≥ 8 e per capita ≤ 1320.

Parcial se média ≥ 7 e per capita ≤ 1980.

Senão, “Sem bolsa”.

7) Empréstimo bancário
Peça salário, tempo de emprego (meses), valor da parcela e se está negativado (sim/não).

Aprove se: não negativado e tempo ≥ 6 e parcela ≤ 0.3 × salário.

Se reprovado, informe o(s) motivo(s) específico(s).

8) Multa de velocidade graduada
Peça velocidade do veículo e limite da via.

Até o limite → “Dentro do limite”.

Até 20% acima → “Infração leve”.

Até 50% acima → “Infração grave”.

Acima de 50% → “Infração gravíssima”.

9) Turno e saudação com validação de hora
Peça hora (0–23).

5–11 → “Bom dia”

12–17 → “Boa tarde”

18–23 ou 0–4 → “Boa noite”

Fora de 0–23 → “Hora inválida”.

10) Plano de celular
Peça código do plano (1=Basic, 2=Plus, 3=Pro) e se quer internet extra (sim/não).

Basic: R$ 39; Plus: R$ 59; Pro: R$ 79.

Internet extra: +R$ 15 (apenas se Plus/Pro).

Se tentar extra no Basic, negar e avisar.

11) Validação completa de data
Peça dia, mês, ano.

Valide mês 1–12 e dia compatível:

1,3,5,7,8,10,12 → 31 dias

4,6,9,11 → 30 dias

2 → 28 ou 29 (ano bissexto)

Se válido, mostre “Data válida”; senão, “Data inválida”.

12) Energia elétrica por faixa + tarifa social
Peça kWh consumidos e se é tarifa social (sim/não).

Até 100 kWh: R$ 0,60/kWh

101–200: R$ 0,75/kWh

200: R$ 0,90/kWh

Se tarifa social e consumo ≤ 150, aplique -15% no total.
Valide kWh > 0.

13) Meia-entrada
Peça idade e se é estudante (sim/não).

Paga meia se: idade < 12 ou idade ≥ 60 ou estudante.

Senão, preço inteiro.
Informe qual regra aplicou.

14) Jogo de dados: par, trinca ou sequência
Peça três números de 1 a 6 (jogados).

Se os três iguais → Trinca

Se dois iguais → Par

Se formam sequência crescente (ex.: 2,3,4) → Sequência

Senão → “Sem combinação”
Valide faixa 1–6.

15) Estoque e nível de alerta
Peça quantidade em estoque e estoque mínimo.

≤ 0 → “Esgotado”

0 e ≤ mínimo → “Crítico”

mínimo e ≤ (mínimo × 2) → “Baixo”

(mínimo × 2) → “OK”.

16) Conta do restaurante com taxa e divisão
Peça valor da conta, qualidade do serviço (1=ruim, 2=ok, 3=ótimo) e nº de pessoas.

Gorjeta: 5%, 10% ou 15% conforme qualidade.

Taxa de serviço opcional (sim/não): +10% se “sim”.

Calcule total e valor por pessoa (valide pessoas ≥ 1).

17) Frete por peso e distância
Peça peso (kg) e distância (km).

Base por peso: ≤ 2kg → R$ 12; ≤ 10kg → R$ 25; >10kg → R$ 40.

Adicional por distância:

≤ 100 km → +R$ 0

101–500 km → +R$ 15

500 km → +R$ 30

Se peso > 30 → “Carga não aceita”.

18) Horário de funcionamento com exceção
Peça dia da semana (1=Dom, …, 7=Sáb) e hora (0–23).

Aberto: seg–sex (2–6) das 9–18; sáb (7) das 9–13.

Domingo (1) fechado.

Exceção: se dia útil e feriado (sim/não) → fechado.

19) Validação de notas múltiplas
Peça quatro notas (0–10).

Se qualquer nota fora do intervalo → “Nota inválida”.

Se todas válidas, mostre a média e classifique (≥7 aprovado; 5–6.9 recuperação; <5 reprovado).

20) Credencial de acesso multinível
Peça perfil (1=usuário, 2=gestor, 3=admin) e chave de segurança (número).

Usuário: acesso básico (independe da chave).

Gestor: exige chave par.

Admin: exige chave múltipla de 5 e > 100.

Negue com motivo se falhar.

21) Simulador de combustível (etanol vs gasolina)
Peça preço do etanol e gasolina.

Regra: etanol compensa se etanol ≤ 0.7 × gasolina.

Mostre qual compensa e a razão.

22) Validação de senha com confirmação
Peça senha e confirmação.

Se vazias → “Senha inválida”.

Se diferentes → “Senhas não coincidem”.

Se length < 6 → “Senha fraca (mínimo 6)”.

Senão → “Senha cadastrada”.

23) Classificação de temperatura
Peça temperatura em °C.

< 0 → “Congelante”

0–14 → “Frio”

15–25 → “Agradável”

26–35 → “Quente”

> 35 → “Muito quente”.

24) Validação de horário de prova
Peça hora de entrada (0–23) e tempo de prova (min).

Entrada válida: entre 8h e 10h.

Se entrou no limite (10h), só pode fazer se tempo ≤ 120 min.

Fora da janela → “Entrada não permitida”.

25) Seguro de veículo
Peça idade do condutor, anos de CNH e se houve sinistro nos últimos 12 meses (sim/não).

Elegível se idade ≥ 21, CNH ≥ 2 anos e sem sinistro.

Se elegível, calcule franquia: base R$ 1500; se idade < 25 ou CNH < 3 anos, franquia +20%.