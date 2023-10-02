const input = 'R2, L3, R2, R4, L2, L1, R2, R4, R1, L4, L5, R5, R5, R2, R2, R1, L2, L3, L2, L1, R3, L5, R187, R1, R4, L1, R5, L3, L4, R50, L4, R2, R70, L3, L2, R4, R3, R194, L3, L4, L4, L3, L4, R4, R5, L1, L5, L4, R1, L2, R4, L5, L3, R4, L5, L5, R5, R3, R5, L2, L4, R4, L1, R3, R1, L1, L2, R2, R2, L3, R3, R2, R5, R2, R5, L3, R2, L5, R1, R2, R2, L4, L5, L1, L4, R4, R3, R1, R2, L1, L2, R4, R5, L2, R3, L4, L5, L5, L4, R4, L2, R1, R1, L2, L3, L2, R2, L4, R3, R2, L1, L3, L2, L4, L4, R2, L3, L3, R2, L4, L3, R4, R3, L2, L1, L4, R4, R2, L4, L4, L5, L1, R2, L5, L2, L3, R2, L2';

const arrInput = input.split(', ').map((i) => {
    return i.trim();
});

let coordenates = [0, 0];

// Lendo melhor o texto, e pegando uma dica no fórum, não pode levar ao pé da letra só esquerda e direita.
// Tem que ter um direcionamento para onde está indo. Conforme o texto abaixo do exemplo:
// Seguindo R2, L3 deixa você 2 quarteirões a leste e 3 quarteirões ao norte, ou 5 quarteirões de distância.
let cardinal_point = ['N', 'E', 'S', 'W'];
let current_direction = 0;

let walk = {
    N: d => (coordenates[1] -= d),
    W: d => (coordenates[1] += d),
    E: d => (coordenates[0] += d),
    S: d => (coordenates[0] -= d),
}

arrInput.forEach((i) => {
    const blocks = parseInt(i.slice(1));

    // Aqui é feito o cálculo para qual direção seguir.
    if (i.startsWith('R')) {
        current_direction = (current_direction + 1) % cardinal_point.length;
    } else {
        current_direction = (current_direction + 3) % cardinal_point.length;
    }

    let direction = cardinal_point[current_direction];
    walk[direction](blocks);
})

console.log(coordenates[1] - coordenates[0]);