export const cafe = {
  name: 'Bule Café e Cozinha', tagline: 'Café & bons encontros',
  address: 'Rua do Sol, 128', city: 'São Paulo, SP', phone: '(11) 0000-0000',
  hours: 'Seg–sex, 8h às 19h', weekend: 'Sáb–dom, 9h às 17h',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=cafeterias+São+Paulo',
};
export const navigation = [ ['Nossa casa', '#sobre'], ['Cardápio', '#cardapio'], ['Nosso jeito', '#diferenciais'], ['Depoimentos', '#depoimentos'], ['Visite-nos', '#visite'] ];
export const products = [
  {id:'latte', category:'Café especial', size:'180 ml', name:'Latte da casa', description:'Espresso encorpado, leite cremoso e um pequeno carinho em forma de latte art.', price:16, image:'/images/latte.jpg', alt:'Latte cremoso com desenho delicado sobre a espuma', ingredients:'Espresso de origem brasileira e leite vaporizado. Também disponível com bebida de aveia (+ R$ 4).', note:'Contém leite. Opção vegetal disponível.'},
  {id:'black', category:'Clássico', size:'120 ml', name:'Long Black', description:'Intenso, aromático e sem pressa. Para sentir cada nota do nosso café especial.', price:12, image:'/images/black.jpg', alt:'Café preto servido em copo de vidro', ingredients:'Dose dupla de espresso sobre água quente. Notas de chocolate, caramelo e castanhas.', note:'Sem leite. Sem adição de açúcar.'},
  {id:'toast', category:'Brunch', size:'Até as 16h', name:'Ovos & Toast', description:'Pão de fermentação natural, ovos macios e aquele toque fresco para começar bem.', price:32, image:'/images/toast.jpg', alt:'Toast artesanal com ovos e folhas frescas', ingredients:'Pão de fermentação natural, ovos pochê, molho holandês e ervas frescas.', note:'Contém glúten, ovos e leite.'},
  {id:'breakfast', category:'Favorito', size:'Até as 16h', name:'Bom dia, sem pressa', description:'Um prato generoso, cheio de cor. Tudo o que uma manhã tranquila merece.', price:42, image:'/images/breakfast.jpg', alt:'Brunch com ovos, pão artesanal e acompanhamentos', ingredients:'Ovos, pão artesanal, abacate, tomates e folhas da estação. Acompanha café coado.', note:'Contém glúten e ovos. Consulte as opções do dia.'},
];
export const extraMenu = [{name:'Espresso', price:9, category:'Cafés'}, {name:'Café coado',price:12,category:'Cafés'}, {name:'Cappuccino',price:17,category:'Cafés'}, {name:'Iced latte',price:19,category:'Cafés'}, {name:'Croissant na chapa',price:16,category:'Para acompanhar'}, {name:'Bolo do dia',price:14,category:'Para acompanhar'}];
export const reviews = [
 {name:'Marina S.',initials:'MS',text:'O tipo de lugar que transforma um café rápido na melhor parte do dia. O latte é incrível e o atendimento faz a gente se sentir em casa.',detail:'Apaixonada pelo latte',tone:'green'},
 {name:'Rafael C.',initials:'RC',text:'Ambiente lindo, café bem feito e um brunch que vale a pausa. Já virou meu cantinho favorito para as manhãs de sábado.',detail:'Frequentador de sábado',tone:'orange'},
 {name:'Beatriz A.',initials:'BA',text:'Tudo tem cuidado: a comida, a música, a luz entrando pela janela. Você chega pelo café e fica pela sensação boa.',detail:'Sempre volta pelo brunch',tone:'brown'},
];
export const money = (value:number) => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL', maximumFractionDigits:0}).format(value);
