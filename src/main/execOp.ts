export default (op: string | null, n1: number, n2: number) =>
{
    switch (op) {
        case '+': return n1 + n2;
        case '-': return n1 - n2;
        case '*': return n1 * n2;
        case '/': return n1 / n2;
        default: return 0;
    }
};
