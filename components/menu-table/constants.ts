import { WeekData } from './types';

export const WEEK_A: WeekData = {
  id: 'A',
  dates: [
    '20 al 24 de Octubre',
    '03 al 07 de Noviembre',
    '17 al 21 de Noviembre',
    '01 al 05 de Diciembre'
  ],
  days: [
    {
      day: 'Lunes',
      snackMatutino: 'Yogurt con frutas y granola',
      mainProtein: 'Milanesa de pollo',
      mainVeggie: 'Milanesa de zapallito',
      sideDish: 'Tortilla de espinaca y queso, Arroz',
      salads: ['Tomate y zanahoria', 'Ensalada verde'],
      dessert: 'Salchichón de coco y cacao',
      afternoonSnack: 'Fiesta de frutas'
    },
    {
      day: 'Martes',
      snackMatutino: 'Galletas integrales con hummus de lentejas',
      mainProtein: 'Pesca a la plancha',
      mainVeggie: 'Burger de quinoa y avena',
      sideDish: 'Papas y boniatos al horno',
      salads: ['Capresse', 'Ensalada verde'],
      dessert: 'Curd de limón con crocante',
      afternoonSnack: 'Torta de zanahoria'
    },
    {
      day: 'Miércoles',
      snackMatutino: 'Fiesta de frutas',
      mainProtein: 'Pastel de carne',
      mainVeggie: 'Pastel de lenteja',
      sideDish: 'Choclo asado',
      salads: ['Tomate, zanahoria y brócoli', 'Ensalada verde'],
      dessert: 'Crumble de manzana',
      afternoonSnack: 'Chipá de queso y espinaca'
    },
    {
      day: 'Jueves',
      snackMatutino: 'Arepas de queso y tomate',
      mainProtein: 'Taco time: carne, pollo',
      mainVeggie: 'Taco time: tofu',
      sideDish: 'Quinoa, encurtidos y salteado de vegetales',
      salads: ['Coleslaw', 'Ensalada verde'],
      dessert: 'Coquitos deliciosos',
      afternoonSnack: 'Fiesta de frutas'
    },
    {
      day: 'Viernes',
      snackMatutino: 'Fiesta de frutas',
      mainProtein: 'Pasta con salsa bolognesa',
      mainVeggie: 'Pasta con fileto y brócoli',
      sideDish: 'Fainá de hierbas',
      salads: ['Tomate, calabaza y choclo', 'Ensalada verde'],
      dessert: 'Helado casero',
      afternoonSnack: 'Cookie de cacao y avena con chips de choco blanco'
    }
  ]
};

export const WEEK_B: WeekData = {
  id: 'B',
  dates: [
    '27 al 31 de Octubre',
    '10 al 14 de Noviembre',
    '24 al 28 de Noviembre',
    '08 al 12 de Diciembre'
  ],
  days: [
    {
      day: 'Lunes',
      snackMatutino: 'Yogurt con frutas y granola',
      mainProtein: 'Cuadril al horno',
      mainVeggie: 'Medallón de quinoa y avena',
      sideDish: 'Papas, boniatos, zanahoria y coliflor al horno; Arroz con choclo',
      salads: ['Pepino, repollo y zanahoria', 'Ensalada verde'],
      dessert: 'Fiesta de frutas',
      afternoonSnack: 'Muffin de naranja y canela'
    },
    {
      day: 'Martes',
      snackMatutino: 'Grisines integrales de queso. Hummus de girasol y guacamole',
      mainProtein: 'Bife a la portuguesa',
      mainVeggie: 'Medallones de zucchini a la portuguesa',
      sideDish: 'Polenta cremosa; Puré de calabaza',
      salads: ['Tomate, remolacha, huevos y garbanzo', 'Ensalada verde'],
      dessert: 'Cheesecake frutal',
      afternoonSnack: 'Barritas de cereales'
    },
    {
      day: 'Miércoles',
      snackMatutino: 'Fiesta de frutas',
      mainProtein: 'Ensalada Cesar',
      mainVeggie: 'Ensalada de Tofu Cesar',
      sideDish: 'Muffins de brócoli y queso; Cous cous',
      salads: ['Tomate, zanahoria y choclo', 'Ensalada verde'],
      dessert: 'Trufa de coco',
      afternoonSnack: 'Fiesta de frutas'
    },
    {
      day: 'Jueves',
      snackMatutino: 'Sandwich caliente de queso, huevo y tomate',
      mainProtein: 'Smash burger gratinada',
      mainVeggie: 'Burger de lenteja',
      sideDish: 'Arroz basmati y quinoa; Vegetales asados',
      salads: ['Palta, cebolla, porotos negros y cherrys', 'Ensalada verde'],
      dessert: 'Pincho de frutas',
      afternoonSnack: 'Galleta de avena y chocolate'
    },
    {
      day: 'Viernes',
      snackMatutino: 'Panqueque de avena, miel y frutas',
      mainProtein: 'Ñoquis con bolognesa',
      mainVeggie: 'Ñoquis con fileto o pesto',
      sideDish: 'Choclo asado',
      salads: ['Lentejas, cherrys, zanahoria y espinaca', 'Ensalada verde'],
      dessert: 'Sniker',
      afternoonSnack: 'Chipá de queso'
    }
  ]
};

export const THEME_COLORS = {
  headerBg: 'bg-[#8EB096]',
  accentColor: '#D39885',
  accent: 'text-[#D39885]',
  accentBg: 'bg-[#D39885]',
  border: 'border-black',
  text: 'text-black',
};

export const MENU_CATEGORIES = [
  { label: 'Snack Matutino', key: 'snackMatutino', iconName: 'Sun' },
  { label: 'Principal Proteína', key: 'mainProtein', iconName: 'Utensils' },
  { label: 'Principal Veggie', key: 'mainVeggie', iconName: 'Leaf' },
  { label: 'Guarnición', key: 'sideDish', iconName: 'Carrot' },
  { label: 'Ensaladas', key: 'salads', iconName: 'Salad' },
  { label: 'Postre', key: 'dessert', iconName: 'Cookie' },
  { label: 'Snack Tarde', key: 'afternoonSnack', iconName: 'Moon' },
];
