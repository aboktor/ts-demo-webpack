console.log('loading three');
export async function three() {
    console.log('running three');
    import('./one').then(m => m.one());
}