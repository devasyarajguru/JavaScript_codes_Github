let myfunc = function(...args)
{
    console.log(args);
    console.log(args[0],args[1]);
}

myfunc(10,20,30); // [10 ,20 , 30] -- As there is one argument so it stores one variable in form of array

// function myfunc(...args)
// {
//     console.log(args);

// }

// myfunc(10);