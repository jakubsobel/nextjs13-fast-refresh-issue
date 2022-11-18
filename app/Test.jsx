export default async function Test() {
    await new Promise(resolve => setTimeout(resolve, 10000));

    return <div>10 seconds have passed</div>;
}