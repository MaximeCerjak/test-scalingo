export default function getEnv(name: string) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing ${name} env variable`);
    }
    return value;
}
