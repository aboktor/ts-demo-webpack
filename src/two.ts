console.log('loading two');
export async function two() {
    console.log('running two');
    import('./three').then(m => m.three());
}