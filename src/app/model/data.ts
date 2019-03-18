import { Tweet } from "./tweet";

var dia : Date = new Date();

export const ALL_TWEETS: Tweet[] = [
{
    fecha: dia.toLocaleDateString() + " a las " + dia.toLocaleTimeString(),
    texto: 'You know something is unusual when your code runsperfect at first time',
    autor: 'JustADevGuy',
    idUser: 'JustADevGuy'
},
{
    fecha: dia.toLocaleDateString() + " a las " + dia.toLocaleTimeString(),
    texto: '1969: What are you doing with that 2KB of RAM? -sendingpeople to the moon',
    autor: 'Marlon',
    idUser: 'Alex_Gal'
},
{
    fecha: dia.toLocaleDateString() + " a las " + dia.toLocaleTimeString(),
    texto: '2019: What are you doing with that 1.5GB of RAM? -Justchecking facebook',
    autor: 'Andrés',
    idUser: 'GDAndres98'
},
{
    fecha: dia.toLocaleDateString() + " a las " + dia.toLocaleTimeString(),
    texto: 'Mi primer tweet!',
    autor: 'Edward',
    idUser: 'EdFBaronG'
}];
