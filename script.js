import * as ko from "https://cdn.skypack.dev/knockout@3.5.1";

function TestimonialVM(settings = {}){
  const self = this;
  //members
  self.elID = settings.elID ?? '';
  self.elToBind = settings.elToBind ?? (self.elID ? document.querySelector('#'+self.ID) : null);
  //observables
  self.testimonials = ko.observableArray([]);
  //funcs
  self.getTestimonials = function(){
    // simulating a fetch of testimonials
		self.testimonials([
			{
				author: '08/02/2023 - Escolha dos integrantes',
				quote: 'A escolha de cada integrante foi devido às suas capacidades técnicas e seus conhecimentos.Lucas sendo o programador, Stephany e Flávia com experiência na escritas, Leonardo com suas experiências profissionais e pessoal, João Pedro criativo e comunicativo.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'https://media.discordapp.net/attachments/1071495282996564121/1112539300853207090/Imagem_do_WhatsApp_de_2023-05-24_as_14.06.26.jpg?ex=65142137&is=6512cfb7&hm=419b1528617af057367d0b3dbcca2ecbc1b152f972455f964e52c473bae38912&=&width=929&height=375',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
			{
				author: '09/02/2023 -> A escolha do tema',
				quote: 'A ideia baseava-se em um sistema de rastreamento de encomendas em tempo real.No entanto, descobrimos que o correio já possuía esse sistema, o que tornaria inviável continuar o projeto, uma vez que ele já existia.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
			{
				author: '10/02/2023 -> Criação do diario de bordo',
				quote: 'Eu dei a ideia de criar algo de autoria própria, já que todos os outros iriam usar sites prontos e, no final, ficariam todos iguais. Tive essa ideia durante uma madrugada, quando as melhores ideias costumam aparecer. No site, foram utilizados elementos simples, porém funcionais, como um sistema de autenticação de usuário e senha para preservar as informações e permitir o acesso apenas para quem deve ter permissão.A linguagem utilizada para criar o site foi HTML, CSS e JavaScript.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#2fffcb',
					'#2f63ff'
				]
			},
      {
				author: '14/02/2023 -> A nova escolha de tema',
				quote: 'Lucas, um dos integrantes, tinha uma ideia para o TCC final e quando viu a oportunidade, apresentou-a ao grupo.O grupo gostou do tema proposto por ele: Gerenciamento de estoque baseado em inteligência artificial preditiva.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '20/02/2023 -> Ideias Durante a discussão',
				quote: 'O grupo pensou em uma forma mais simples de pronunciar o nome do projeto "Gerenciamento de estoque baseado em inteligência artificial preditiva".Então, criaram o acrônimo G.E.B.I.A.P. ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '01/03/2023',
				quote: 'Feito debates sobre as informações no diario de bordo',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '04/03/2023 -> Debate sobre a problematica ',
				quote: 'Principais pontos "Estoques nao tem a tamanha eficiência como devira" "Falta de eficiencia nos estoques"',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '03/03 a 08/03/2023 ',
				quote: 'Houve vários desentendimento sobre execusão desde a integrantes esperando um ao outro e o tema estar parado.Houve apenas discussão no grupo e nada pessoalmente. ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '09/03/2023 ',
				quote: 'Discursao interna sobre o trabalho que nao estava em andamento - reuniao em grupo para delimitação do tempo. ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '09/03/2023 -> Delimitação ',
				quote: 'Descartes de produtos no "mercadinho do seu João" do bairro vila natal, no período de "6 de janeiro à 28 dezembro de 2022" ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '13/03/2023 ',
				quote: 'Discursão sobre o tema do trabalho no tema "preditivo" ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				mainColor: '#2392db',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '17/03/2023 -> Delimitação do tema ',
				quote: 'Delimitação: gerenciamento de estoque da empresa G.E.B.I.A.P LTDA, do período de janeiro a dezembro de 2020 ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '22/03/2023 ',
				quote: 'Diferença entre problematica falta de gerenciamento nos estoques pode gerar prejuízos as empresas ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '23/03/2023 -> Problema ',
				quote: 'Estoque excessivo: manter um estoque excessivo pode levar a empresa a ter que arcar com custos de armazenagem, além de possíveis perdas por obsolescência ou deterioração do produto. Além disso, o dinheiro que está investido no estoque não está sendo utilizado em outras áreas que poderiam trazer retorno financeiro para a empresa. ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '24/03/2023 -> Elaboração da parte escrita ',
				quote: 'Foi elaborado e entregue a primeira parte escrita. ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '30/03/2023 ',
				quote: 'Edição da parte escrita para o formato Abnt ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '01/04 a 13/04 ',
				quote: 'Opniões trocadas varias conversas sobre o tema do TCC possibilidade de troca de tema ou continuar com o mesmo ( Grupo decidiu manter o tema atual) ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '17/04/2023 ',
				quote: 'Um dos integrades do grupo decidiu mudar o tema uma ideia que nao agradou a todos. Uns aceitaram outro não (Um dos integrantes se afastou do grupo ate conseguir conversar com a professora responsavel) ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '18/04/2023 ',
				quote: 'tema Foi falado fortemente sobre transporte. Entramos em consenso que iriamos fazer sobre: A dificuldade na distribuição de insumos hospitalares no estado de São Paulo no ano de 2020 - pandemia ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '22/04/2023 Reunião do grupo ',
				quote: 'casa de um dos integrantes para colocar o novo tema em dia e poder dar continuidade ao trabalho. ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112539300853207090/Imagem_do_WhatsApp_de_2023-05-24_as_14.06.26.jpg',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '26/04/2023 ',
				quote: 'Revisão de todo o trabalho feito, mais acréscimos das hipóteses. Atualização do diário de bordo para o tempo atual. ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '03/05/2023 ',
				quote: 'Conversa geral em sala ( antigo integrante retornou as suas atividades no grupo) Lucas e Stephany Revisaram e reformularam tudo que tinha sido feito ate o presente momento ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '04/05/2023 ',
				quote: 'Joao e Leo fazendo discursões para elaborar a hipotese ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '10/05/2023 ',
				quote: 'Montagem da Metodologia - Escolhemos o tipo de pesquisa explicativa, o metodo vai ser estudo de caso. ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '13/05/2023 ',
				quote: 'Flavia ficou responsavel por divulgar a pesquisa para podermos ter os dados para estudar e analisar ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '14/05/2023 ',
				quote: 'Fizemos as correçoes que a prof Simone mandou do PTCC ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '15/05/2023 a 17/05/2023 ',
				quote: 'Fizemos uma reunião para começar a montagem da apresentação. Tivemos várias dúvidas no caminho, mas no final conseguimos montar todos os slides.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '17/05/2023 ',
				quote: 'O Dia da Apresentação ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '18/05/2023 ',
				quote: 'Marcamos reuniao para poder reformular os pontos sintados no nosso TCC ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '19/05/2023 - 25/05/2023 ',
				quote: 'Conversamos entre nós para delimitar mais o tema, escolhendo Equipamentos Médicos e estabelecendo limites mais específicos para o assunto. ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '27/05/2023 ',
				quote: 'Fizemos uma reuniao para terminar de modificar as partes para melhoria ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '28/05/2023 a  29/06/2023',
				quote: 'Houveram varias reuniões sobre modificar os pontos que foram abordados na Previa do TCC. Fizemos as melhorias conforme foram apontadas, Ate que no dia 15/06/2023 a provessora simnone deu a resolutiva "E comentou que iria chegar em certo ponto da pesquisa que não iriamos conseguir as informações para poder terminar o trabalho com isso tivemos que descartar o tema apresentado"',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '30/06/2023 ',
				quote: 'Começamos a pesquisar para podermos fazer um novo tema já que o antigo  ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '02/07/2023 ',
				quote: 'Tivemos algumas ideias e colocamos em votação 1-Armazenamento de cargas perigosas, 2-Análise da eficiência operacional na atividade de picking, 3-Robôs autônomos nos processos logísticos, 4- Exportação de carga viva. ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '03/07/2023 ',
				quote: 'Escolhemos o tema 1- Armazenamento de cargas perigosas ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '04/07/2023 a 24/07/2023 ',
				quote: 'Tivemos varias reuniões para  podermos lapidar o tema escolhido. Fizemos varias reunioes no discord para em fim chegar em um consenço e o tema ficou como " TRANSPORTE DE NITRATO DE AMÔNIA NA CESARI DE CUBATÃO" ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '26/07/2023 ',
				quote: 'Tentamos melhorar mais o tema em ficou como " Gestão de Segurança no Transporte de Nitrato de Amônia na Cesari de Cubatão" ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '31/07/2023 a 04/08/2023 ',
				quote: 'Montamos a "Introdução" montamos a perguntas das pesquisas cuja Sthe iria levar para o Gestor dela responder e assim termos dados concretos sobre o assunto. ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'https://media.discordapp.net/attachments/1071495282996564121/1156338397380616334/Imagem_do_WhatsApp_de_2023-08-20_as_14.09.55.jpg?ex=65149b8d&is=65134a0d&hm=2a09349213e0dc173e11b39884618f8d54627253bff1ea5f79aa1b74e630a89a&=&width=302&height=671',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '05/08/2023 ',
				quote: 'Fizemos uma outra alteração no Tema por conta de direito autorais que seria o nome da empresa em sim que iria trabalhar em cima.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '11/08/2023 ',
				quote: 'O Gestor da Sthe respondeu as perguntas e começamos a trabalhar em cima das respostas.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '16/08/2023 ',
				quote: 'Definido nosso orientador',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '16/08/2023 ',
				quote: 'Desenvolvimento do objetivo geral e específicos',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'https://media.discordapp.net/attachments/1071495282996564121/1156338398391443588/Imagem_do_WhatsApp_de_2023-07-19_as_21.14.42.jpg?ex=65149b8d&is=65134a0d&hm=c5b178bfa2eb1f3464f71735d05e0cdae774e4d75cf85657d949651de31ef020&=&width=1269&height=671',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '18/08/2023 ',
				quote: 'Debate sobre se juntar no domingo que ja havia sido combinado para fazer o trabalho',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '20/08/2023 ',
				quote: 'Separando o que cada um vai apresentar na apresentação de terça',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'https://media.discordapp.net/attachments/1071495282996564121/1156338398689251429/Imagem_do_WhatsApp_de_2023-08-06_as_14.25.57.jpg?ex=65149b8d&is=65134a0d&hm=21260d111a4ec6c473136b8e009e52b7672b2988aa2684df78c32be2301474aa&=',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '29/08/2023 ',
				quote: 'Apresentação e melhorias em alguns pontos ( Objetivo gerais muito grande, Problematica não é pergunta, justificativa pequena )',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'https://media.discordapp.net/attachments/1071495282996564121/1156338397691006976/Imagem_do_WhatsApp_de_2023-08-29_as_23.58.32.jpg?ex=65149b8d&is=65134a0d&hm=b13a817a00b6a87f5564d85b9ae637c9b09e1ad6763e6a809b10b213a2d531f0&=&width=895&height=671',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '05/09/2023 ',
				quote: 'Duvidas sobre o desenvolvimento final. Começamos as pesquisa',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'https://media.discordapp.net/attachments/1071495282996564121/1156338398018158642/Imagem_do_WhatsApp_de_2023-07-19_as_08.18.54.jpg?ex=65149b8d&is=65134a0d&hm=069c6ab3476ead9b830b7057aee31a5497b716b3899b86dffa04543fd58d4056&=',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '10/09/2023 ',
				quote: 'Não houve reunião pois geral estava com alguma coisa para fazer no domingo e nao pode comparecer',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '11/09/2023 - 14/09/2023 ',
				quote: 'Inicio do desenvolivmento, Conversamos no grupo falando sobre os pontos que poderiamos se aprofundar',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
			{
				author: '17/09/2023 - 19/09/2023 ',
				quote: 'Pesquisa em livros sobre o transporte de amônia, melhorando o problema de pesquisa para adequar-se à hipótese',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
			
		//	author: ' ',
		//		quote: ' ',
		//		img: 'https://chat.openai.com/favicon-32x32.png',
		//		mainColor: '#75a99c',
		//		colors: [
		//			'#9b59b8', 
		//			'#fae69e'
		//		]
		//	},

		])
  };
  // init
  self.init = function(){ 
		self.getTestimonials();
    if(self.elToBind)ko.applyBindings(self,self.elToBind);
    else ko.applyBindings(self);
  }();
}

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = new TestimonialVM({elID: 'testimonials'});
});