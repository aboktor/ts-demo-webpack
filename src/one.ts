console.log('loading one');
export async function one() {
    console.log('running one');
    import('./two').then(m => m.two());
}