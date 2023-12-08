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
				quote: 'A escolha de cada integrante foi devido às suas capacidades técnicas e seus conhecimentos. Lucas sendo o programador, Stephany e Flávia com experiência na escrita e Leonardo com suas experiências profissionais e pessoais, João Pedro criativo e comunicativo.',
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
				quote: 'A ideia baseava-se em um sistema de rastreamento de encomendas em tempo real. No entanto, descobrimos que o correio já possuía esse sistema, o que tornaria inviável continuar o projeto, uma vez que ele já existia.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: '# ',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
			{
				author: '10/02/2023 -> Criação do diário de bordo',
				quote: 'Lucas deu a ideia de criar algo de autoria própria, já que todos os outros iriam usar sites prontos e, no final, ficariam todos iguais. Tive essa ideia durante uma madrugada, quando as melhores ideias costumam aparecer. No site, foram utilizados elementos simples, porém funcionais, como um sistema de autenticação de usuário e senha para preservar as informações e permitir o acesso apenas para quem deve ter permissão.A linguagem utilizada para criar o site foi HTML, CSS e JavaScript.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: '#',
				mainColor: '#2392db',
				colors: [
					'#2fffcb',
					'#2f63ff'
				]
			},
      {
				author: '14/02/2023 -> A nova escolha de tema',
				quote: 'Lucas, um dos integrantes, tinha uma ideia para o TCC final e quando viu a oportunidade, apresentou-a ao grupo. O grupo gostou do tema proposto por ele: Gerenciamento de estoque baseado em inteligência artificial preditiva.',
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
				quote: 'Foram discutidas os debates sobre as informações no diário de bordo',
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
				quote: 'Principais pontos "Estoques não tem a tamanha eficiência como deveria" "Falta de eficiencia nos estoques"',
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
				quote: 'Houve vários desentendimentos sobre a execusão desde os integrantes esperando um ao outro e o tema estar parado. Houve apenas discussão no grupo e nada pessoalmente. ',
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
				quote: 'discursão interna sobre o trabalho que não estava em andamento - reuniao em grupo para delimitação do tempo. ',
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
				quote: 'Diferença entre problemática e a falta de gerenciamento nos estoques pode gerar prejuízos para as  empresas ',
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
				quote: 'Estoque excessivo: manter um estoque excessivo pode levar a empresa a arcar com custos de armazenagem, além de possíveis perdas por obsolescência ou deterioração do produto. Além disso, o dinheiro que está investido no estoque não está sendo utilizado em outras áreas que poderiam trazer retorno financeiro para a empresa. ',
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
				quote: 'Edição da parte escrita para o formato ABNT ',
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
				quote: 'Discutimos opiniões e tivemos conversas sobre o tema do TCC sobre a  possibilidade de troca do tema ou continuar com o mesmo ( Grupo decidiu manter o tema atual) e consequentemente foi o nosso maior erro',
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
				quote: 'Um dos integrantes do grupo decidiu mudar o tema e que não foram do agrado do restante dos integrantes. A metade dos integrantes aceitaram e a outra pessoa não (Um dos integrantes se afastou do grupo até conseguir conversar com a professora responsável) ',
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
				quote: 'O tema foi falado sobre o transporte em si e entramos em consenso que iriamos fazer sobre; A dificuldade na distribuição de insumos hospitalares no estado de São Paulo no ano de 2020 - Pandemia ',
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
				quote: 'Fomos discutir e desenvolver o novo tema na casa de um dos integrantes e um dos integrantes ficou de fora, pois estávamos brigados e nos distanciamos. ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
      {
				author: '26/04/2023 ',
				quote: 'Foi feita a revisão de todo o trabalho feito, acréscimos das hipóteses. Atualização do diário de bordo para o tempo atual. ',
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
				quote: 'Tivemos uma conversa em sala de aula, com a volta do integrante que estava afastado. Tivemos que desenvolver o tema inteiro em apenas um dia de noite para poder enviar no dia seguinte para a Simone. Lucas e Stephany revisaram e reformularam tudo que tinha sido feito até o presente momento (enquanto o restante do grupo estava dormindo e não ajudaram) e consequentemente perdemos o horário do trabalho. ',
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
				quote: 'João e Leonardo discutiram sobre o tema para elaborar a hipótese (pois estávamos com raiva deles por não ter ajudado no dia anterior) ',
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
				quote: 'Montagem da Metodologia - Escolhemos o tipo de pesquisa explicativa, o método vai ser o estudo de caso. ',
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
				quote: 'Flavia ficou responsável por divulgar a pesquisa para podermos ter os dados para estudar e analisar ',
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
				quote: 'Fizemos as correções que a professora Simone mandou do PTCC ',
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
				quote: 'Fizemos uma reunião para começar a montagem da apresentação e tivemos várias dúvidas no caminho, mas no final conseguimos montar todos os slides.',
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
				quote: 'Marcamos reunião para poder reformular os pontos citados no nosso TCC ',
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
				quote: 'Conversamos sobre delimitar o tema, escolhendo Equipamentos Médicos e estabelecendo limites mais específicos para o assunto. ',
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
				quote: 'Fizemos uma reunião para terminar de modificar as partes para melhoria ',
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
				quote: 'Houve reuniões sobre modificar os pontos que foram abordados na Prévia do TCC. Fizemos as melhorias conforme foram apontadas, até que no dia 15/06/2023 a professora Simnone deu a resolutiva "E comentou que iria chegar em certo ponto da pesquisa que não iriamos conseguir as informações para poder terminar o trabalho e com isso tivemos que descartar o tema apresentado"',
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
				quote: 'Começamos a pesquisar para podermos fazer um novo tema já que o antigo acabamos não encontrando dados suficientes para continuar.',
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
				quote: 'Tivemos algumas ideias e colocamos em votação 1- Armazenamento de Cargas Perigosas, 2- Análise da Eficiência Operacional na atividade de picking, 3- Robôs Autônomos nos Processos logísticos, 4- Exportação de carga viva. ',
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
				quote: 'Escolhemos o tema 1- Armazenamento de Cargas Perigosas  ',
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
				quote: 'Tivemos discussões para  podermos lapidar o tema escolhido. Fizemos vídeo-chamada no Discord para chegar em um consenso e o tema ficou como " TRANSPORTE DE NITRATO DE AMÔNIA NA CESARI DE CUBATÃO" ',
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
				quote: 'Tentamos melhorar mais o tema eficou como " Gestão de Segurança no Transporte de Nitrato de Amônia na Cesari de Cubatão" ',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'https://cdn.discordapp.com/attachments/1071495282996564121/1166463566736535593/Imagem_do_WhatsApp_de_2023-10-24_as_16.47.27_9e3ceeab.jpg?ex=654a94da&is=65381fda&hm=638af1a0da3815691e989823c927c635b527b8f160b9ef905cb5d3bbd9a968d9& ',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '31/07/2023 a 04/08/2023 ',
				quote: 'Montamos a "Introdução" e elaboranos as perguntas das pesquisas cuja integrante Stephany iria levar para o Gestor dela responder e assim termos dados concretos sobre o assunto. ',
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
				quote: 'Fizemos uma outra alteração no Tema por conta de direito autorais que seria o nome da empresa em si que iriamos trabalhar em cima.',
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
				quote: 'O Gestor da Stephany respondeu as perguntas e começamos a trabalhar em cima das respostas.',
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
				quote: 'Definido nosso orientador (André)',
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
				quote: 'Desenvolvimento do Objetivo Geral e Específicos',
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
				quote: 'Tivemos um debate sobre se juntarmos aos domingos às 14h00 que já havia sido combinado para fazer o trabalho',
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
				quote: 'Separação do  que cada um vai apresentar na apresentação de terça',
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
				quote: 'Apresentação e melhorias em alguns pontos ( Objetivo gerais muito grande, problematica não é pergunta, justificativa pequena )',
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
				quote: 'Tivemos dúvidas sobre o desenvolvimento final e começamos as pesquisas',
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
				quote: 'Não houve reunião pois todos estavam com alguma pendências para resolver no domingo e não pudemos comparecer',
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
				quote: 'Inicio do desenvolivmento, conversamos no grupo falando sobre os pontos que poderiamos se aprofundar',
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
			{
				author: '26/09/2023 ',
				quote: 'Na aula de PTCC fomos para o laboratório para modificar algumas partes do TCC e corrigir as modificações feita pelo professor André',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '10/10/2023 ',
				quote: 'Em aula grupo combinou de se juntar na quinta "Feriado" para poder fazer o desenvolivmento',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
			{
				author: '12/10/2023 ',
				quote: 'Leo, Ste, Jão e Lucas se juntaram para fazer o desenvolvimento acordado. Flavia não apareceu e não deu sinal.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
			{
				author: '13/10/2023 ',
				quote: 'Não nos reunimos, porém cada um já sabia o que tinha que ajustar para fazer.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '14/10/2023 e 15/10/2023' ,
				quote: 'Ste e João se juntaram para formatar e terminar a introdução.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '16/10/2023' ,
				quote: 'Todos do grupo cobraram a Flavia para fazer a parte dela, pois a mesma não havia feito.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
			{
				author: '17/10/2023' ,
				quote: 'Começamos a elaboração do slide para apresentação na terça-feira. Cada um separou seus tópicos para apresentar.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '19/10/2023' ,
				quote: 'Criamos os cracha <3.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'https://cdn.discordapp.com/attachments/1071495282996564121/1166463567042715799/Imagem_do_WhatsApp_de_2023-10-24_as_16.48.15_e3aebdd6.jpg?ex=654a94da&is=65381fda&hm=bf22b46b9746b281981ac9205b497b2bae6534347fdff3304f57a848653e5498& ',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
			{
				author: '23/10/2023' ,
				quote: 'Ultimos ajuste para o dia da apresentação .',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'https://cdn.discordapp.com/attachments/1071495282996564121/1166463566400979105/Imagem_do_WhatsApp_de_2023-10-24_as_16.47.05_17b0b1a8.jpg?ex=654a94da&is=65381fda&hm=3c9b86a99123404f04696fd7ca93878a77f60aac8bd23e21d087f25ff6e555be& ',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
			{
				author: '24/10/2023' ,
				quote: 'Dia da apresentação, ajustes finais, criação das plaquinhas. Passamos o dia ajustando os slides e as partes escritas para a apresentação.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'https://cdn.discordapp.com/attachments/1071495282996564121/1176160679376474152/WhatsApp_Image_2023-10-24_at_16.25.25.jpeg?ex=656ddbfd&is=655b66fd&hm=930831b8fc36f9304aca2488414cc4ba7e2d576ab79c0e945f8847fed3c1fce8& ',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
			{
				author: '24/10/2023' ,
				quote: 'Apresentação <3',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'https://cdn.discordapp.com/attachments/1071495282996564121/1176160649768861696/Stories_para_Instagram_com_montagem_de_fotos_viagem_simples_branco.png?ex=656ddbf6&is=655b66f6&hm=2a23ffbea9acc6f6254b88c4195d7464fb896c3886420cdfd26e10df928d2834& ',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '25/10/2023' ,
				quote: 'Melhorias pós apresentação',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'https://cdn.discordapp.com/attachments/1071495282996564121/1176161185691873320/WhatsApp_Image_2023-10-25_at_20.09.58.jpeg?ex=656ddc76&is=655b6776&hm=4368a38b858ca8ca70f300c204cbb9c77fc32ad23b0bf244d6c44c894de534e2& ',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},

			{
				author: '27/10/2023 a 07/11/2023'  ,
				quote: 'Nesse período, trabalhamos nas correções apresentadas, tanto na parte escrita quanto nos slides. Criamos um roteiro para termos uma base na hora da apresentação, assim podendo melhorar nossa performance no dia da apresentação final.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'https://cdn.discordapp.com/attachments/1071495282996564121/1176161648902410310/0c751105-9f0b-4626-958c-087cd33f04e7.jpeg?ex=656ddce5&is=655b67e5&hm=6bbb7f43cac78728d58a09aeac2b20bbb58b2d23acacef2600f5efbed692333e& ',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
			{
				author: '08/11/2023 a 17/11/2023'  ,
				quote: ' Começamos a trabalhar na análise de dados. Nesse tempo, criamos outro formulário para obter mais informações sobre a amônia. Descobrimos que é possível neutralizar a explosividade da mesma com medidas de segurança ao lidar com a amônia em situações onde pode ocorrer uma explosão. Ajustamos a parte escrita que estava faltando algumas coisas.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1 ',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
			{
				author: '20/11/2023'  ,
				quote: 'O professor deu feedback sobre o que precisamos modificar para entregar a parte escrita. Então, nos reunimos para correr com isso a tempo.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
			{
				author: '02/12/2023'  ,
				quote: 'Modificando o slide para a apresentação final e aprimorando os pontos abordados.',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
			{
				author: '08/12/2023'  ,
				quote: 'Chegou o dia da apresentação final. Em nossas considerações finais, gostaríamos de expressar: Enlouquecemos',
				img: 'https://cdn.discordapp.com/attachments/1071495282996564121/1112544595243442256/PYBr.gif',
				internalImg: 'URL_DA_IMAGEM_INTERNA_1',
				mainColor: '#2392db',
				colors: [
					'#9b59b8', 
					'#fae69e'
				]
			},
	
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
