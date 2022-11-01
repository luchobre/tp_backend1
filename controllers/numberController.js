/////////////////////////FUNCION PARA DETERMINAR LOS NUMEROS DE FIBONACCI/////////////////////////

const numFib = (n) => {
    const fib = [0, 1];

    for (let i = 2; i<= n; i++) {
        fib[i] = fib[i -1] + fib[i - 2];
    }

    return fib;
};

////////////////////////CONTROLLERS GET, POST, PUT, DELETE////////////////////////

const getNumber = (req, res) => {
console.log('getNumber')
res.send('getNumber 2')
}

const createNumber = (req, res) => {
    console.log('comando POST')

    !req.body.position
        ? res.send(`Los primeros 20 numeros de la serie de fibonacci son [${numFib(20)}]`)
        : typeof req.body.position !== "number"
        ? res.status(400).send(`ERROR 400. Por favor escriba un número seguido de "position: "`)
        : res.send(numFib(req.body.position));
}

const putNumber = (req, res) => {
console.log('esto es put number');
res.send('esto es put number 2');
}

const deleteNumber = (req, res) => {
console.log('esto es delete number');
res.send('esto es delete number 2');
}

module.exports = {
    getNumber,
    createNumber,
    putNumber,
    deleteNumber,
}


